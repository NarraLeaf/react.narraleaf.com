import React from 'react';
import { Dialog, Texts, Nametag } from "narraleaf-react";

export function GameDialog() {
    return (
        <Dialog className="rounded-lg p-6 shadow-lg w-full h-full mb-4 AlimamaFangYuanTiVF-Thin bg-contain bg-no-repeat bg-bottom relative" style={{
            backgroundImage: "url('/static/ui/dialog.png')"
        }}>
            <div className="absolute left-[133px] flex justify-center w-[200px] top-[28px]">
                <Nametag />
            </div>
            <div className="flex items-center gap-[5px]">
                <Texts className="text-[22px] max-w-max pt-[63px] pl-[128px]" />
            </div>
        </Dialog>
    )
}