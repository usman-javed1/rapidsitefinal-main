import React, { useState } from "react";

interface SelectInputProps {
    label: string;
    options: string[];
    width?: string;
    selectedValue?: string;
    setSelectedValue?: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
    label,
    options,
    width = "w-48",
    selectedValue,
    setSelectedValue
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalSelectedOption, setInternalSelectedOption] = useState(label);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option: string) => {
        if (setSelectedValue) {
            setSelectedValue(option);
        } else {
            setInternalSelectedOption(option);
        }
        setIsOpen(false);
    };

    const displayedValue = selectedValue ?? internalSelectedOption;

    return (
        <div className={`relative inline-block ${width}`}>
            <div
                className="select-input cursor-pointer px-4 py-2 bg-gray-200 rounded-md"
                onClick={toggleDropdown}
            >
                {displayedValue}
            </div>
            <div
                className={`dropdown absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg transition-transform transform ${
                    isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                }`}
                style={{ transformOrigin: "top center" }}
            >
                {options.map((option) => (
                    <div
                        key={option}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => selectOption(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectInput;
