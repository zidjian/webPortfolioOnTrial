"use client";

import { useState } from "react";
import { InputCode } from "../formElements";

export function FormSendCode() {
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
        <div>
            <InputCode digits={digits} change={handleChange} />
        </div>
    );
}
