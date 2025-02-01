import { useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [donation, setDonation] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${username} for donating $${donation}!`);
    };
    return (
        <div id="app">
            <br></br>
            <form onSubmit={handleSubmit}>
                <img src="../public/assets/logo.png" alt="logo" />
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

