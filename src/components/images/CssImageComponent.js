import React from "react";

const CssImageComponent = () => {
    return (
        <div className="grid place-content-center">
            <img
                alt="CSS Image"
                src="/css-icon.png"
                className="w-16 h-16 p-2 bg-slate-700 rounded-md"
            />
        </div>
    );
};

export default CssImageComponent;
