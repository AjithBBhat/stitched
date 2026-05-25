import type {Metadata} from "next";
import {Suspense} from "react";
import {HeroSection} from "@/components/layout/hero-section";
import {FeaturedProducts} from "@/components/commerce/featured-products";
import {ProductGridSkeleton} from "@/components/shared/product-grid-skeleton";
import {SITE_NAME, SITE_URL, buildCanonicalUrl} from "@/lib/metadata";

export const metadata: Metadata = {
    title: {
        absolute: `${SITE_NAME} - Handmade Crochet & Yarn Crafts`,
    },
    description:
        "Shop handmade crochet, yarn crafts, and cozy gifts made with care.",
    alternates: {
        canonical: buildCanonicalUrl("/"),
    },
    openGraph: {
        title: `${SITE_NAME} - Handmade Crochet & Yarn Crafts`,
        description:
            "Shop handmade crochet, yarn crafts, and cozy gifts made with care.",
        type: "website",
        url: SITE_URL,
    },
};

export default async function Home(_props: PageProps<'/'>) {
    return (
        <div className="min-h-screen">
            <HeroSection/>
            <Suspense fallback={<FeaturedProductsSkeleton/>}>
                <FeaturedProducts/>
            </Suspense>

            {/* You can add more sections here */}
            <section className="bg-[#fffaf8] py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-6 text-center md:grid-cols-3">
                        <div className="space-y-3">
                            <div
                                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f1d8d2] text-[#8f4f53]">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Handmade Quality</h3>
                            <p className="text-muted-foreground">Carefully crafted pieces made with patience and detail</p>
                        </div>
                        <div className="space-y-3">
                            <div
                                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e7eadf] text-[#6d7659]">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Thoughtful Gifts</h3>
                            <p className="text-muted-foreground">Soft, personal items for homes, friends, and little rituals</p>
                        </div>
                        <div className="space-y-3">
                            <div
                                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f2e1d3] text-[#9a6b4c]">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Made With Love</h3>
                            <p className="text-muted-foreground">Warm textures and yarn work designed to feel special</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeaturedProductsSkeleton() {
    return (
        <section className="container mx-auto px-4 py-16">
            <ProductGridSkeleton/>
        </section>
    );
}
