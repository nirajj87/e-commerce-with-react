import React from 'react'

function Price({ price = "", className = "" }) {
    const customeClass = className ? className : "text-success fw-bold fs-5";
    return (
        <span className={customeClass}>{price}</span>
    )
}

export default Price