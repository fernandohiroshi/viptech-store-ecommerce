"use client"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { APP_NAME } from "@/lib/constants"

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/images/logo.png"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className="w-1/3 rounded-lg p-6 text-center shadow-md dark:shadow-white/10">
        <h1 className="mb-4 text-3xl font-bold">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button variant="outline" className="mt-4 ml-2" asChild>
          <Link href="/">Back To Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
