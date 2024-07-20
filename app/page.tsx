import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const state = false

export default function Home() {
  return (
    <div>
      <Button className={cn("bg-red-50", state && "bg-green-400")}></Button>
    </div>
  )
}
