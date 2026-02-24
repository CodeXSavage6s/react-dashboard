//Sidebar.jsx
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NavigateBtn from './Components/NavigateBtn.jsx'
import { PageContext} from './PageProvider'

function Sidebar({ setP }) {
  const [seen, setSeen] = useState(true)
  const { page, setPage, logout } = useContext(PageContext);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
};

  return (
    <div className="absolute Sidebar  bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors duration-200 z-700">
      <div
      className="border-b-8 rounded-2xl text-[small]"
      onClick={() => setSeen(e => !e)}>AdminPanel</div>
      <div
      className={`all1 fixed flex flex-col rounded-2xl justify-items-center p-[2vh] w-[50vw] h-[100vh] z-50 bg-[var(--bg-card)] left-0 md:w-[20vw] ${!seen ? 'block' : 'hidden'} md:block`}>
      <NavigateBtn setting="dashboard" setP={setPage}
        pick={page === "dashboard" && "true"}
        setS={setSeen}
        >
        Dashboard
      </NavigateBtn>
      <NavigateBtn setting="Analysis"
      setP={setPage}
      setS={setSeen}>
        Analysis
      </NavigateBtn>
      <NavigateBtn setting="Analysis"
      setP={setPage}
      setS={setSeen}>
        Analysis
      </NavigateBtn>
      <NavigateBtn setting="Analysis"
      setP={setPage}
      setS={setSeen}>
        Analysis
      </NavigateBtn>
      <NavigateBtn setting="profile" 
      pick={page === "profile" && "true"}
      setP={setPage}
      setS={setSeen}>
        Profile
      </NavigateBtn>
      <div className=""></div>
      <div
  onClick={handleLogout}
  className="cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-200 p-2"
>
  Logout
</div>
</div>
    </div>
  );
}



export default Sidebar;
