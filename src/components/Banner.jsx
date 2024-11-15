import React from 'react'

function Banner() {
  return (
    <div
    className="w-full h-64 bg-cover bg-center"
    style={{ backgroundImage: "url(/pc2.webp)" }}
  >
    {/* Overlay */}
    <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
        Lok Sabha / Vidhan Sabha / 2023
        <br />
        Madhya Pradesh
      </h1>
    </div>
  </div>
  )
}

export default Banner