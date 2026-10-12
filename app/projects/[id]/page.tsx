import { notFound } from "next/navigation";
import React from "react";
import { projects } from "../../../lib/site";

export function generateStaticParams() {
    return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }): Promise<React.ReactElement> {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);
    if (!project) notFound();

    return (
        <div className="flex flex-col gap-8">
            <div className="h-64 w-full rounded-[40%] bg-zinc-200">{/* picture (blob) */}</div>
            <h1 className="text-3xl font-semibold">{project.name}</h1>
            <p>About, process, iterations, demo.</p>
        </div>
    );
}
