import { Separator } from "./separator";
import Typography from "./typography";

export default function SelectCategory(){
    return(
        <div className="bg-gray-200 w-[24rem] p-5">
            <Typography variant="h1" isBold isCentered>Temperatur</Typography>
            <Separator className="bg-gray-300"></Separator>
        </div>
    )
}