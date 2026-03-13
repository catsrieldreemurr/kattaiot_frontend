import { Button } from "@/components/ui/button"
import SelectCategory from "@/components/ui/categoryselect"
import Navigator from "@/components/ui/pagebox"

export default function Page() {
  return (
    <div className="sm:flex">
      <Navigator></Navigator>
      <SelectCategory></SelectCategory>
      <h1>test</h1>
    </div>
  )
}
