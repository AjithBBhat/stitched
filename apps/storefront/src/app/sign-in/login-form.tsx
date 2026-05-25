'use client';

import {useState, useTransition} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {loginAction} from './actions';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import Link from 'next/link';

const loginSchema = z.object({
    username: z.email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
    redirectTo?: string;
}

export function LoginForm({redirectTo}: LoginFormProps) {
    const [isPending, startTransition] = useTransition();
    const [serverError, setServerError] = useState<string | null>(null);

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = (data: LoginFormData) => {
        setServerError(null);

        startTransition(async () => {
            const formData = new FormData();
            formData.append('username', data.username);
            formData.append('password', data.password);
            if (redirectTo) {
                formData.append('redirectTo', redirectTo);
            }

            const result = await loginAction(undefined, formData);
            if (result?.error) {
                setServerError(result.error);
            }
        });
    };

    const registerHref = redirectTo
        ? `/register?redirectTo=${encodeURIComponent(redirectTo)}`
        : '/register';

    return (
        <Card className="border-[#ead9d2] bg-white/85 shadow-xl backdrop-blur dark:border-[#5b3438] dark:bg-[#2a171b]/90">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent className="space-y-5">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="text-[#6f3f3f] dark:text-[#f1c8c9]">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="you@example.com"
                                            disabled={isPending}
                                            className="border-[#e5c9c1] bg-[#fffaf8] text-[#6f3f3f] placeholder:text-[#9b8177] focus-visible:ring-[#c98f92] dark:border-[#6b3d42] dark:bg-[#3a2025] dark:text-[#fff1ef] dark:placeholder:text-[#d8b4aa] dark:focus-visible:ring-[#e7b9ba]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <div className="flex items-center justify-between">
                                        <FormLabel className="text-[#6f3f3f] dark:text-[#f1c8c9]">Password</FormLabel>
                                        <Link
                                            href="/forgot-password"
                                            className="text-sm text-[#9b5758] hover:text-[#6f3f3f] dark:text-[#f1c8c9] dark:hover:text-[#fff1ef]"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            disabled={isPending}
                                            className="border-[#e5c9c1] bg-[#fffaf8] text-[#6f3f3f] placeholder:text-[#9b8177] focus-visible:ring-[#c98f92] dark:border-[#6b3d42] dark:bg-[#3a2025] dark:text-[#fff1ef] dark:placeholder:text-[#d8b4aa] dark:focus-visible:ring-[#e7b9ba]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        {serverError && (
                            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/70 dark:bg-red-950/40 dark:text-red-200">
                                {serverError}
                            </div>
                        )}
                        <Button
                            type="submit"
                            className="w-full bg-[#9b5758] text-white hover:bg-[#85494b] dark:bg-[#f1c8c9] dark:text-[#2a171b] dark:hover:bg-[#ffdada]"
                            disabled={isPending}
                        >
                            {isPending ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 mt-2">
                        <div className="text-center text-sm text-[#7a5f55] dark:text-[#d8b4aa]">
                            Don&apos;t have an account?{' '}
                            <Link href={registerHref} className="font-medium text-[#9b5758] underline underline-offset-4 hover:text-[#6f3f3f] dark:text-[#f1c8c9] dark:hover:text-[#fff1ef]">
                                Register
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
}
