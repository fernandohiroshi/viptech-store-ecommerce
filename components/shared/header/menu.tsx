import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "U";
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
            <Link href="/user/profile" className="w-full">
              User Profile
            </Link>

            {/* Orders */}
            <Link href="/user/orders" className="w-full">
              Order History
            </Link>

            {/* Admin Overview */}
            {session?.user?.role === "admin" && (
              <Link href="/admin/overview" className="w-full">
                Admin
              </Link>
            )}

            <Button asChild variant="outline">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
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
