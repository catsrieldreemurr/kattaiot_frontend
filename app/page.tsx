import { Input } from "@/components/ui/input";
import InputForm from "@/components/ui/inputForm";
import Typography from "@/components/ui/typography";
import Window from "@/components/ui/window";
import Image from "next/image";
import Link from "next/link";

export default function Page(){
    return (<Window>
        <div className="flex flex-col justify-center items-center">
            <Link href={"https://www.hamar-katedral.vgs.no/"}>
                <Image src={"/hamar-katedralskoleWhite_png.png"} alt="Hamar Katedralskole" height={200} width={200}></Image>
            </Link>

            <InputForm></InputForm>
        </div>
        
    </Window>
    )
}