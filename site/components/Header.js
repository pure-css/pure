import React from 'react';

function Header({ description, title }) {
    return (
        <div className="header">
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    );
}

export default Header;
