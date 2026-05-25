import type {Metadata} from 'next';
import Image from 'next/image';
import {Suspense} from 'react';
import {LoginForm} from "./login-form";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export const metadata: Metadata = {
    title: 'Sign In',
    description: 'Sign in to your account to access your orders, wishlist, and more.',
};

function LoginFormSkeleton() {
    return (
        <Card className="border-[#ead9d2] bg-white/85 shadow-xl dark:border-[#5b3438] dark:bg-[#2a171b]/90">
            <CardContent className="space-y-4 pt-6">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-12 bg-[#ead9d2] dark:bg-[#5b3438]"/>
                    <Skeleton className="h-10 w-full bg-[#ead9d2] dark:bg-[#5b3438]"/>
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-16 bg-[#ead9d2] dark:bg-[#5b3438]"/>
                    <Skeleton className="h-10 w-full bg-[#ead9d2] dark:bg-[#5b3438]"/>
                </div>
                <Skeleton className="h-10 w-full bg-[#ead9d2] dark:bg-[#5b3438]"/>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">

                <div className="flex flex-col items-center space-y-2">
                    <Skeleton className="h-4 w-40 bg-[#ead9d2] dark:bg-[#5b3438]"/>
                </div>
            </CardFooter>
        </Card>
    );
}

async function SignInContent({searchParams}: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
    const resolvedParams = await searchParams;
    const redirectTo = resolvedParams?.redirectTo as string | undefined;

    return <LoginForm redirectTo={redirectTo}/>;
}

export default async function SignInPage({searchParams}: PageProps<'/sign-in'>) {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff8f6] px-4 py-24 dark:bg-[#1f1115]">
            <div className="absolute inset-x-0 top-0 h-56 bg-[#f7e7e2] dark:bg-[#2a171b]" />
            <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#efd7d1]/70 blur-3xl dark:bg-[#5b3438]/50" />
            <div className="absolute -right-20 bottom-12 h-72 w-72 rounded-full bg-[#e7eadf]/80 blur-3xl dark:bg-[#4a2a2f]/50" />

            <div className="relative w-full max-w-md space-y-7">
                <div className="space-y-2 text-center">
                    <Image
                        src="/stitched-brand.png"
                        alt="Stitched"
                        width={76}
                        height={76}
                        className="mx-auto h-19 w-19 rounded-full border border-[#e5c9c1] bg-white object-cover shadow-md dark:border-[#e7b9ba] dark:bg-[#fff4f1]"
                    />
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b5758] dark:text-[#f1c8c9]">
                        Stitched Account
                    </p>
                    <h1 className="text-3xl font-semibold tracking-normal text-[#6f3f3f] dark:text-[#fff1ef]">
                        Welcome back
                    </h1>
                    <p className="text-[#7a5f55] dark:text-[#d8b4aa]">
                        Sign in to view orders, saved details, and your handmade picks.
                    </p>
                </div>
                <Suspense fallback={<LoginFormSkeleton/>}>
                    <SignInContent searchParams={searchParams}/>
                </Suspense>
            </div>
        </div>
    );
}
