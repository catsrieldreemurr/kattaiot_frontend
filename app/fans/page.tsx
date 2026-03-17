import Bubble from "@/components/ui/bubble"
import Fancontrol from "@/components/ui/fancontrol"
import FanControlBubble from "@/components/ui/bubbles/fancontrolbubble"
import Navigator from "@/components/ui/pagebox"
import Typography from "@/components/ui/typography"
import Window from "@/components/ui/window"
import TestBubble from "@/components/ui/bubbles/testbubble"

export default function Page() {
  return (
    <div className="sm:flex">
      <Navigator></Navigator>
      <Window>
        <TestBubble></TestBubble>
      </Window>
    </div>
  )
}
