import './mainbutton.css';

const MainButton = ({ children, onClick }) => {
    return (
        <button className="main-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default MainButton;

