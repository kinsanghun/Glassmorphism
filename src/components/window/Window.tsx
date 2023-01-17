import { useMemo } from "react";

const Window = (props:{pid:number, children:JSX.Element, windowOnClickHandler:Function}) => {
    const style = useMemo(() => {
        return {
            left : `calc(15% + ${props.pid * 2}rem)`,
            top : `calc(15% + ${props.pid * 2}rem)`,
        }
    }, [])

    return (<div className="window" style={style} onClick={()=>{props.windowOnClickHandler()}}>{props.children}</div>)
}

export default Window;