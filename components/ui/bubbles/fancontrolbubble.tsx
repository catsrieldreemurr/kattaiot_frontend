import Bubble from "../bubble";
import Fancontrol from "../fancontrol";
import Typography from "../typography";

export default function FanControlBubble(){
    return (
        <div>
            <Bubble style="sm:w-1/3">
                <Typography variant="h2" isBold isCentered>Fan-Control</Typography>
                    <div className="flex gap-5 justify-center">
                        <Typography isCentered>90℃</Typography>
                        <Typography isCentered>1000rpm</Typography>
                    </div>

                <Fancontrol></Fancontrol>
            </Bubble>
        </div>
    )
}