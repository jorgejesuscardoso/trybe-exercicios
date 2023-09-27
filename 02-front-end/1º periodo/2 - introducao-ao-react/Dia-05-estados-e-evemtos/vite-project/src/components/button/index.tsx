import './index.css'

type ButtonProp = {
    children: React.ReactNode;
    onClick: () => void;
}

export function Button({ children, onClick }: ButtonProp) {
    return (
        <button
        onClick={ onClick }
        > {children} </button>
    )
}