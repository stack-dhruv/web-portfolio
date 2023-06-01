import React from "react";

export const MongoImageComponent = () => {
    return (
        <div className="grid place-content-center ">
            <img
                style={{ objectFit: "contain" }}
                src="/mongodb-icon.png"
                className="w-16 h-16 p-2 bg-slate-700 rounded-md"
            />
        </div>
    );
};
