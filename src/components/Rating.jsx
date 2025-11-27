import React from "react";

function Rating({ className = "", rating = 0 }) {

  const totalStars = 5;
  const fullStars = Math.floor(rating);        // e.g. 4.5 → 4
  const halfStar = rating % 1 !== 0;           // e.g. 4.5 → true
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  const stars = 
    "★".repeat(fullStars) + 
    (halfStar ? "☆" : "") +
    "☆".repeat(emptyStars);

  return <span className={className || "text-warning"}>{stars}</span>;
}

export default Rating;
