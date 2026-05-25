'use client';

import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import Link from 'next/link';
import {
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {cn} from '@/lib/utils';

export function NavbarLink({href, ...rest}: ComponentProps<typeof Link>) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;

    return (
        <NavigationMenuLink asChild active={isActive}>
            <Link
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                    navigationMenuTriggerStyle(),
                    'bg-transparent px-3 text-sm font-medium text-[#7a5f55] hover:bg-[#f7ebe7] hover:text-[#8f4f53] data-[active=true]:bg-[#f7ebe7] data-[active=true]:text-[#8f4f53] dark:text-[#f1c8c9] dark:hover:bg-[#4a2a2f] dark:hover:text-[#fff1ef] dark:data-[active=true]:bg-[#4a2a2f] dark:data-[active=true]:text-[#fff1ef]'
                )}
                href={href}
                {...rest}
            />
        </NavigationMenuLink>
    );
}
