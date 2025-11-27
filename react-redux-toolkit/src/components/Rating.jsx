import React from 'react'

function Rating({ className = "", rating = "★★★★☆" }) {
    const customeClass = className ? className : "text-warning";
    return (
        <span className={customeClass}>{rating}</span>
    )
}

export default Rating