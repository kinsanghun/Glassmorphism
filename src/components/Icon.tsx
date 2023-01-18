import { ReactNode, useState } from "react";
import Window from "./window/Window";
import { BsXLg } from "react-icons/bs";
import { windowType } from "types/type";

export const Icon = (props:{title:string, icon:ReactNode, page:ReactNode, pid:number, windowHandler:Function}) => {
    const [view, setView] = useState<boolean>(false);

    const onClickHandler = () => {
        props.windowHandler((prev:windowType[]) => {
            const windows = [...prev];
            for(let i = 0; i < windows.length; i++ ) {
                if(windows[i].pid === props.pid) {
                    const pop:windowType[] = windows.splice(i, 1);
                    windows.push(...pop);
                    break;
                }
            }
            return windows;
        });
    }

    

    const window:ReactNode = (
        <div className="container">
            <div>
                {props.page}
            </div>
        </div>
    )

    const windowHandler = () => {
        if(view === false) {
            props.windowHandler((prev:windowType[]) => {
            const windows:windowType[] = [...prev];

            windows.push({pid:props.pid, window:<Window pid={props.pid} children={window} windowOnClickHandler={onClickHandler} setView={setView} windowHandler={props.windowHandler}/>});
            return windows;
        })
        setView(prev => true);
    }}

    return (
        <div className="icon">
            <div className="image" onClick={()=>{windowHandler()}}>{props.icon}</div>
            <div className="title">{props.title}</div>
        </div>
    )
}