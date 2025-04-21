import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";
import { auth } from "@/auth";
import { signOutUser } from "@/lib/actions/user.actions";

const Menu = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in">
          <UserIcon /> Sign In
        </Link>
      </Button>
    );
  }

  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>

        <UserButton />
      </nav>

      {/* MOBILE */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>

            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {session.user?.name}
              </div>

              <div
                className="text-sm text-muted-foreground leading-none truncate max-w-[200px] cursor-default"
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
                className="w-full py-4 px-2 h-4 justify-center cursor-default"
                variant="default"
              >
                Sign Out
              </Button>
            </form>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
