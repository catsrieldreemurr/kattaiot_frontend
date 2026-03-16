import { ReactNode } from "react";

interface props{
    children?: ReactNode
}

export default function Window({children}:props){
    return (
        <div className="bg-slate-800 h-screen w-screen p-5">
            {children}
        </div>
    )
}