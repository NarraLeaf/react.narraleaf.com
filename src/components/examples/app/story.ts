// src/lib/story.ts

// Import necessary classes from NarraLeaf-React
import { Story, Scene, Character, Image, Menu, Transform, c, b, Sound, FadeIn, Dissolve, Control, i } from "narraleaf-react";

// Create a new story instance
// The name parameter is used for debugging and identification purposes
const story = new Story("NarraLeaf-React Introduction");

// Create the main scene with background
const mainScene = new Scene("introduction_scene", {
    background: "white",
});

const functionScene = new Scene("function_scene", {
    background: "/static/ui/outside.jpg",
});

const transitionScene = new Scene("transition_scene", {
    background: "/static/ui/outside.jpg",
});

// Create characters with their respective images
const narrator = new Character("Narrator");
const narra = new Character("Narra");

// Create character images with positioning
const narraImage = new Image<any>({
    src: "/static/char/narra.png",
    position: {
        xalign: 0.5,
        yalign: 0.4,
    },
    scale: 0.6
});

// Add actions to the scene
mainScene.action([
    mainScene.background.char("/static/ui/room.jpg", new FadeIn(1000)),

    // Show character with animation
    narraImage.show({
        duration: 1000,
    }),

    // Apply a bouncing animation
    narraImage.transform(
        Transform.create()
            .position({ yoffset: -30 })
            .commit({ duration: 300, ease: "easeInOut" })
            .position({ yoffset: 0 })
            .commit({ duration: 300, ease: "easeInOut" })
    ),

    // Introduction dialogue
    narrator
        .say`Welcome to NarraLeaf-React!`
        .say`A lightweight and powerful visual novel framework for React.`,

    narra
        .say`Let me show you some of our key features:`
        .say`1. ${b("Lightweight")}: No unnecessary dependencies and rendering library`
        .say`2. ${b("Customizable")}: Full control over UI`
        .say`3. ${b("Developer-friendly")}: Built with TypeScript and React`
        .say`4. ${b("Modern")}: Supports modern web features`,

    // Interactive menu
    Menu.prompt("Would you like to learn more?")
        .choose("Yes, show me more features!", [
            narraImage.hide({ duration: 1000 }),
            mainScene.jumpTo(functionScene, new Dissolve(1000)),
        ])
        .choose("I'll check the documentation", [
            narra.say`Sure! Visit our documentation at ${b(c("react.narraleaf.com", "#40a8c5"))} for detailed guides.`
        ])
]);

functionScene.action([
    Menu.prompt("What do you want to learn?").choose("Image", [
        narraImage.show({ duration: 1000 }),
        narra.say`This is Narra, a character in our game. `
        .say`You can apply a variety of effects to her image. `
        .say`${b("Transform")} allows you to change her position, scale, and rotation, etc. `,
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
    ]).choose("Character", [
        narra.say`Character controls the dialog behavior. `
        .say`You can add text style to the dialog. `
        .say`${b("c")} is used to add ${c("color", "yellow")} to the text. `
        .say`${b("b")} is used to add ${b("bold")} to the text. `
        .say`${b("i")} is used to add ${i("italic")} to the text. `,

        functionScene.jumpTo(transitionScene),
    ]).choose("Scene", [
        narra.say`Scenes are the building blocks of your story. `
        .say`You can create multiple scenes and switch between them. `
        .say`Each scene can have its own background, characters, and actions. `,
        
        functionScene.background.char("/static/ui/room.jpg", new FadeIn(1000)),
        narra.say`You can change backgrounds with smooth transitions. `,
        functionScene.background.char("/static/ui/outside.jpg", new FadeIn(1000, [50, 50])),
        
        functionScene.jumpTo(transitionScene),
    ]).choose("Menu", [
        narra.say`Menus allow you to create interactive choices. `
        .say`You can create branching stories based on user choices. `,
        
        Menu.prompt("Try a nested menu!")
            .choose("Option 1", [
                narra.say`You chose Option 1! `
                .say`Menus can be nested to create complex decision trees. `
            ])
            .choose("Option 2", [
                narra.say`You chose Option 2! `
                .say`Each choice can trigger different story branches. `
            ]),
            
        functionScene.jumpTo(transitionScene),
    ]).choose(i("And more!"), [
        narraImage.show({ duration: 1000 }),

        narra.say`For more information, please visit ${b(c("react.narraleaf.com", "#40a8c5"))}`,
    ]),
]);

transitionScene.action([
    transitionScene.jumpTo(functionScene),
]);

// Set this scene as the entry point
story.entry(mainScene);
export { story };