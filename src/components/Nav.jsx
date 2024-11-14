import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav  h-14 w-full bg-[#0A62A0] text-white flex items-center justify-between px-4 lg:px-8 lg:h-20">
            <div className="text-lg md:text-xl lg:h-20">
              <button className="lg:hidden" >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`flex-col   lg:flex lg:flex-row items-center lg:gap-10 lg:flex`}
            >
              <Link
                className="mr-4 md:mr-6 lg:mr-8"
                to="/"

              >
                Home
              </Link>
              <Link
                className="mr-4 md:mr-6 lg:mr-8"
                to="/Search"

              >
                Search
              </Link>
              <Link
                className="mr-4 md:mr-6 lg:mr-8"
                to="/News"

              >
                New's
              </Link>
              <Link
                className="mr-4 md:mr-6 lg:mr-8"
                to="/Tourism"

              >
                Tourism
              </Link>
              {/* <Link
                className="mr-4 md:mr-6 lg:mr-8 md:py-3 md:px-4 rounded-md bg-white text-[#0a62a0] font-semibold"
                to="/error"
                onClick={toggleMenu}
              >
                Report Error
              </Link> */}
            </div>
          </div>
  )
}

export default Nav