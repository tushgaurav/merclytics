import { TryNow } from "@/app/_components/try-now";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 justify-between items-center px-4 md:px-6">
      <Link href="/" className="flex items-center space-x-2 lg:hidden">
        <Image src="/logo.png" alt="logo" width={30} height={40} />
        <h1 className="font-semibold tracking-tight">merclytics</h1>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden bg-branding-violet hover:bg-text-subheading"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-branding-violet w-64">
          <div className="grid gap-2 py-6">
            <Link
              href="/features"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Contact
            </Link>
          </div>

          <TryNow />
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex items-center space-x-2">
        <Image src="/logo.png" alt="logo" width={30} height={40} />
        <h1 className="font-semibold tracking-tight">merclytics</h1>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="/features"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Features
        </Link>
        {/* <Link
          href="/pricing"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Pricing
        </Link> */}
        <Link
          href="/contact"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
