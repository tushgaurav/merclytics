import { TryNow } from "@/app/_components/try-now";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-4 max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={30} height={40} />
          <h1 className="font-semibold tracking-tight">merclytics</h1>
        </Link>
      </div>

      <div className="flex items-center space-x-6 ">
        <nav className="flex items-center space-x-4 font-bold text-text-subheading text-sm">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      <TryNow />
      </div>
    </div>
  );
}
