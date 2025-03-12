import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

interface User {
    id: number;
    username: string;
    full_name: string;
    email: string;
    address: string;
}

const SignIn: React.FC = () => {
    const textContent = useSelector((state: AppState) => state.selectedLanguage.content); // Get translated text

    const [showModal, setShowModal] = useState<boolean>(false);
    const [isRegistering, setIsRegistering] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [user, setUser] = useState<User | null>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
    });

    const toggleModal = () => setShowModal(!showModal);
    const toggleRegister = () => setIsRegistering(!isRegistering);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_API_URL + "/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (res.ok) {
                setUser(data.user);
                setShowModal(false);
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const handleRegister = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_API_URL + "/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    password,
                    full_name: formData.fullName,
                    email: formData.email,
                    address: formData.address,
                }),
            });

            const data = await res.json();
            if (res.ok) {
                alert(textContent.registrationSuccess); // Use Redux text for success message
                setIsRegistering(false);
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <div>
            {user ? (
                <button className="bg-blue-500 text-white px-4 py-2 rounded">{user.username}</button>
            ) : (
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleModal}>
                    {textContent.loginButton.login}
                </button>
            )}

            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl mb-4">
                            {isRegistering ? textContent.registerTitle : textContent.loginTitle}
                        </h2>
                        
                        <input
                            type="text"
                            placeholder={textContent.usernamePlaceholder}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border p-2 w-full mb-2"
                        />
                        <input
                            type="password"
                            placeholder={textContent.passwordPlaceholder}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border p-2 w-full mb-2"
                        />

                        {isRegistering && (
                            <>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder={textContent.fullNamePlaceholder}
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="border p-2 w-full mb-2"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={textContent.emailPlaceholder}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="border p-2 w-full mb-2"
                                />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder={textContent.addressPlaceholder}
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="border p-2 w-full mb-2"
                                />
                            </>
                        )}

                        <div className="flex justify-between">
                            {isRegistering ? (
                                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleRegister}>
                                    {textContent.registerButton}
                                </button>
                            ) : (
                                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>
                                    {textContent.loginButton.login}
                                </button>
                            )}
                            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={toggleModal}>
                                {textContent.closeButton}
                            </button>
                        </div>

                        <button onClick={toggleRegister} className="mt-4 text-blue-500">
                            {isRegistering ? textContent.switchToLogin : textContent.switchToRegister}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignIn;
