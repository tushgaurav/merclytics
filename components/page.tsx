import { cn } from "@/lib/utils"

export function Page({className, children} : {className?: string, children: React.ReactNode}) {
    return (
        <main className={cn(
            "min-h-screen max-w-4xl mx-auto p-4 text-text-subheading",
            className
        )} >
            {children}
        </main>
    )
}

export function Title({className, children} : {className?: string, children: React.ReactNode}) {
    return (
        <h1 className={cn(
            "text-3xl font-bold mt-16 leading-relaxed bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent",
            className
        )}>
            {children}
        </h1>
    )
}

export function Subtitle({className, children} : {className?: string, children: React.ReactNode}) {
    return (
        <h3 className={cn(
            "mt-6 max-w-2xl text-xl text-gray-200",
            className
        )}>
            {children}
        </h3>
    )
}

export function Section({className, id = '#', children} : {className?: string, id?: string, children: React.ReactNode}) {
    return (
        <section id={id} className={cn(
            "max-w-4xl  py-4",
            className
        )}>
            {children}
        </section>
    )
}

export function Paragraph({className, children} : {className?: string, children: React.ReactNode}) {
    return (
        <p className={cn(
            "text-lg leading-relaxed mt-4",
            className
        )}>
            {children}
        </p>
    )
}