
const Condition = () => {
    const login = false;
    return (
        <div>
            {/* {login? 'Logout':'Login'} */}
            { login || "Logout"}
        </div>
    );
};

export default Condition;