import React from 'react'

function VisitCards() {
  return (
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <div class="relative">
      <img
        src="/sachi bhopal.jpg"
        alt="Bhopal"
        class="w-full h-48 object-cover"
      />
      <span class="absolute top-2 left-2 bg-[#0A62A0] text-white text-sm px-2 py-1 rounded">
        Bhopal
      </span>
    </div>
    <div class="p-4">
      <p class="text-center font-semibold text-gray-700">
        The Great Stupa of Sanchi
      </p>
      <div class="flex justify-center mt-4">
        <a
          href="/Tourism"
          class="bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-medium"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
  )
}

export default VisitCards