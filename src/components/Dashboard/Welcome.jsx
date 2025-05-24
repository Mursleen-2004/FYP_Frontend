import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUsername(user.username || "User");
      } catch {
        setUsername("User");
      }
    }
  }, []);

  return (
    <h2 className="text-4xl font-bold text-purple-400 mt-10">
      Welcome back, {username} 👋
    </h2>
  );
};

export default Welcome;
