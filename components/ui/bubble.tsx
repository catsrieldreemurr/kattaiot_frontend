import { ReactNode } from "react";

interface setprops{
    children?: ReactNode
    style?: string
}

export default function Bubble({children, style}:setprops){
    return (
        <div className={`bg-slate-600 p-5 text-white rounded-xl w-full ${style}`}>
            {children}
        </div>
    )
}