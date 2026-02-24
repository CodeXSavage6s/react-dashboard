/*import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [authPage, setAuthPage] = useState("login");

  if (!user) {
    return authPage === "login" ? (
      <Login
        onLoginSuccess={(u) => setUser(u)}
        goToRegister={() => setAuthPage("register")}
      />
    ) : (
      <Register
        onRegisterSuccess={(u) => setUser(u)}
        goToLogin={() => setAuthPage("login")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-body)]">
      <Header />
      <Main />
    </div>
  );
}

export default App;*/
import { useContext, useState } from "react"; // Added useContext
import { PageContext } from "./components/PageProvider"; // Import your context
import Main from "./components/Main";
import Header from "./components/Header";
import Login from "./Login";
import Register from "./Register";

function App() {
  // Pull user and login from context instead of local state
  const { user, login } = useContext(PageContext);
  const [authPage, setAuthPage] = useState("login");

  if (!user) {
    return authPage === "login" ? (
      <Login
        onLoginSuccess={login} 
        goToRegister={() => setAuthPage("register")}
      />
    ) : (
      <Register
        onRegisterSuccess={login}
        goToLogin={() => setAuthPage("login")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-body)]">
      <Header />
      <Main />
    </div>
  );
}

export default App;
