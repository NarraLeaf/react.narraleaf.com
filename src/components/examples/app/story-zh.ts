// src/lib/story.ts

// 首先，导入必要的类
import { Story, Scene, Character, Image, Menu, Transform, c, b, FadeIn, Dissolve, i } from "narraleaf-react";

// 创建一个新的故事
// 故事名称用于调试和识别目的
const story = new Story("NarraLeaf-React 介绍");

// 创建主场景和背景
const mainScene = new Scene("introduction_scene", {
    background: "white",
});

const functionScene = new Scene("function_scene", {
    background: "/static/ui/outside.jpg",
});

const transitionScene = new Scene("transition_scene", {
    background: "/static/ui/outside.jpg",
});

// 创建角色及其对应的图片
const narrator = new Character("旁白");
const narra = new Character("Narra");

// 创建角色图片并设置位置
const narraImage = new Image<any>({
    src: "/static/char/narra.png",
    position: {
        xalign: 0.5,
        yalign: 0.4,
    },
    scale: 0.6
});

// 为场景添加动作
mainScene.action([
    mainScene.background.char("/static/ui/room.jpg", new FadeIn(1000)),

    // 显示角色并添加动画
    narraImage.show({
        duration: 1000,
    }),

    // 应用弹跳动画
    narraImage.transform(
        Transform.create()
            .position({ yoffset: -30 })
            .commit({ duration: 300, ease: "easeInOut" })
            .position({ yoffset: 0 })
            .commit({ duration: 300, ease: "easeInOut" })
    ),

    // 介绍对话
    narrator
        .say`欢迎使用 NarraLeaf-React！`
        .say`这是一个轻量级且功能强大的 React 视觉小说框架。`,

    narra
        .say`让我为您展示一些主要功能：`
        .say`1. ${b("轻量级")}：没有不必要的依赖和渲染库`
        .say`2. ${b("可定制")}：完全控制 UI`
        .say`3. ${b("开发者友好")}：使用 TypeScript 和 React 构建`
        .say`4. ${b("现代化")}：支持现代网页特性`,

    // 交互式菜单
    Menu.prompt("您想了解更多吗？")
        .choose("是的，让我看看更多功能！", [
            narraImage.hide({ duration: 1000 }),
            mainScene.jumpTo(functionScene, new Dissolve(1000)),
        ])
        .choose("我去查看文档", [
            narra.say`好的！访问我们的文档 ${b(c("react.narraleaf.com", "#40a8c5"))} 获取详细指南。`
        ])
]);

functionScene.action([
    Menu.prompt("您想了解什么？").choose("图片", [
        narraImage.show({ duration: 1000 }),
        narra.say`这是 Narra，我们游戏中的一个角色。`
        .say`您可以对她的图片应用各种效果。`
        .say`${b("Transform")} 允许您改变她的位置、缩放和旋转等。`,
        narraImage.transform(
            Transform.create()
                .position({ xoffset: 100 })
                .commit({ duration: 300, ease: "easeInOut" })
                .position({ xoffset: 0 })
                .commit({ duration: 300, ease: "easeInOut" })
                .scale(0.8).opacity(0.5)
                .commit({ duration: 300, ease: "easeInOut" })
                .scale(0.6).opacity(1)
                .commit({ duration: 300, ease: "easeInOut" })
                .rotation(10)
                .commit({ duration: 300, ease: "easeInOut" })
                .rotation(0)
                .commit({ duration: 300, ease: "easeInOut" })
        ),
        narraImage.hide({ duration: 1000 }),

        functionScene.jumpTo(transitionScene, new Dissolve(1000)),
    ]).choose("角色", [
        narra.say`角色控制对话行为。`
        .say`您可以为对话添加文本样式。`
        .say`${b("c")} 用于为文本添加${c("颜色", "yellow")}。`
        .say`${b("b")} 用于为文本添加${b("粗体")}。`
        .say`${b("i")} 用于为文本添加${i("斜体")}。`,

        functionScene.jumpTo(transitionScene),
    ]).choose("场景", [
        narra.say`场景是您故事的构建块。`
        .say`您可以创建多个场景并在它们之间切换。`
        .say`每个场景都可以有自己的背景、角色和动作。`,
        
        functionScene.background.char("/static/ui/room.jpg", new FadeIn(1000)),
        narra.say`您可以使用平滑过渡来改变背景。`,
        functionScene.background.char("/static/ui/outside.jpg", new FadeIn(1000, [50, 50])),
        
        functionScene.jumpTo(transitionScene),
    ]).choose("菜单", [
        narra.say`菜单允许您创建交互式选择。`
        .say`您可以根据用户选择创建分支故事。`,
        
        Menu.prompt("试试嵌套菜单！")
            .choose("选项 1", [
                narra.say`您选择了选项 1！`
                .say`菜单可以嵌套以创建复杂的决策树。`
            ])
            .choose("选项 2", [
                narra.say`您选择了选项 2！`
                .say`每个选择都可以触发不同的故事分支。`
            ]),
            
        functionScene.jumpTo(transitionScene),
    ]).choose(i("还有更多！"), [
        narraImage.show({ duration: 1000 }),

        narra.say`更多信息，请访问 ${b(c("react.narraleaf.com", "#40a8c5"))}`
    ]),
]);

transitionScene.action([
    transitionScene.jumpTo(functionScene),
]);

// 设置此场景为入口点
story.entry(mainScene);
export { story };