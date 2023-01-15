const Header = () => {
    const date = new Date().toISOString();
    return (
        <header>
            <ul>
                <li>{"light"}</li>
                <li>{date}</li>
            </ul>
        </header>
    )
}

export default Header;