import { NextRequest, NextResponse } from 'next/server'
import newSitePages from './new-site-pages.json'

/**
 * This site is retired: its documentation now lives at www.narraleaf.com.
 *
 * Every request is answered with a permanent redirect to the matching page on
 * the new site, so search engines move what they have indexed here over to it
 * instead of keeping two copies of the same docs competing with each other.
 *
 * `new-site-pages.json` is the list of pages under `/docs/narraleaf-react` on
 * www.narraleaf.com (taken from its `content/docs/narraleaf-react`). An old page
 * with no counterpart goes to its nearest listed parent, never to a 404.
 */

const NEW_ORIGIN = 'https://www.narraleaf.com'
const NEW_DOCS_ROOT = '/docs/narraleaf-react'

const pages = new Set<string>(newSitePages)
const pagesByLowerCase = new Map<string, string>(newSitePages.map((page: string) => [page.toLowerCase(), page]))

/** Old pages that were renamed or folded into another page on the new site. */
const RENAMED: Record<string, string> = {
    introduction: '',
    'core/types/CommonDisplayable': 'core/types/CommonDisplayableConfig',
    'core/types/SceneConfig': 'core/types/ISceneUserConfig',
    'core/types/Background': 'core/types/ISceneUserConfig',
    'core/types/SoundConfig': 'core/elements/sound',
}

function resolvePage(oldPath: string): string {
    let segments = oldPath.split('/').filter(Boolean)
    if (segments.at(-1) === 'index') segments = segments.slice(0, -1)

    const joined = segments.join('/')
    if (joined in RENAMED) return RENAMED[joined]

    while (segments.length > 0) {
        const candidate = segments.join('/')
        if (pages.has(candidate)) return candidate
        const caseInsensitive = pagesByLowerCase.get(candidate.toLowerCase())
        if (caseInsensitive !== undefined) return caseInsensitive
        segments = segments.slice(0, -1)
    }
    return ''
}

/** Crawler files go to their counterparts, not to a page. */
const PASSTHROUGH = new Set(['/robots.txt', '/sitemap.xml'])

export function middleware(request: NextRequest) {
    if (PASSTHROUGH.has(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL(request.nextUrl.pathname, NEW_ORIGIN), 301)
    }

    let pathname = request.nextUrl.pathname
    let chinese = request.nextUrl.locale === 'zh-CN'

    // The locale can arrive as a path prefix or, for the raw page files, as a suffix.
    const prefix = pathname.match(/^\/(en-US|zh-CN)(?=\/|$)/)
    if (prefix) {
        chinese = prefix[1] === 'zh-CN'
        pathname = pathname.slice(prefix[0].length) || '/'
    }
    const suffix = pathname.match(/\.(en-US|zh-CN)$/)
    if (suffix) {
        chinese = suffix[1] === 'zh-CN'
        pathname = pathname.slice(0, -suffix[0].length)
    }

    const docs = pathname.match(/^\/documentation(?=\/|$)(.*)$/)
    const page = docs ? resolvePage(docs[1]) : ''

    const target = new URL(NEW_ORIGIN)
    target.pathname = (chinese ? '/zh' : '') + NEW_DOCS_ROOT + (page ? `/${page}` : '')

    return NextResponse.redirect(target, 301)
}

export const config = {
    matcher: '/:path*',
}
