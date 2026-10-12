import Link from "next/link";
import React from "react";
import type { Project } from "../lib/site";

export default function ProjectCard({ project }: { project: Project }): React.ReactElement {
    return (
        <div className="flex flex-col justify-between rounded-xl border p-4 h-40">
            <div>
                <h3 className="font-semibold">{project.name}</h3>
                <p className="text-sm text-zinc-500">{project.summary}</p>
            </div>
            <Link href={`/projects/${project.id}`} className="text-blue-600">read more →</Link>
        </div>
    );
}
