import { createContext, useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8800/api/auth";

const apiClient = axios.create({
    baseURL: API_URL,
});

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        const res = await apiClient.post("/login", inputs);
        setCurrentUser(res.data);
    };

    const logout = async (inputs) => {
        await apiClient.post("/logout");
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
