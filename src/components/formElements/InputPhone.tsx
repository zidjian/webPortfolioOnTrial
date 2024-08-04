"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./InputPhone.css";

interface Props {
    name: string;
    label: string;
    placeholder: string;
}

export function InputPhone({ name, label, placeholder }: Props) {
    const [phone, setPhone] = useState("");

    return (
        <div id="inputPhone" className="flex flex-col w-full">
            <label htmlFor={name} className="text-white">
                {label}
            </label>
            <PhoneInput
                defaultCountry="pe"
                value={phone}
                onChange={(phone) => setPhone(phone)}
            />
            <p className="text-red-600">Este campo es obligatorio.</p>
        </div>
    );
}
