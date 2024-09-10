"use client";

import { useState } from "react";

interface Props {
    digits: any;
    change: any;
}

export function InputCode({ digits, change }: Props) {
    return (
        <div className="flex gap-8">
            {digits.map((digit: any, index: any) => (
                <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(event) => change(index, event)}
                    maxLength={1}
                    className="text-center text-white border border-[#7D33DC] focus:border-[#7D33DC] p-6 bg-transparent rounded-xl w-20 text-4xl"
                />
            ))}
        </div>
    );
}
