//Header.jsx
import { useState } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar'

function Header() {
  const [light, setLight] = useState(false)
  return (
    <div className="Header justify-center mb-[2vh] bg-[var(--bg-card)] p-[2vh] rounded-md hover:bg-[var(--bg-card-hover)] transition-colors duration-200 max-h-[20vh] py-1">
      <Sidebar />
      <div className="absolute flex flex-row align-middle items-center right-5 justify-between gap-[2vw]">
        <div
        onClick={() => {
          setLight(e => !e);
          document.body.classList.toggle("light")
        }}>
      {light ? 
      <svg 
  
      xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" className="md:w-[40px] md:h-[40px]"><path fill="var(--text-secondary)" stroke="#000" stroke-width ="50" d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="md:w-[40px] md:h-[40px]"><path fill="var(--text-secondary)" d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm7.071 2.929a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zm-14.142 0a1 1 0 0 1 1.414 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707a1 1 0 0 1 0-1.414zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0zm-4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm17 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM5.636 16.95a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707zm11.314 1.414a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707zM12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1z"/></svg>}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="25" width="25" className="md:w-[40px] md:h-[40px]">
  <path fill="var(--text-secondary)" d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" />
</svg>

        <FontAwesomeIcon icon={faCircleUser} className="fa-semibold text-[var(--text-secondary)] text-2xl md:text-4xl" />
      </div><br /><br />
      <div className="flex items-center bg-[var(--bg-card-hover)] rounded-[3vh] overflow-hidden justify-between p-1 max-h-[5vh] hidden">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 640 640" 
    width="25" 
    height="25"
    className="m-1"
  >
    <path 
      fill="var(--text-secondary)" 
      d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
    />
  </svg>
      <input 
      className="bg-[var(--bg-card)]  w-[90%] h-8 border-none rounded-[2vh] px-2 text-[var(--text-primary)] placeholder:italic"
      placeholder="Search..."
      />
      </div>
    </div>
    )
}

export default Header