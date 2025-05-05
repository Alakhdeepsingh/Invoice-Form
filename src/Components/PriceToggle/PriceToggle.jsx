import React, { useState } from "react";
import "./PriceToggle.css";

export default function PriceToggle() {
    const [toggle, setToggle] = useState("dollar");

    return (
        <div className="price-toggle-container">
            <div className="price-display">
                <span className="primary-price">$ 0.00</span>
                <span className="secondary-price">/ $ 0.00</span>
            </div>

            <div className="toggle-switch">
                <button
                    className={`toggle-button ${toggle === "dollar" ? "active" : ""}`}
                    onClick={() => setToggle("dollar")}
                >
                    $
                </button>
                <button
                    className={`toggle-button ${toggle === "percent" ? "active" : ""}`}
                    onClick={() => setToggle("percent")}
                >
                    %
                </button>
            </div>
        </div>
    );
}
