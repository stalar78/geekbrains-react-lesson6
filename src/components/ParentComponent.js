// src/components/ParentComponent.js
import React from 'react';

const ParentComponent = ({ children }) => {
    return (
        <div>
            <h2>Parent Component with React.Children</h2>
            {React.Children.map(children, child => {
                return (
                    <div style={{ margin: '10px', border: '1px solid black' }}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
};

export default ParentComponent;
