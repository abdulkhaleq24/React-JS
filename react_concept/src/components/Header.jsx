
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/posts"> Post </Link>
            <Link to="/condition"> Condition </Link>
        </div>
    );
};

export default Header;