import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import CategoryDrawer from "./category-drawer";
import Search from "./search";

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
              className="hover:scale-110 duration-500 ease-in-out opacity-90 hover:brightness-110"
            />
            <span className="font-bold text-xl md:text-2xl ml-2">VTstore</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
