import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-800 text-white p-4 fixed top-0 z-50">
            <div className="container mx-auto flex items-center justify-between padding-top ">
                <div className="text-lg font-bold">Inna Amogolonova</div>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/projects" className="hover:text-gray-400">Projects</Link>
                    <Link href="/blog" className="hover:text-gray-400">Thoughts</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </div>
            </div>
        </nav>
    ); 
}