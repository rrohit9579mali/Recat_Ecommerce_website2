import React, { useState } from "react";
import { Accordian } from "./Accordian";
import CompoC from "./CompoC";
const Menu = () => {
    const [openIndex, setOpenIndex] = useState(null); // Tracks the currently open accordion

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle logic
    };

    return (
        <div className="max-w-3xl mx-auto">
            <CompoC/>
            <div>
                <h1 className="font-bold p-2 m-2 text-xl">Filter Option</h1>
                {["Brand", "Mens", "Gender", "KIDS"].map((title, index) => (
                    <Accordian
                        key={index}
                        title={title}
                        open={openIndex === index} // Only open if the index matches
                        toggle={() => toggleAccordion(index)} // Toggle this accordion
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
