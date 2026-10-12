import Link from "next/link";
import React from "react";
import { links } from "../../lib/site";

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-800 text-white p-4 fixed top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-lg font-bold">IA</Link>
                <div className="space-x-4">
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/projects" className="hover:text-gray-400">Projects</Link>
                    <Link href="/thoughts" className="hover:text-gray-400">Thoughts</Link>
                    <a href={links.resume} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Resume</a>
                    <a href={links.email} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Contact</a>
                </div>
            </div>
        </nav>
    );
}
