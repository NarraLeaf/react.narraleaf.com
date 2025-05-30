"use client";

import { useEffect } from "react";
import { GameProviders, Player, PlayerEventContext, useGame } from "narraleaf-react";

// import your assets
import { story } from "./story";
import { story as storyZH } from "./story-zh";
import { GameDialog } from "./lib/Dialog";
import { DefaultMenu } from "./menu";

function App({ lang }: { lang: string }) {
  const game = useGame();

  // initialize the game manually
  useEffect(() => {
    game.configure({
      width: 1280, // set the resolution width
      height: 720, // set the resolution height
      aspectRatio: 16 / 9, // set the aspect ratio

      ratioUpdateInterval: 0, // disable the ratio update interval
      cps: 50, // set the dialog characters per second

      dialog: GameDialog, // override the default dialog
      menu: DefaultMenu,
      defaultTextColor: "white", // set the default text color
      defaultNametagColor: "white", // set the default nametag color

      minHeight: 50,
      minWidth: 50,
    });
  }, [game]);

  // handle the player ready event
  function handleOnReady({ liveGame }: PlayerEventContext) {
    liveGame.newGame();
  }

  return (
    <Player
      story={lang === "zh-CN" ? storyZH : story}
      width="100%"
      height="100%"
      onReady={handleOnReady}
    />
  );
}

export default function Demo({ lang }: { lang: string }) {
  return (
    // wrap the app with the GameProviders component
    <GameProviders>
      <App lang={lang} />
    </GameProviders>
  );
}
