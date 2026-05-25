'use client';

import {useState, useEffect, useTransition} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {Search} from 'lucide-react';
import {Input} from '@/components/ui/input';

export function SearchInput() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');

    useEffect(() => {
        setSearchValue(searchParams.get('q') || '');
    }, [searchParams]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchValue.trim()) return;
        router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
    };

    return (
        <form onSubmit={handleSubmit} className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9b8177] dark:text-[#e7b9ba]"/>
            <Input
                type="search"
                placeholder="Search handmade pieces..."
                className="w-64 border-[#e5c9c1] bg-white/80 pl-9 text-[#6f3f3f] placeholder:text-[#9b8177] focus-visible:ring-[#c98f92] dark:border-[#6b3d42] dark:bg-[#3a2025] dark:text-[#fff1ef] dark:placeholder:text-[#d8b4aa] dark:focus-visible:ring-[#e7b9ba]"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                disabled={isPending}
            />
        </form>
    );
}
