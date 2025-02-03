export function Page({children} : {children: React.ReactNode}) {
    return (
        <main className="min-h-screen max-w-4xl mx-auto p-4">
            {children}
        </main>
    )
}

export function Title({children} : {children: React.ReactNode}) {
    return (
        <h1 className="text-3xl font-bold mt-16 leading-relaxed bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {children}
        </h1>
    )
}

export function Subtitle({children} : {children: React.ReactNode}) {
    return (
        <h3 className="mt-6 max-w-2xl text-xl text-gray-400">
            {children}
        </h3>
    )
}

export function Section({children} : {children: React.ReactNode}) {
    return (
        <section className="max-w-4xl mx-auto p-4">
            {children}
        </section>
    )
}