import React from "react";

const Searchbox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                type="search"
                className="pa3 bab--green bg-lightest-blue"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
};
export default Searchbox;
