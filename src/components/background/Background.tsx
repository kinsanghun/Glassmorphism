const Background = (props:{isDark:boolean}) => {
    const mode:string = props.isDark ? "dark" : "light";
    return (<div className={`background ${mode}`}></div>);
}

export default Background;