import { ReactNode } from "react";

interface setProps{
    children?: ReactNode
    
    variant?: string
    isCentered?: boolean
    isUnderlined?: boolean
    isSpacer?: boolean
    isBold?: boolean
    style?: string
}

export default function Typography({children, variant, isCentered, isUnderlined, isSpacer, isBold, style}:setProps){
    if(variant === "h1"){
        return (<h1 className={`text-2xl ${isCentered && 'text-center'} ${isBold && 'font-bold'} ${isUnderlined && 'underline'} ${isSpacer && 'pt-5'} ${style}`}>{children}</h1>)
    }

    if(variant === "h2"){
        return (<h2 className={`text-xl ${isCentered && 'text-center'} ${isBold && 'font-bold'} ${isUnderlined && 'underline'} ${isSpacer && 'pt-5'} ${style}`}>{children}</h2>)
    }

    if(variant === "h3"){
        return (<h3 className={`text-lg ${isCentered && 'text-center'} ${isBold && 'font-bold'} ${isUnderlined && 'underline'} ${isSpacer && 'pt-5'} ${style}`}>{children}</h3>)
    }

    if(variant === "h4"){
        return (<h4 className={`text-md ${isCentered && 'text-center'} ${isBold && 'font-bold'} ${isUnderlined && 'underline'} ${isSpacer && 'pt-5'} ${style}`}>{children}</h4>)
    }
    
    else {
        return <p className={`text-sm ${isCentered && 'text-center'} ${isBold && 'font-bold'} ${isUnderlined && 'underline'} ${isSpacer && 'pt-5'} ${style}`}>{children}</p>
    }
}