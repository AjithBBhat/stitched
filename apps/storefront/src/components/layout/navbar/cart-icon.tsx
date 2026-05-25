'use client';

import {ShoppingCart} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";


interface CartIconProps {
    cartItemCount: number;
}

export function CartIcon({cartItemCount}: CartIconProps) {
    return (
        <Button variant="ghost" size="icon" asChild className="relative text-[#8f4f53] hover:bg-[#f7ebe7] hover:text-[#6f3f3f] dark:text-[#f1c8c9] dark:hover:bg-[#4a2a2f] dark:hover:text-[#fff1ef]">
            <Link href="/cart">
                <ShoppingCart className="h-5 w-5"/>
                {cartItemCount > 0 && (
                    <span
                        className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#9b5758] text-xs font-bold text-white dark:bg-[#f1c8c9] dark:text-[#2a171b]">
                        {cartItemCount}
                    </span>
                )}
                <span className="sr-only">Shopping Cart</span>
            </Link>
        </Button>
    );
}
