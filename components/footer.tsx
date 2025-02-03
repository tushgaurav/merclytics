import Image from "next/image";

export default function FooterSection() {
    return (
        <footer className="w-full bg-gradient-to-b from-transparent to-gray-950/30 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="border-t border-gray-800/60 pt-8 mt-10 md:mt-20 pb-12 text-foreground">
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="flex flex-col items-start gap-6">
                            <div className="flex items-center gap-3">
                                <Image src="/logo.png" width={44} height={44} alt="logo" className="rounded-xl" />
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">merclytics</h3>
                            </div>
                            <p className="text-sm text-gray-400 max-w-[24ch]">
                                Empowering businesses with intelligent AI solutions
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Connect</h3>
                            <p className="text-sm text-gray-400">info@merclyticsai.com</p>
                            <p className="text-sm text-gray-400">+61 499-321-549</p>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800/60 pt-8 text-sm text-gray-400 sm:flex-row">
                        <div>© {new Date().getFullYear()} Merclytics. All rights reserved.</div>
                        <div className="text-gray-500">Built with ❤️ for the future</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
