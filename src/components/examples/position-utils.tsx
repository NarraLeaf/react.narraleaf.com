import { Top, Center, Bottom, Game, GameProviders, Player, Scene, Story } from "narraleaf-react";
import { Bleed } from "nextra-theme-docs";
import { useState } from "react";

const scene = new Scene("example-scene-position-utils", {
    background: "#fff"
});
scene.action([]);
const story = new Story("example-story-position-utils").entry(scene);

export default function ExamplePositionUtils() {
    const [game] = useState(() => new Game({}));
    return (
        <div
            style={{
                width: "100%",
                paddingBottom: "56.25%",
                position: "relative",
            }}
        >
            <GameProviders game={game}>
                <Player width={"100%"} height={"100%"} story={story} className="absolute font-large">
                    <Top.Left>
                        <span>Top Left</span>
                    </Top.Left>
                    <Top.Center>
                        <span>Top Center</span>
                    </Top.Center>
                    <Top.Right>
                        <span>Top Right</span>
                    </Top.Right>
                    <Center.Left>
                        <span>Center Left</span>
                    </Center.Left>
                    <Center.Center>
                        <span>Center Center</span>
                    </Center.Center>
                    <Center.Right>
                        <span>Center Right</span>
                    </Center.Right>
                    <Bottom.Left>
                        <span>Bottom Left</span>
                    </Bottom.Left>
                    <Bottom.Center>
                        <span>Bottom Center</span>
                    </Bottom.Center>
                    <Bottom.Right>
                        <span>Bottom Right</span>
                    </Bottom.Right>
                </Player>
            </GameProviders>
        </div>
    );
}
