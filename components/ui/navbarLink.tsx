import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Typography from "./typography";

interface setprops{
    imageLink: string
    imageAlt: string 
    linkRef: string
    linkText: string
}

export default function({imageLink, imageAlt, linkRef, linkText}:setprops){
    return (
        <div className="text-white hover:bg-gray-600 rounded-lg p-3">
                <Link href={linkRef}  className="flex flex-row justify-center items-center gap-3">
                    <Image src={imageLink} alt={imageAlt} height={30} width={30}></Image>
                    <Typography variant="h4" isBold>{linkText}</Typography>
                </Link>
            </div>
    )
}