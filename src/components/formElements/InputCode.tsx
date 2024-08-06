"use client";

import { useState } from "react";

export function InputCode() {
    const [digits, setDigits] = useState(["", "", "", ""]);

    const handleChange = (index: any, event: any) => {
        const value = event.target.value;
        if (/^\d?$/.test(value)) {
            const newDigits = [...digits];
            newDigits[index] = value;
            setDigits(newDigits);
        }
    };

    return (
        <div className="flex gap-8">
            {digits.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(event) => handleChange(index, event)}
                    maxLength={1}
                    className="text-center text-white border border-[#7D33DC] focus:border-[#7D33DC] p-6 bg-transparent rounded-xl w-20 text-4xl"
                />
            ))}
        </div>
    );
}
