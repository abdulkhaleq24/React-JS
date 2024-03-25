import { useEffect, useRef } from "react";
const RefForm = () => {
    const nameRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus()
    }, [])
    const handleForm = e => {
        e.preventDefault()
        console.log(nameRef.current.value.focus);
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input ref={nameRef} type="text" name="name" defaultValue={'AK'} />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;