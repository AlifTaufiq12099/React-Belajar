import React from 'react';

export default function LogoSedap({ isLight = false, accentColor = "text-[#FF7A59]" }) {
    return (
        <div className="flex flex-col">
            <span className={`font-extrabold text-[32px] ${isLight ? 'text-white' : 'text-slate-800'}`}>
                Sedap <b className={accentColor}>.</b>
            </span>
        </div>
    );
}
