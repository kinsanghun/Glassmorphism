import { childrenType } from "types/type";

export const Wrapper = ({children}:childrenType) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}