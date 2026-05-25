import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#fff8f6] pt-18">
            <div className="absolute inset-x-0 top-0 h-32 bg-[#f7e7e2]" />
            <div className="container relative mx-auto grid min-h-[640px] items-center gap-10 px-4 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-20 lg:gap-16">
                <div className="max-w-xl space-y-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b5758]">
                        By hand, made with love
                    </p>
                    <h1 className="text-5xl font-semibold tracking-normal text-[#6f3f3f] md:text-6xl lg:text-7xl">
                        Soft crochet for warm little moments.
                    </h1>
                    <p className="max-w-lg text-lg leading-8 text-[#7a5f55] md:text-xl">
                        Thoughtful yarn pieces, cozy gifts, and handmade textures from Stitched.
                    </p>
                    <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                        <Button asChild size="lg" className="min-w-[190px] bg-[#9b5758] text-white hover:bg-[#85494b]">
                            <Link href="/search">
                                Shop Handmade
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="min-w-[190px] border-[#caa1a0] bg-white/70 text-[#6f3f3f] hover:bg-[#f7ebe7] hover:text-[#6f3f3f]">
                            <Link href="/search">
                                View Collections
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="relative mx-auto w-full max-w-[620px]">
                    <div className="absolute -inset-5 rounded-full bg-[#efd7d1]" />
                    <Image
                        src="/stitched-brand.png"
                        alt="Stitched yarn and crochet logo"
                        width={1254}
                        height={1254}
                        priority
                        sizes="(min-width: 768px) 48vw, 92vw"
                        className="relative aspect-square w-full rounded-full border border-[#ead3cc] bg-white object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}
