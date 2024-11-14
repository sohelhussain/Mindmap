import React from 'react'
import Nav from '../components/Nav'
import VisitCards from '../components/VisitCards'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <div className="main">
        {/* {home nav} */}
        <div
          className="page1 w-full relative lg:w-full lg:h-[100vh] bg-slate-400 "
          style={{ overflow: "hidden" }}
        >
          <Nav />

          <div className="overflow h-[100vh] absolute lg:h-screen w-full bg-[#00000094] ">
            <h1 className="text-white mt-16  text-2xl absolute top-[2%] left-[5%] font-semibold tracking-wide leading-tight  lg:mt-6 sm:text-5xl md:text-6xl lg:text-7xl  sm:top-[20%]  ">
              Madhya Pradesh Election <br /> 
              Data and Results 2023
            </h1>
            <Link
              className="px-8 mt-36 left-[5%] top-[2%] py-1  md:px-20 lg:px-24  md:py-3 bg-[#0A62A0] absolute  md:top-[35%]  text-white text-lg md:text-2xl lg:mt-28 rounded-md font-semibold"
              to="/Search"
            >
              Search
            </Link>
          </div>

          <img
            src="/home page.jpeg"
            alt="Home Page"
            className="w-full h-64 lg:h-full object-cover object-center"
          />
        </div>

        {/* Map Section */}
        <div className="page2 h-screen w-full bg-white flex flex-col lg:flex-row">
          <div className="page2-div1  lg:h-full w-full lg:w-[70vw] flex flex-col items-center">
            <img
              className=" mt-5 lg:mt-6   lg:w-auto"
              src="./map.png"
              alt="Map of Madhya Pradesh"
            />
            <h1
              className="font-bold text-2xl mt-2 text-center drop-shadow-2xl md:text-4xl lg:text-5xl lg:mt-1 lg:ml-[60vh] "
              style={{
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)", // Offset shadow downwards
              }}
            >
              Madhya Pradesh
            </h1>
          </div>

          {/* Pie Chart Section */}
          <div className="page2-div2  lg:h-full w-full lg:w-[50vw] flex flex-col items-center">
            {/* Assembly Pie Chart */}

            <img
              className=" mt-6 lg:mt-40 h-36 md:h-44"
              src="/assemblypie.png"
              alt="Assembly Pie Chart"
            />
            <h1 className="text-blue-500 font-bold ">Assembly Seat</h1>
            <div className="flex gap-2 items-center text-sm mt-2">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-5 bg-orange-500"></div>
                <span>BJP</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-5 bg-green-600"></div>
                <span>INC</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-5 bg-blue-700"></div>
                <span>BSP</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-5 bg-blue-400"></div>
                <span>Others</span>
              </div>
            </div>

            {/* Parliament Pie Chart */}
            <img
              className="mt-6 h-36 md:h-44"
              src="/parliamentpie.png"
              alt="Parliament Pie Chart"
            />
            <h1 className=" text-blue-500 font-bold">Parliament Seat</h1>
            <div className="flex gap-2 items-center text-sm mt-2">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-5 bg-orange-500"></div>
                <span>BJP</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-5 bg-green-600"></div>
                <span>INC</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-5 bg-blue-700"></div>
                <span>BSP</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-5 bg-blue-400"></div>
                <span>Others</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick New's Section */}
        <div className="page3 lg:h-[60vw] w-full  flex flex-col items-center py-10 relative">
          <div className="   lg:h-[8vw] lg:bg-[#0A62A0] lg:w-[1vw]  lg:absolute lg:left-[15%] lg:top-[9%]">
            <h1 className=" text-3xl abo  lg:text-3xl font-bold text-[#0A62A0] lg:ml-10 lg:mt-10">
              Quick<span className="lg:text-gray-800"> New's </span>
            </h1>
          </div>

          <div className="lg:h-[36vw] bg-[#0A62A0] lg:w-[7vw] lg:top-[30%]  lg:left-[5%] lg:absolute"></div>
          <div className="grid   lg:w-[66vw] lg:mt-64 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white  px-10 mt-8 py-6 lg:p-5 shadow-lg border-2  flex flex-col "
              >
                <div className="  bg-gray-200 mr-32 h-20 w-20  lg:w-32 lg:h-28 mb-4">
                  <p className="ml-28 w-32 md:ml-36 md:w-40 text-sm md:text-base tracking-tight">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto officiis odio magnam.
                  </p>
                </div>

                <Link to="/News" className="text-blue-500  font-medium">
                  Read more
                </Link>
              </div>
            ))}
          </div>
          <div className="lg:h-28 bg-[#0A62A0] lg:w-[85vw] lg:mt-12 "></div>
          <div className="lg:h-[36vw] bg-[#0A62A0] lg:w-[7vw] lg:top-[30%]  lg:right-[5%] absolute"></div>
        </div>

        {/* Tourism Section */}
        <div class=" page4 flex flex-col items-center py-10 px-4">
          <div class=" page4-div1 flex flex-col items-center text-center mb-8">
            <h2 class="text-xl md:text-2xl font-light text-gray-500">
              Welcome to Madhya Pradesh
            </h2>
            <h1 class="text-2xl md:text-4xl font-bold text-[#0A62A0] mt-2">
              Tourism Place
            </h1>
          </div>

          <div class=" page4-div2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-5xl">

            
            <VisitCards />
            <VisitCards />
            <VisitCards />
            <VisitCards />
            <VisitCards />
            <VisitCards />




          </div>
        </div>

        {/* {ai and footer} */}
        <div className="page5 h-[100vw] lg:h-[50vw] w-full  ">
          <div className="page5-div1  lg:h-[50vh] w-full lg:flex-col lg:flex   ">
            <input
              type="text"
              placeholder="   Ask Question question here..."
              className="chatbot h-48 w-80 mt-8  ml-4 font-semibold text-gray-500 text-xl lg:h-[18vw] lg:w-[50vw] lg:ml-16 focus:outline-none  border border-gray-400 shadow-lg rounded-lg "
            />
          </div>
          <button className="chatbot-btn  mt-3 h-12 w-36 ml-5 lg:ml-16 bg-[#0A62A0] text-white font-semibold text-xl rounded-md ">
            Submit
          </button>

          {/* {footer section} */}
          <div className="page5-div2  ">
            <footer className="bg-[#0A62A0] mt-10  h-auto text-white py-8 lg:h-[25vw] lg:w-full">
              <div className="container mx-auto flex flex-col lg:flex-row justify-between">
                <div className=" lg:w-1/3 mb-6 lg:mb-0">
                  <h2 className="text-xl font-bold mt-2 ml-5 lg:mt-12 lg:ml-20 lg:text-3xl">
                    Find us
                  </h2>
                  <p className="mt-2 ml-5 w-60 lg:mt-5 lg:w-72 lg:ml-20">
                    Follow us on social media for the latest updates and
                    insights on Madhya Pradesh elections.
                  </p>
                </div>
                <div className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:mt-12 lg:ml-[40vw]">
                  <h2 className="text-lg ml-5  font-bold">Quick Link</h2>
                  <ul className="mt-2 ml-5 ">
                    <li>
                      <a href="#" className="hover:underline">
                        Constituencies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Historical Points
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Leadership Tours
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full   lg:w-1/3 lg:mt-12 lg:mr-10">
                  <h2 className="text-xl font-bold ml-5">Address</h2>
                  <p className="mt-2 w-64 ml-5">
                    Malviya Nagar Bhopal, Madhya Pradesh 462002
                  </p>
                </div>
              </div>
              <div className="mt-8 mr-5 lg:mt-28 lg:flex lg:justify-around">
                <p className="text-sm text-center lg:text-left">
                  Privacy Policy || Terms & Conditions || Disclaimer
                </p>
                <p className="text-sm text-center lg:text-left">
                  © 2024 Your Website Name. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home