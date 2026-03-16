import Bubble from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import Navigator from "@/components/ui/pagebox"
import Typography from "@/components/ui/typography"
import Window from "@/components/ui/window"

export default function Page() {
  return (
    <div className="sm:flex">
      <Navigator></Navigator>
      <Window>
        <Bubble style="sm:w-1/5">
          <Typography variant="h2" isBold isCentered>Fan-Control</Typography>
          <Typography isCentered>Temperatur: 90℃</Typography>
          <Typography isCentered>Fart: 1000rpm</Typography>
        </Bubble>
      </Window>
    </div>
  )
}
