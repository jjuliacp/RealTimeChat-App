import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGOUT_USER, POST_MESSAGE } from "../../../graphql/mutations";

export const useChat = () => {
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");
    const [sendMessage] = useMutation(POST_MESSAGE);
    const [logoutUser] = useMutation(LOGOUT_USER);
    const navigate = useNavigate();
    const [logoutSuccess, setLogoutSuccess] = useState(false);

    const handleLogout = async () => {
        try {
            await logoutUser({ variables: { name: user } });
            localStorage.removeItem("user");
            setLogoutSuccess(true);
            navigate("/");
            return true
        } catch (err) {
            console.error("Error al cerrar sesión:", err);
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser.name);
        }
    }, []);

    const handleSendMessage = () => {
        if (message.trim() !== "") {
            sendMessage({ variables: { content: message, user } });
            setMessage("");
        }
    };

    return {
        user,
        message,
        setMessage,
        handleSendMessage,
        handleLogout,
        logoutSuccess,
        setLogoutSuccess
    };
};