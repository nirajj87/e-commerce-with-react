import React from 'react'

function ShortDescription({className="", desc=""}) {
    const customeClass = className? className:"card-text text-muted";
  return (
    <p className={customeClass} >{desc}</p>
  )
}

export default ShortDescription