"use client"

import { useState } from "react";
import Typography from "./typography";
import { Input } from "./input";
import { Button } from "./button";
import { Slider } from "./slider";

export default function Fancontrol(){
    const [isActive, setIsActive] = useState(false);
    const [fanSpeed, setFanSpeed] = useState(200);
    
    const maxSpeed = 1000;
    
    function FlipButton(){
        setIsActive(!isActive)
        console.log(isActive)
    }

    return(
        <div>
            <div className="flex gap-5">
            {(isActive == false) && <Button variant={"default"} className="bg-red-600 border border-white" onClick={FlipButton}>Av</Button> }
            {isActive && <Button variant={"default"} className="bg-green-600 border border-white" onClick={FlipButton}>På</Button>}
            <Slider disabled={!isActive} defaultValue={[200]} min={0} max={maxSpeed} value={[fanSpeed]} step={50} onValueChange={(value) => {
              setFanSpeed(value[0]) // Set passLength to the value of the slider
            }}></Slider>

            <Input type="number" value={fanSpeed} className="w-1/3" disabled={!isActive} min={0} max={maxSpeed} onChange={(e) => {
            const value = e.target.value;

              if(value === ""){ // If Box is empty
                setFanSpeed(0);
            }

            const numVal = Number(value)
              if(numVal<= maxSpeed){ // If Number is smaller than the set value 
                setFanSpeed(numVal)
            }
            else {
                setFanSpeed(maxSpeed);
            }
            }}
            onBlur={() => {
                if(fanSpeed <= 20){setFanSpeed(20)}
                if(fanSpeed > maxSpeed){setFanSpeed(maxSpeed)}
            }}
            ></Input>
        </div>
        
        <Typography>{fanSpeed}</Typography>

    
        </div>
    )
}