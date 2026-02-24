import { useState, useEffect } from 'react';

export default function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 1. Added dependency array [] so this only runs once on mount
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch("https://react-dashboard-backend-yzxo.onrender.com/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        
        // Ensure data exists before setting state
        if (res.ok) {
          setName(data.name || "");
          setEmail(data.email || "");
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Clear old messages

    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        setMessage("Profile Updated Successfully");
        setPassword(""); // Clear password field after success
      } else {
        const errorData = await res.json();
        setMessage(errorData.message || "Update failed");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 2. Wrap the JSX in a return statement
  return (
    <form onSubmit={handleSubmit}
    className="bg-[var(--bg-card)] p-2 rounded-lg text-[var(--text-primary)] text-center items-start flex flex-col gap-2">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="outline-[var(--text-secondary)] outline-2 bg-[var(--text-muted)] rounded px-1 m-2"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-[var(--text-secondary)] outline-2 bg-[var(--text-muted)] rounded px-1 m-2"
        />
      </div>

      <div>
        <label>New Password:</label>
        <input
          type="password"
          placeholder="Leave blank to keep current"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-[var(--text-secondary)] outline-2 bg-[var(--text-muted)] rounded px-1 m-2"
        />
      </div>

      <button type="submit" disabled={loading} className="bg-[var(--bg-card-hover)] w-fit text-center rounded-lg px-2 self-end">
        {loading ? "Updating..." : "Update Profile"}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}
