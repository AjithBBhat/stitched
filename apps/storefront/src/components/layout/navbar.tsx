import Image from "next/image";
import Link from "next/link";
import {NavbarCollections} from '@/components/layout/navbar/navbar-collections';
import {NavbarCart} from '@/components/layout/navbar/navbar-cart';
import {NavbarUser} from '@/components/layout/navbar/navbar-user';
import {ThemeSwitcher} from '@/components/layout/navbar/theme-switcher';
import {Suspense} from "react";
import {SearchInput} from '@/components/layout/search-input';
import {NavbarUserSkeleton} from '@/components/shared/skeletons/navbar-user-skeleton';
import {SearchInputSkeleton} from '@/components/shared/skeletons/search-input-skeleton';

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#ead9d2] bg-[#fffaf8]/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-[#fffaf8]/85 dark:border-[#5b3438] dark:bg-[#2a171b]/95 dark:supports-[backdrop-filter]:bg-[#2a171b]/88">
            <div className="container mx-auto px-4">
                <div className="flex h-18 items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-5 lg:gap-8">
                        <Link href="/" className="flex min-w-0 items-center gap-3">
                            <Image
                                src="/stitched-brand.png"
                                alt="Stitched"
                                width={52}
                                height={52}
                                className="h-12 w-12 rounded-full border border-[#e5c9c1] bg-white object-cover shadow-sm dark:border-[#e7b9ba] dark:bg-[#fff4f1] dark:shadow-[0_0_0_3px_rgba(231,185,186,0.18)]"
                            />
                            <span className="hidden leading-none sm:block">
                                <span className="block text-xl font-semibold text-[#8f4f53] dark:text-[#f1c8c9]">Stitched</span>
                                <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a766b] dark:text-[#d8b4aa]">
                                    Handmade Crochet
                                </span>
                            </span>
                        </Link>
                        <nav className="hidden items-center md:flex">
                            <Suspense>
                                <NavbarCollections/>
                            </Suspense>
                        </nav>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                        <div className="hidden lg:flex">
                            <Suspense fallback={<SearchInputSkeleton />}>
                                <SearchInput/>
                            </Suspense>
                        </div>
                        <ThemeSwitcher />
                        <Suspense>
                            <NavbarCart/>
                        </Suspense>
                        <Suspense fallback={<NavbarUserSkeleton />}>
                            <NavbarUser/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </header>
    );
}
