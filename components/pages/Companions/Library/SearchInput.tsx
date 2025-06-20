'use client'

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
    const pathName = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';

    const [searchQuery, setsearchQuery] = useState('');

    useEffect(() => {
        const searchDelay = setTimeout(() => {

            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });

                router.push(newUrl, { scroll: false });
            } else {
                if (pathName === '/companions') {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["topic"],
                    });

                    router.push(newUrl, { scroll: false });
                }
            }
        }, 500);

        return () => {
            clearTimeout(searchDelay);
        };


    }, [searchQuery, router, searchParams, pathName])

    return (
        <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
            <Image
                src="/icons/search.svg"
                alt="search"
                width={20}
                height={20}
            />
            <input
                className="outline-none"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}
            />
        </div>
    )
}

export default SearchInput