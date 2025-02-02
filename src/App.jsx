import { useState } from "react";

import axios from "axios";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [donation, setDonation] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`Thanks ${username} for donating $${donation}!`);

        const user = {
            username,
            password,
            donation,
        };

        try {
            const response = await axios.post(
                "http://localhost:3001/donate",
                user
            );

            if (response.status === 200) {
                window.location.href = "/game-page";
            }
            setDonation("");
            setUsername("");
            setDonation("");
        } catch (error) {
            console.error("Donation failed", error);
        }
    };
    return (
        <div id="app">
            <br></br>
            <form onSubmit={handleSubmit}>
                <img src="../assets/logo.png" alt="logo" />
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="number"
                    name="donation"
                    value={donation}
                    placeholder="$"
                    onChange={(e) => setDonation(e.target.value)}
                />
                <br></br>
                <button type="submit">Donate</button>
            </form>
        </div>
    );
}

export default App;

