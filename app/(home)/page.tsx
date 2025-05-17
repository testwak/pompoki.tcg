import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const images = [
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card2.PNG?raw=true',
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card4.PNG?raw=true',
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card3.PNG?raw=true',
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card5.GIF?raw=true',
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card6.PNG?raw=true',
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card7.PNG?raw=true',
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card8.PNG?raw=true',
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card9.PNG?raw=true',
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card10.PNG?raw=true',
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card11.PNG?raw=true',
    'https://github.com/testwak/pompoki.tcg/blob/main/image/card12.PNG?raw=true',
];

export default function HomePage() {
    return (
        <main className="flex flex-1 flex-col justify-center text-center">
            <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
                <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl font-1">
                    @POMPOKI.tcg
                </h2>
                <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
                Best TCG Discord Bot for Hoyoverse-Games Communication <span className='font-1'>:^|</span>
                </p>

                <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
                    <button style={{backgroundColor: "#a0312d"}} className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                        <a href='https://discord.gg/7kjJm6XYJ3'>Support Server </a>
                    </button>
                    <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                        <a href="/docs/introduction">Documentation</a>
                    </button>
                </div>

                {/* overlay */}
                <div className="absolute inset-0 z-10 h-full w-full bg-black/40 dark:bg-black/40" />
                <ThreeDMarquee
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    images={images}
                />
            </div>
        </main>
    );
}

