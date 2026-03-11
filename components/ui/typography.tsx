import { ReactNode } from "react";

interface setProps{
    children?: ReactNode
    
    variant: string
    isCentered: boolean
    isUnderlined: boolean
    isSpacer: boolean
}

export default function Typography({children, variant, isCentered, isUnderlined, isSpacer}:setProps){
    if(variant === "h1"){
        return (<h1 className={`${isCentered && 'text-center'} `}>{children}</h1>)
    }
}