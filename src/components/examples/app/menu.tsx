import { Item, GameMenu } from "narraleaf-react";

export function DefaultMenu({ items }: { items: number[] }) {
    return (
        <GameMenu
            className="absolute flex flex-col items-center justify-center min-w-full w-full h-full"
        >
            {items.map((index) => (
                <Item
                    key={index}
                    className="bg-black/50 text-white p-2 mt-2 w-1/2 border-2 border-[#40a8c5] rounded-xl hover:bg-black/70 active:bg-black/90 transition-colors duration-200"
                />
            ))}
        </GameMenu>
    );
}
