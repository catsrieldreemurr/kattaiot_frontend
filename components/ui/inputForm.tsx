"use client"

import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

export default function InputForm(){
    return (<form className="text-white" onSubmit={(e) => {
        e.preventDefault();
    }}>
    
    <div className="mt-10 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <Label htmlFor="name" className="text-md font-bold">Brukernavn</Label>
            <Input id="name" className="text-white m-5"></Input>
        </div>

        <div className="flex flex-col justify-center items-center">
            <Label htmlFor="name" className="text-md font-bold">Passord</Label>
            <Input type="password" id="name" className="text-white m-5"></Input>
        </div>
        
        <div></div>
        <Button variant={"outline"}>Logg inn</Button> 
    </div>
    
        
    </form>)
}