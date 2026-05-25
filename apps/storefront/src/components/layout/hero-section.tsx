import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-[560px] overflow-hidden bg-[#fff8f6]">
            <Image
                src="/stitched-brand.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-contain object-center opacity-25"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
            <div className="container relative mx-auto flex min-h-[560px] items-center px-4 py-24 md:py-32">
                <div className="max-w-2xl space-y-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b5758]">
                        By hand, made with love
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-[#6f3f3f] md:text-6xl lg:text-7xl">
                        Stitched
                    </h1>
                    <p className="max-w-xl text-lg text-[#7a5f55] md:text-2xl">
                        Handmade crochet, yarn crafts, and thoughtful pieces for cozy everyday moments.
                    </p>
                    <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                        <Button asChild size="lg" className="min-w-[200px]">
                            <Link href="/search">
                                Shop Handmade
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="min-w-[200px] border-[#caa1a0] text-[#6f3f3f]">
                            <Link href="/search">
                                View Collections
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
