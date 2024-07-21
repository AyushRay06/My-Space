"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SignIn, SignInButton, UserProfile } from "@clerk/clerk-react"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

const state = false

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center font-bold text-7xl">
      <UserButton afterSwitchSessionUrl="/" />
      <ModeToggle />
    </div>
  )
}
