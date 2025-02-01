import Image from "next/image";

export default function Navbar() {
  return (
    <div className="p-4 max-w-4xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="logo" width={30} height={40} />
        <h1 className="font-semibold tracking-tight">merclytics</h1>
      </div>

    </div>
  );
}
