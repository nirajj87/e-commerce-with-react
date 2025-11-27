import React from "react";

const Image =({url="",className="",alt="Product Image",width="",height="'"}) =>{
const defaultClass = "card-img-top mb-3";
const mergedClass = `${defaultClass} ${className}`.trim();
    return(
      <img src={url} className={mergedClass} alt={alt} width={width} height={height}  />  
    );
};

export default Image