import { useNavigate } from "react-router-dom";

export function Component() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/home');
    }

    return (
        <button onClick={handleClick}>ENTRAR</button>
    )
}
