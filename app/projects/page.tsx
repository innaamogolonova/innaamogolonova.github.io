import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { projects, topics } from "../../lib/site";

export default function Projects(): React.ReactElement {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-semibold">Projects</h1>
            {/* TODO: make topic filter functional */}
            <div className="flex gap-4">
                {topics.map((t) => <button key={t}>{t}</button>)}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
                {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
        </div>
    );
}
