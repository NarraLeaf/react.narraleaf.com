"use client";

import { useEffect } from "react";
import { GameProviders, Player, PlayerEventContext, useGame } from "narraleaf-react";

// import your assets
import { story } from "./story";
import { GameDialog } from "./dialog";

function App() {
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
      defaultTextColor: "white", // set the default text color
      defaultNametagColor: "white", // set the default nametag color
    });
  }, [game]);

  // handle the player ready event
  function handleOnReady({liveGame}: PlayerEventContext) {
    liveGame.newGame();
  }

  return (
    <Player
      story={story}
      width="100%"
      height="100%"
      onReady={handleOnReady}
    />
  );
}

export default function Demo() {
  return (
    // wrap the app with the GameProviders component
    <GameProviders>
      <App />
    </GameProviders>
  );
}
