import React from 'react';

function TempCard(props) {
    const { name, temp } = props;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{temp}</h2>
        </div>
    );
}

export default TempCard;