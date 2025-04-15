import { Button } from "./ui/button";
import Link from "next/link";

const ViewAllProductsButton = () => {
  return (
    <div className="flex justify-end items-center my-8">
      <Button
        asChild
        className="px-8 py-4 text-lg font-semibold"
        variant="default"
      >
        <Link href="/search">View All Products</Link>
      </Button>
    </div>
  );
};

export default ViewAllProductsButton;
