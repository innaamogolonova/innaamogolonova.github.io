import React from "react";
import { emailAddress, links } from "../../lib/site";

export default function Footer(): React.ReactElement {
    return (
        <footer className="w-full border-t p-4">
            <div className="container mx-auto flex justify-center space-x-4">
                <a href={links.github} className="hover:text-gray-400">GitHub</a>
                <a href={links.linkedin} className="hover:text-gray-400">LinkedIn</a>
                <a href={links.email} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Contact</a>
                <span className="text-zinc-500">{emailAddress}</span>
            </div>
        </footer>
    );
}
