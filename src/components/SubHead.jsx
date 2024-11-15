import React from 'react'

function SubHead({hed, search ,isGraphs}) {
    console.log(isGraphs);
  return (
    <h2 className={`font-bold mb-4 ${search ? "text-[#0A62A0] text-2xl" : "text-blue-700 text-xl"} ${isGraphs ? 'text-black' : 'text-blue-700'}`}>
    {hed} {search ? <span className="text-orange-400">:- {search}</span> : ''}
  </h2>
  )
}

export default SubHead