'use client';


import {useEffect, useState} from "react";
import Link from "next/link";
import {Play} from "lucide-react";

export default function Hero() {
    const [showLine, setShowLine] = useState(false);

    useEffect(() => {
        setShowLine(true);
    }, []);

    return (
        <section className="text-center mt-24">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
                Scheduling{' '}
                <span className={"text-blue-700 cool-underling " + (showLine ? 'show-underline' : '')}>
                    made simple
                </span>
                <br/>
                for people like you
            </h1>
            <p className="text-gray-600">
                Most scheduling apps are simple but ours is even more simple. <br/>
                On top of this, it&apos;s open source and you can see the code.
            </p>

            <div className="mt-4 flex justify-center items-center gap-4">
                <Link href={'/'} className="bg-black text-white py-2 px-4 rounded-full">
                    Get started for free
                </Link>
                <Link href={'/'} className="border border-gray-300 rounded-full py-2 px-4 inline-flex gap-1 items-center text-gray-600">
                    <Play size={16}/>
                    Watch video
                </Link>
            </div>
        </section>
    )
}