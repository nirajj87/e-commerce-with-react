import React from 'react'

function Title({title ="",className=""}) {
    const customeClass =className? className :"card-title fw-bold";
  return (
    <h5 className="customeClass">{title}</h5>
  )
}

export default Title