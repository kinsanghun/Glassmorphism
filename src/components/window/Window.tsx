import { useMemo, useRef, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { windowType } from "types/type";

const Window = (props:{pid:number, children:JSX.Element, windowOnClickHandler:Function, setView:Function, windowHandler:Function}) => {

    const windowRef = useRef<HTMLDivElement>(null);
    const [moveXY, setMoveXY] = useState([0, 0]);
    const [pinXY, setPinXY] = useState([0, 0]);
    const [mouseMove, setMouseMove] = useState(false);

    const MouseDownEvent = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        props.windowOnClickHandler()
        const nextPosition = [e.pageX - pinXY[0], e.pageY - pinXY[1]];
        setPinXY(nextPosition);
        setMouseMove(true);
    }

    const MouseUpEvent = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const nextPosition = [e.pageX - pinXY[0], e.pageY - pinXY[1]];
        setPinXY(nextPosition);
        setMouseMove(false);
    }

    const MouseMoveEvent = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(mouseMove) {
            const nextPosition = [e.pageX - pinXY[0], e.pageY - pinXY[1]];
            setMoveXY(nextPosition);
        }
    }
    const closeHandler = () => {
        props.setView(false);
        props.windowHandler((prev:windowType[]) => {
            const windows = [...prev];
            for(let i = 0; i < windows.length; i++ ) {
                if(windows[i].pid === props.pid) {
                    windows.splice(i, 1);
                    break;
                }
            }
            return windows;
        });
    }

    const style = useMemo(() => {
        return {
            left : `${moveXY[0]}px`,
            top : `${moveXY[1] + 30}px`,
        }
    }, [moveXY])

    return (
    <div 
        ref={windowRef} 
        className="window" 
        style={style} 
        onClick={()=>{props.windowOnClickHandler()}}
    >
        <div className="header"
            onMouseDown={(e)=>{MouseDownEvent(e)}}
            onMouseUp={(e)=>{MouseUpEvent(e)}}
            onMouseMove={(e)=>{MouseMoveEvent(e)}}
            onMouseOut={(e)=>{if(mouseMove) MouseUpEvent(e)}}
        >
            <span className="close" onClick={()=>{closeHandler()}}><BsXLg/></span>
        </div>
        {props.children}
    </div>)
}

export default Window;