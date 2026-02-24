import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import EditProfile from './ProfileEdit.jsx'
export default function Profile() {
  const [Pro, setPro] = useState("Profile")
  const [user, setUser] = useState(null)
  const [weather, setWeather] = useState(null)
  
  useEffect(() => {
  const fetchProfile = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setUser(data);
  };

  fetchProfile();
}, []);

useEffect(() => {
  if (!navigator.geolocation) {
    console.log("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        const { latitude, longitude } = position.coords;

        const res = await fetch(
          `http://localhost:5000/api/auth/weather?lat=${latitude}&lon=${longitude}`
        );

        if (!res.ok) throw new Error("Weather fetch failed");

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.log(err.message);
      }
    },
    (error) => {
      console.log("Location permission denied");
    }
  );
}, []);

  return (
    <div>
      <div
      className="flex w-[100%] justify-items-center bg-[var(--bg-card)] text-[var(--text-primary)] transition-colors duration-200 p-2 rounded-lg mb-[1vh] w-full">
      <label className="cursor-pointer px-3 rounded-md has-[:checked]:border-b-8 w-[100%] text-center my-1">
        <input
          type="radio"
          name="nav"
          className="hidden"
          defaultChecked
          onClick={() => setPro("Profile")}
        />
        My Profile
      </label>
      <label className="cursor-pointer px-3 rounded-md has-[:checked]:border-b-8 w-[100%] text-center my-1">
        <input
          type="radio"
          name="nav"
          className="hidden"
          onClick={() => setPro("Settings")}
        />
        Settings
      </label>
      <label className="cursor-pointer px-3 rounded-md has-[:checked]:border-b-8 w-[100%] text-center my-1">
        <input
          type="radio"
          name="nav"
          className="hidden"
          onClick={() => setPro("Activity")}
        />
        Activity
      </label>
    </div>
    {Pro === "Profile" &&
      <div 
      className="">
        <div className="relative all flex items-center bg-[var(--bg-card)] text-[var(--text-primary)] mt-2 rounded-lg transition-colors duration-200">
       <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 640" className="m-0 w-[70px] h-[80px] mr-3"><path fill="var(--text-secondary)" d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z"/></svg>
       <div className="mt-5">
         <div className="text-2xl font-black">{ user ? user.name : "Loading"}</div>
         <div>{ user ? user.email : "email"}</div>
         <div>{ weather ? weather.name : "Getting Location..."}</div>
        <div
        className="relative bg-[var(--bg-card-hover)] text-center rounded-2xl px-2 w-fit right-[-40vw] mb-[1vh]" 
        onClick={(e) => {
              setPro("Edit")
          }}
            >Edit Profile</div>
       </div>
       </div>
       </div> }
       {Pro === "Settings" &&
         <div className="transition-colors duration-200">
           Settings
         </div>
       }
       {Pro === "Activity" &&
         <div className="transition-colors duration-200">
           Activity
         </div>
       }
       {Pro === "Edit" && <EditProfile />}
    </div>
    )
}