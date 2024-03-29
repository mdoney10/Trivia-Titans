import React, { useState, useEffect } from "react";
import "./MyAccount.css";

const hostURL = import.meta.env.VITE_REACT_APP_API_HOST;

const MyAccount = () => {
  const [serverUser, setServerUser] = useState(null);
  const [loadingHighScore, setLoadingHighScore] = useState(true);
  const [storageUser, setStorageUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${hostURL}/api/users/${storageUser.id}`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setServerUser(data);
      } else {
        alert("Oops! Something went wrong fetching user data.");
      }
    } catch (error) {
      alert("Oops! Something went wrong fetching user data.");
    } finally {
      setLoadingHighScore(false);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setStorageUser(storedUser);
  }, []);

  useEffect(() => {
    if (storageUser) {
      fetchUserData();
    }
  }, [storageUser]);

  return (
    <div className="account-container">
      {storageUser ? (
        <div className="account-card">
          <p className="account-title">Hello, {storageUser.name}</p>
          <div className="account-info">
            <span className="info-label">
              Username: {storageUser && storageUser.username}
            </span>
          </div>
          {loadingHighScore ? (
            <p>Loading high score...</p>
          ) : (
            <div className="account-info">
              <span className="info-label">
                High Score: {serverUser?.score}
              </span>{" "}
            </div>
          )}
        </div>
      ) : (
        <p className="no-user-card">
          PLEASE LOG IN OR SIGN UP TO ACCESS YOUR ACCOUNT
        </p>
      )}
    </div>
  );
};

export default MyAccount;
