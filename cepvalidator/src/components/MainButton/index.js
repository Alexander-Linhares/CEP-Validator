import './mainbutton.css';

const MainButton = ({ children, onClick }) => {
    const handleClick = (event) => {
        event.preventDefault();
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button className="main-button" onClick={handleClick}>
            {children}
        </button>
    );
};

export default MainButton;

