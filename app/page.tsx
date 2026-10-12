import Link from "next/link";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { emailAddress, links, projects } from "../lib/site";

export default function Home(): React.ReactElement {
    return (
        <div className="flex flex-col gap-16">
            <section className="flex flex-col gap-8 sm:flex-row">
                <div className="h-56 w-56 shrink-0 rounded-[40%] bg-zinc-200">{/* picture (blob shape) */}</div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold">Catchy headline</h1>
                    <p>Short intro (~3 sentences).</p>
                    <div className="flex items-center gap-4">
                        <a href={links.resume}>Resume</a>
                        <a href={links.github}>GitHub</a>
                        <a href={links.linkedin}>LinkedIn</a>
                        <a href={links.email} target="_blank" rel="noopener noreferrer" className="rounded-lg border px-4 py-1 text-blue-600">Contact</a>
                        <span className="text-zinc-500">{emailAddress}</span>
                    </div>
                </div>
            </section>

            <section>
                <div className="mb-4 flex items-baseline gap-4">
                    <h2 className="text-2xl font-semibold">Projects</h2>
                    <Link href="/projects" className="text-blue-600">see all →</Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                    {projects.slice(0, 3).map((p) => <ProjectCard key={p.id} project={p} />)}
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
                <p>Skills go here.</p>
            </section>
        </div>
    );
}
