// src/context/UserContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a User Context
const UserContext = createContext({
  user: { username: 'John Doe', profileImage: 'src/assets/mouse.png' },
  setUser: () => {}
});

// UserContext Provider Component
export const UserProvider = ({ children }) => {
  // Placeholder data for user image and username
  const [user, setUser] = useState({
    username: 'John Doe', 
    profileImage: 'src/assets/mouse.png', // Placeholder image
  });

  // Optionally, simulate loading the user data from an API or storage
  useEffect(() => {
    // Simulate fetching user data (you can replace this with actual API call)
    const fetchedUser = {
      username: 'Jane Doe',
      profileImage: 'src/assets/mouse.png', // Placeholder image
    };
    setUser(fetchedUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the User context
export const useUser = () => useContext(UserContext);
