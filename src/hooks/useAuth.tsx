import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";

const AuthContext = createContext({
  user: null,
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: "555" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
