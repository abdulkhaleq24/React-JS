import useInputState from "../hooks/useInputState";

const HookForm = () => {
    const [name, handleNameChange] = useInputState("AK")

    const handleSubmit = e => {
        console.log('form data', name);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={handleNameChange} />
                <br />
                <input type="email" name="email" onChange={handleNameChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;