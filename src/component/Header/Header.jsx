import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval)
      console.log("cleaning");
    }
  
  }, []);

  return (
    <header className="header">
      <h3>Result University</h3>

      <span> Время сейчас:{now.toLocaleTimeString()}</span>
    </header>
  );
};

export default Header;
