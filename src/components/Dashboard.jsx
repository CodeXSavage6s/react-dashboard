//Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Card from './Components/card.jsx'
import SalesOverview from './Components/LineChart.jsx'
import TrafficSources from "./Components/PieChart.jsx";
import TransactionTable from "./Components/table.jsx"

function Dashboard() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
  if (!navigator.geolocation) {
    console.log("Geolocation not supported");
    return;
    setLoading(false)
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        const { latitude, longitude } = position.coords;

        const res = await fetch(
          `https://react-dashboard-backend-yzxo.onrender.com/api/auth/weather?lat=${latitude}&lon=${longitude}`
        );

        if (!res.ok) throw new Error("Weather fetch failed");

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false)
      }
    },
    (error) => {
      console.log("Location permission denied");
      setLoading(false)
    }
  );
}, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <Card 
      top="Total Users"
      middle="8,000"
      bottom="This Month"/>
      <Card 
      top="Total Users"
      middle="8,000"
      bottom="This Month"/>
      <Card 
      top="Total Users"
      middle="8,000"
      bottom="This Month"/>
      <Card 
      top="Local Weather" 
      // Change line 62 to:
      middle={loading ? "Loading..." : (weather?.weather ? weather.weather[0].description : "N/A")}

      bottom="Current Location"/>
      </div>
      <div
      className="grid gap-[1vw] sm:grid-cols-2">
      <SalesOverview />
      <TrafficSources />
      </div>
      <TransactionTable />
    </div>
    )
}
export default Dashboard