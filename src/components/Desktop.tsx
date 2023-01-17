import { childrenType } from "types/type";

const Desktop = ({children}:childrenType) => {
    return (
        <div className="desktop">
            {children}
        </div>
    )
}

export default Desktop;