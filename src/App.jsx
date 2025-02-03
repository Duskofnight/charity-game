import { useState } from "react";

function App() {
    const [donation, setDonation] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!donation) {
            alert("Please enter a donation amount");
            return;
        }

        try {
            window.location.href = "/game.html";
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

