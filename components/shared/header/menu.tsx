import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react"
import Link from "next/link"

import { auth } from "@/auth"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { signOutUser } from "@/lib/actions/user.actions"

import ModeToggle from "./mode-toggle"
import UserButton from "./user-button"

const Menu = async () => {
  const session = await auth()

  if (!session) {
    return (
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden w-full max-w-xs gap-1 lg:flex">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>

        <UserButton />
      </nav>

      {/* MOBILE */}
      <nav className="lg:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>

            <div className="flex flex-col space-y-1">
              <div className="text-sm leading-none font-medium">
                {session.user?.name}
              </div>

              <div
                className="text-muted-foreground max-w-[200px] cursor-default truncate text-sm leading-none"
                title={session.user?.email ?? undefined}
              >
                {session.user?.email}
              </div>
            </div>

            {/* Profile */}
            <SheetClose asChild>
              <Link href="/user/profile" className="w-full">
                User Profile
              </Link>
            </SheetClose>

            {/* Orders */}
            <SheetClose asChild>
              <Link href="/user/orders" className="w-full">
                Order History
              </Link>
            </SheetClose>

            {/* Admin Overview */}
            {session?.user?.role === "admin" && (
              <Link href="/admin/overview" className="w-full">
                Admin
              </Link>
            )}

            <SheetClose asChild>
              <Button asChild variant="outline">
                <Link href="/cart">
                  <ShoppingCart /> Cart
                </Link>
              </Button>
            </SheetClose>
            <ModeToggle />

            <form action={signOutUser} className="w-full">
              <Button
                className="h-4 w-full cursor-default justify-center px-2 py-4"
                variant="default"
              >
                Sign Out
              </Button>
            </form>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default Menu
