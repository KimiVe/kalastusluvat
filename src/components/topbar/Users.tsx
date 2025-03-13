import { useState } from "react";
import "../styles/TopBar.css";

const Users = () => {
    const [users, setUsers] = useState<{ username: string }[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://kalastusluvatbackend-production.up.railway.app/users");
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            const data = await response.json();
            setUsers(data);
            setError(null);
        } catch (err) {
            setError("Error loading users");
            console.error(err);
        }
    };

    return (
        <div>
            <div className="signin" onClick={fetchUsers}>
                Users
            </div>
            {error && <p className="error">{error}</p>}
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
