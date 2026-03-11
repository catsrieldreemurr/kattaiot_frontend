import Image from "next/image"
import Link from "next/link"

export default function Navigator(){
    return (<nav className="bg-blue-200 sm:w-[6rem] sm:h-screen sm:sticky sm:left-0 sm:top-0">
        <div className="flex sm:flex-col gap-5 justify-center items-center sm:pt-5 sm:pl-2 sm:pr-2 p-2 break-all">
            <Link href={"https://www.hamar-katedral.vgs.no/"}>
                <Image src={"/fylkesvaapen.png"} height={50} width={50} alt="Hamar Katedralskole"></Image>
            </Link>
            <h1 className="font-bold">Katta_IOT</h1>

            <div>
                <Link href={"/"}>Kontroller</Link>
            </div>
        </div>
    </nav>)
}