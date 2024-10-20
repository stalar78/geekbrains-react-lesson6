// src/components/FunctionAsChild.js
import React from 'react';

const FunctionAsChild = ({ children }) => {
    return (
        <div>
            <h2>Function as Child Component</h2>
            {children('Hello from FunctionAsChild!')}
        </div>
    );
};

export default FunctionAsChild;
