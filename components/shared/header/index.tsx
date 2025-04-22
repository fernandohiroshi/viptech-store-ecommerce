import Image from "next/image"
import Link from "next/link"

import { APP_NAME } from "@/lib/constants"

import CategoryDrawer from "./category-drawer"
import Menu from "./menu"
import Search from "./search"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <CategoryDrawer />
          <Link href="/" className="flex-start ml-2">
            <Image
              src="/images/logo.png"
              alt={`${APP_NAME}`}
              height={40}
              width={40}
              priority={true}
              className="opacity-90 duration-500 ease-in-out hover:scale-110 hover:brightness-110"
            />
            <span className="ml-2 text-xl font-bold md:text-2xl">VTstore</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  )
}

export default Header
