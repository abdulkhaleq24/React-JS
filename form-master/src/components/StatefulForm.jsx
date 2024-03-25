import { useState } from "react";

const StatefulForm = () => {
    const [username, setUsername] = useState('AK');
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if (password.length < 6) {
            setError("Password must contain at least 6 characters")
        } else {
            setError('')
        }
        console.log(e.target.username.value);
        console.log(e.target.password.value);
    }
    const handleUsernameChange = e => {
        console.log(e.target.value);
        setUsername(e.target.value)
    }
    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleUsernameChange} type="text" name="username" value={username} />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;