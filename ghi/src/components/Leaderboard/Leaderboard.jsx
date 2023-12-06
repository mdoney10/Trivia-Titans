import React, { useState, useEffect } from "react";
import "./Leaderboard.css";

const hostURL = import.meta.env.VITE_REACT_APP_API_HOST;

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const getLeaderboard = async () => {
    const url = hostURL + "/leaderboard/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const sortedData = data.sort((a, b) => b.score - a.score);
      setLeaderboard(sortedData);
    }
  };

  useEffect(() => {
    getLeaderboard();
  }, []);

  console.log(currentUser);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <ol className="leaderboard-list">
        {leaderboard.map((user) => (
          <li
            key={user.name}
            className={`leaderboard-item ${
              user.name === currentUser ? "highlighted" : ""
            }`}
          >
            <span>{user.name}</span> - Score: {user.score}
            {console.log("User Name:", user.name, "Current User:", currentUser)}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
