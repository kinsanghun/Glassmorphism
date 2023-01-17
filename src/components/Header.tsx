import { defaultContext } from "App";
import { useContext } from "react";
import { 
    BsSunFill,
    BsFillMoonFill 
} from "react-icons/bs";


const Header = () => {
    const context = useContext(defaultContext);
    const date = new Date().toDateString();

    const themeHandler = () => {
        context.isDarkHandler(!context.isDark)
    }

    return (
        <header>
            <ul>
                <li onClick={()=>{themeHandler()}}>{context.isDark ? <BsFillMoonFill/> : <BsSunFill/>}</li>
                <li>{date}</li>
            </ul>
        </header>
    )
}

export default Header;