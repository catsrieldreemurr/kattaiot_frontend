import Image from "next/image"
import Link from "next/link"

export default function Navigator(){
    return (<nav className="hidden sm:block bg-slate-800 sm:w-[6rem] sm:h-screen sm:sticky sm:left-0 sm:top-0">
        <div className="flex sm:flex-col gap-5 justify-center items-center sm:pt-5 sm:pl-2 sm:pr-2 p-2 break-all">
            <Link href={"https://www.hamar-katedral.vgs.no/"}>
                <Image src={"/fylkesvaapen.png"} height={50} width={50} alt="Hamar Katedralskole"></Image>
            </Link>
            <h1 className="text-white font-bold">Katta_IOT</h1>

            <div className="text-white">
                <Link href={"/"}> <Image className="hover:bg-rose-400 rounded-lg" src={"/thermostat.png"} alt="Temperature Control" height={35} width={35}></Image> </Link>
            </div>
        </div>
    </nav>)
}