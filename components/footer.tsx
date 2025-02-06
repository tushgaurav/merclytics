import Link from "next/link";

export default function FooterSection() {
  return (
    // <footer className="w-full bg-gradient-to-b from-transparent to-gray-950/30 px-4">
    //     <div className="mx-auto max-w-7xl">
    //         <div className="border-t border-gray-800/60 pt-8 mt-10 md:mt-20 pb-12 text-foreground">
    //             <div className="flex justify-between items-center flex-wrap">
    //                 <div className="flex flex-col items-start gap-6">
    //                     <div className="flex items-center gap-3">
    //                         <Image src="/logo.png" width={44} height={44} alt="logo" className="rounded-xl" />
    //                         <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">merclytics</h3>
    //                     </div>
    //                     <p className="text-sm text-gray-400 max-w-[24ch]">
    //                         Empowering businesses with intelligent AI solutions
    //                     </p>
    //                 </div>
    //                 <div className="flex flex-col gap-4">
    //                     <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Connect</h3>
    //                     <p className="text-sm text-gray-400">info@merclyticsai.com</p>
    //                     <p className="text-sm text-gray-400">+61 499-321-549</p>
    //                 </div>
    //             </div>
    //             <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800/60 pt-8 text-sm text-gray-400 sm:flex-row">
    //                 <div>© {new Date().getFullYear()} Merclytics. All rights reserved.</div>
    //                 <div className="text-gray-500">Built with ❤️ for the future</div>
    //             </div>
    //         </div>
    //     </div>
    // </footer>
    <footer className="py-8">
      <div className="max-w-7xl mx-auto text-text-subheading p-4">
        <div className="text-[4rem] md:text-[10rem] opacity-70 md:opacity-40 tracking-tighter font-bold text-[#271642]">
          merclytics
        </div>

        <div className="grid justify-items-start gap-8 md:gap-6 md:grid-cols-3 items-start">
          <div>
            <h2 className="font-bold uppercase">Platform</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/platform#overview">Overview</Link>
              </li>
              <li>
                <Link href="">Pricing</Link>
              </li>
              <li>
                <Link href="/platform#compliance">Security & Compliance</Link>
              </li>
              <li>
                <Link href="/platform#ai-ml">AI & Machine Learning</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold uppercase">Solutions</h2>
            <ul className="mt-2 space-y-1">
              <li>
                Request a Demo
                </li>
              <li>Chatbot</li>
              <li>AI Assistant</li>
              <li>Bussiness Solutions</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold uppercase">Company</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/newsroom">Newsroom</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex mt-6 flex-wrap gap-2 justify-between items-end">
          <div className="flex flex-col gap-2 md:gap-1">
            <ul className="flex gap-2">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              {" | "}
              <li>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
            </ul>
            <span>&copy; {new Date().getFullYear()} merclytics</span>
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <Link href="#">LINKEDIN</Link>
            </li>
            <li>
              <Link href="#">INSTAGRAM</Link>
            </li>
            <li>
              <Link href="#">TWITTER</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
