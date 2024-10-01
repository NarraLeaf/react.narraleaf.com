import { Callout } from 'nextra/components';
import React from 'react';
import { Lang } from '../type';

export const Deprecated = function({lang}: Readonly<{
    lang: Lang
}>) {
    const Message: {
        [key in Lang]: string;
    } = {
        "en-US": "This feature is deprecated and will not be supported in future versions.",
        "zh-CN": "此功能已弃用，将不会在未来版本中支持。"
    };

    return (
        <Callout type="warning" emoji="⚠️">
            {Message[lang] || Message["en-US"]}
        </Callout>
    )
};

