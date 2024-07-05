import React, { useState } from "react";

interface SliderProps {
    min: number;
    max: number;
    step?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
}

const Slider = ({ min, max, step, defaultValue, onChange }: SliderProps) => {
    const [value, setValue] = useState(defaultValue || min);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
        />
    );
};

export default Slider;