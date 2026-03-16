import Image from "next/image"
import Link from "next/link"
import Typography from "./typography"
import NavbarLink from "./navbarLink"

export default function Navigator(){
    return (<nav className="hidden sm:block bg-slate-700 sm:w-[20rem] sm:h-screen sm:sticky sm:left-0 sm:top-0">
        <div className="flex sm:flex-col gap-5 justify-center items-center sm:pt-5 sm:pl-2 sm:pr-2 p-2 break-all">
            <Link href={"https://www.hamar-katedral.vgs.no/"}>
                <Image src={"/hamar-katedralskoleWhite_png.png"} height={200} width={200} alt="Hamar Katedralskole"></Image>
            </Link>

            <NavbarLink imageLink="/thermostat.png" imageAlt="Ventilasjonskontroll" linkRef="/" linkText="Ventilasjonskontroll"></NavbarLink>
            <NavbarLink imageLink="/clock.png" imageAlt="Ventilasjonshistorikk" linkRef="/" linkText="Temperaturhistorikk"></NavbarLink>
        </div>
    </nav>)
}