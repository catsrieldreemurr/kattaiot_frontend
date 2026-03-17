import Bubble from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import Fancontrol from "@/components/ui/fancontrol"
import { Input } from "@/components/ui/input"
import Navigator from "@/components/ui/pagebox"
import { Slider } from "@/components/ui/slider"
import Typography from "@/components/ui/typography"
import Window from "@/components/ui/window"

export default function Page() {
  return (
    <div className="sm:flex">
      <Navigator></Navigator>
      <Window>
        <Bubble style="sm:w-1/3">
          <Typography variant="h2" isBold isCentered>Fan-Control</Typography>
          <div className="flex gap-5 justify-center">
            <Typography isCentered>90℃</Typography>
            <Typography isCentered>1000rpm</Typography>
          </div>

          <Fancontrol></Fancontrol>
        </Bubble>
      </Window>
    </div>
  )
}
