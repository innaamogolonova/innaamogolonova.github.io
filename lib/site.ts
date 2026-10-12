export const emailAddress = "iamogolonova@ucsd.edu";

export const links = {
    github: "https://github.com/innaamogolonova",
    linkedin: "#", // TODO: LinkedIn URL
    resume: "#", // TODO: Google Drive resume link
    email: `mailto:${emailAddress}`,
};

export const topics = ["all", "sw", "pm", "bio", "dev"] as const;

export type Project = {
    id: string;
    name: string;
    topic: (typeof topics)[number];
    summary: string;
};

export const projects: Project[] = [
    { id: "project-1", name: "Project 1", topic: "sw", summary: "Short description." },
    { id: "project-2", name: "Project 2", topic: "pm", summary: "Short description." },
    { id: "project-3", name: "Project 3", topic: "bio", summary: "Short description." },
];
