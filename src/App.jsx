import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <body className='w-full flex flex-col justify-center text-sm'>
    <header className='w-full flex flex-col text-white  px-8 md:px-6'>
      <nav className='w-full flex flex-row justify-center pt-2 lg:pt-0'>
        <div className='w-1/2 lg:w-3/12 flex items-start lg:items-center justify-center pt-8 lg:pt-6'>
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-3xl font-bold'>RIGHTURN</h1>
            <h6 className='text-sm'>Human Resource Management</h6>
          </div>
        </div>
        <div className='w-2/12'></div>
        <div className='w-7/12 flex flex-row justify-center items-end text-sm font-medium hidden lg:flex'>
            <ul className='w-9/12 flex flex-row justify-around py-2'>
              <li>Our Services</li>
              <li>Jobs</li>
              <li>Clients</li>
              <li>Blogs</li>
              <li>About Us</li>
            </ul>
            <div className='w-3/12 flex items-end justify-center'>
              <button className='border py-2 px-4 rounded-3xl button1'>Contact Us</button>
            </div>
        </div>
        <div className='relative lg:hidden w-full flex flex-col pt-6 pb-2 justify-start items-end text-sm px-6 font-medium'>
            <div id='menu' className='w-4/12 flex justify-end cursor-pointer' onClick={handleMenu} >
              {!menu ? (<svg className='w-8 h-8' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M4 19h16v-2H4v2zm16-6H4v2h16v-2zM4 9v2h16V9H4zm16-4H4v2h16V5z"></path> </g> </g></svg>) : 
              (
                <svg viewBox="0 0 16 16" className='h-3 w-3'version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="icon-bound" fill="none"></rect> <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 13.293,14.707 14.707,13.293 9.414,8 "></polygon> </g></svg>
              )
              }
            </div>
            <ul className={`rounded px-4 w-full sm:w-5/12 h-40 flex justify-center items-around py-2 ${menu?'block':'hidden'}`}>
                <div className='flex flex-col justify-start items-center'>
                    <li className='py-1'>Our Services</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Clients</li>
                    <li className='py-1'>Blogs</li>
                    <li className='py-1'>About Us</li>
                </div>
              </ul>
        </div>
      </nav>
      <section className='w-full flex flex-col md:flex-row items-center justify-center px-12 pb-20 pt-10 md:py-20'>
          <div className='w-full md:px-6 lg:px-0 sm:w-1/2 flex flex-col items-center justify-center py-4 sm:py-8 md:py-4'>
            <h2 className='w-full text-5xl pb-4'>HR SERVICES MADE</h2>
            <div className='w-full text-4xl lg:text-5xl py-4 lg:py-0'>
              <h2 className='fadeElement'>EASY</h2>
              <h2 className='fadeElement'>EFFECTIVE</h2>
              <h2 className='fadeElement'>EMPOWERING</h2>
              <h2 className='fadeElement'>EFFORTLESS</h2>
            </div>
          </div>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <div className='w-full sm:w-9/12 flex flex-col items-center justify-center'>
              <p className='text-sm text-left text-justify leading-6 pb:4 md:pb-0'>RighTurn is a global HR solutions and consulting business established to pioneer a vision of providing world class workforce solutions to organisations and individuals. We provide end-to-end, high impact HR Solutions to businesses and candidates seeking growth, performance and satisfaction. Over the years, we have built meaningful relationships with our clients as a service partner of choice with many global and Indian organisations alike. We put the human back in human resources.</p>
              <div className='border rounded-3xl px-6  py-4 md:py-2 mt-4 button1'>
                <a className='text-sm font-medium'>Know More</a>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main className='w-full flex flex-col items-center justify-center'>
        <section className='w-full flex flex-col items-start justify-center pb-8 pt-5 my-4 text-white px-12'>
          <div className='flex flex-col items-start justify-center mb-4'>
            <div className='text-3xl font-bold pb-3 text-[#023047]'>Our Solutions</div>
          </div>
          <div className='relative w-full flex flex-col lg:flex-row items-center justify-center'>
              <div className='w-full h-96 border flex justify-center items-center container'>
                <div className='w-full h-96 absolute flex justify-center items-center child bg-1'>
                  <div className='flex flex-col justify-center items-center content'>
                        <h2 className='font-medium text-2xl pb-4'>Recruitment</h2>
                        <p className='text-justify py-2'>Find exciting jobs. Recruit best industry talents</p>
                        <div className='flex flex-col w-full lg:flex-row justify-between items-center mt-4 font-medium'>
                          <button className='border border-white rounded-2xl my-4 lg:my-0 py-2 px-4 button2'>Find Jobs</button>
                          <button className='border border-white rounded-2xl py-2 px-4 button2'>Post Jobs</button>
                        </div>
                  </div>
                </div>
              </div>
              <div className='w-full h-96 flex justify-center items-center container'>
                <div className='w-full h-96 flex justify-center items-center child bg-2'>
                  <div className='w-4/6 h-80 flex flex-col justify-center items-center content'>
                        <h2 className='font-medium text-2xl pb-4'>Virtual HR</h2>
                        <p className='text-justify py-2 leading-6'>We offer a complete life cycle of human resource management and development of customised HR solutions according to company’s needs.</p>
                        <button className='py-2 border border-white font-medium rounded-2xl mt-4 px-4 button2'>
                          Know More
                        </button>
                    </div>
                  </div>
              </div>
              <div className='w-full h-96 flex justify-center items-center container'>
                <div className='w-full h-96 flex justify-center items-center child bg-3'>
                  <div className='w-4/6 h-80 flex flex-col justify-center items-center content'>
                        <h2 className='font-medium text-2xl pb-4'>Compliance &amp; Inclusion</h2>
                        <p className='text-justify py-2 leading-6'>Alongside our compliance partner, we ensure that your business is working within government regulations and that employee satisfaction is maintained.</p>
                        <button className='py-2 border border-white font-medium rounded-2xl mt-4 px-4 button2'>
                          Know More
                        </button>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className='flex flex-col lg:flex-row justify-center items-center pt-8 pb-12 my-8 text-white px-12' id='s2'>
          <div className='w-full lg:mr-12 lg:w-5/12 mt-6 mb-12 lg:my-0 flex justify-center items-center'>
            <img className='h-72 w-96' src='https://righturnhr.com/KV.jpg'/>
          </div>
          <div className='w-full lg:w-7/12 flex justify-center items-center lg:pb-0'>
            <div className='w-full flex flex-col justify-center items-center lg:px-4 lg:items-start'>
              <h3 className='text-3xl font-medium mb-4'>Message from our Founder</h3>
              <p className='leading-6 text-justify'>I started RighTurn with a mission to deliver performance oriented, economically viable, and technology enabled, holistic HR services to our partners around the world. The main business philosophy was “Building a great HR platform, with a Human Touch”. Talent is the most precious resource in any organisation and we at RightTurn, believe in ensuring they are empowered, nurtured and supported so that they deliver towards an organisation’s growth. Over the last 15 years in my professional journey, I have delivered on this vision, consistently and now, we are setting our sights on global expansion with new offerings, including virtual HR, Compliance & Inclusion, HRTech and other innovative services. It has been my endeavour to collaborate with different service providers to cater a seamless product portfolio to my clients, offering them an avenue for all round expansion.”</p>
              <h5 className='font-medium text-xl mt-4'>Krishnaveni Sumanth</h5>
              <h5 className='font-medium'>Founder and CEO, RighTurn</h5>
            </div>
          </div>
        </section>
        <section className='w-full flex flex-col justify-center items-center py-16 my-8'>
          <h2 className='font-medium text-3xl'>Our Milestones</h2>
          <div className='w-full flex flex-row justify-around items-center py-16'>
            <div className='flex flex-col justify-center items-center py-12 px-16 border rounded'>
              <h2>4</h2>
              <h5>Years</h5>
            </div>
            <div className='flex flex-col justify-center items-center py-12 px-16 border rounded'>
              <h2>70</h2>
              <h5>Clients</h5>
            </div>
            <div className='flex flex-col justify-center items-center py-12 px-16 border rounded'>
              <h2>500</h2>
              <h5>Placements</h5>
            </div>
            <div className='flex flex-col justify-center items-center py-12 px-16 border rounded'>
              <h2>120</h2>
              <h5>Projects</h5>
            </div>
          </div>
        </section>
        <section className='w-full flex flex-col items-center justify-center'>
          <h2 className='font-medium text-3xl'>Here's what some of our client have said</h2>
          <div className='w-full h-92 w-80 py-8 flex items-center justify-center leading-6 text-justify border'>
            <div className='w-5/7 flex flex-col items-center justify-center border'>
              <p>KV has been one the few employees we keep remembering for her contributions in transforming employee relations and conncetions at transact. She also was instrumental in building our in-house human resource management software as well. The quality that stood our for us was her ability to balance between business expecations and employee delivery.</p>
              <img  className='w-20 h-20 border rounded-full my-4' src='#'/>
              <h5 className='font-medium text-xl pb-1'>Darshan Chinnappa</h5>
              <h6 className='font-medium'>Transact Global</h6>
            </div>
          </div>
        </section>
      </main>
      <footer className='w-full flex flex- justify-center items-center py-8 border-t'>
        <div className='w-3/12 flex items-center justify-center'>
          <div className='flex flex-col justify-center items-start'>
              <h1 className='text-3xl font-bold'>RIGHTURN</h1>
              <h6 className='text-sm'>Human Resource Management</h6>
            </div>
        </div>
        <div className='w-6/12 border flex items-center justify-center'>
             2023 All rights reserved | Designed by luxuveda
        </div>
        <div className='w-3/12 flex items-center justify-around px-8'>
            <p>Follow Us</p>
            <img src='#'/>
            <img src='#'/>
        </div>
      </footer>
    </body>
  )
}

export default App
