"use client"
import Bubble from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navigator from "@/components/ui/pagebox"
import { Slider } from "@/components/ui/slider"
import Typography from "@/components/ui/typography"
import Window from "@/components/ui/window"
import { useState } from "react"

export default function Page() {
  const [isActive, setIsActive] = useState(false);

  function FlipButton(){
    setIsActive(!isActive)
    console.log(isActive)
  }

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

          <div className="flex gap-5">
            {(isActive == false) && <Button variant={"default"} className="bg-red-600 border border-white" onClick={FlipButton}>Av</Button> }
            {isActive && <Button variant={"default"} className="bg-green-600 border border-white" onClick={FlipButton}>På</Button>}
            <Slider disabled={!isActive} defaultValue={[25]}></Slider>

            <Input type="number" className="w-1/3" disabled={!isActive}></Input>
          </div>
         
          
        </Bubble>
      </Window>
    </div>
  )
}
