import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthAPI } from "../api/todo/auth";
import { Alert, ToastAndroid } from "react-native";

type AuthContextType = {
    token: string;
    login: (username: string, password: string) => void;
    logout: VoidFunction
};

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState("");

    async function login(username: string, password: string) {
        try {
            // O código que pode dar erro
            const { token } = await AuthAPI.login(username, password);

            await AsyncStorage.setItem("@token", token);

            setToken(token);
        } catch (error) {
            Alert.alert("Falha", "Falha ao realizar o login");
        }
    }

    async function logout() {
        try {
            await AsyncStorage.removeItem("@token");
            setToken("");
        } catch (error) {
            Alert.alert("Falha", "Falha ao realizar o logout");
        }
    }

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const token = await AsyncStorage.getItem("@token");
    //             setToken(token);
    //         } catch (error) {
    //             ToastAndroid.show(
    //                 "Não foi possível recuperar o token do armazenamento interno", 
    //                 ToastAndroid.SHORT
    //             );
    //         }
    //     })();
    // }, []);

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);