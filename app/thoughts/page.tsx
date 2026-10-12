import React from "react";

const posts = [
    { date: "2026-01-01", title: "Post title" },
];

export default function Thoughts(): React.ReactElement {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-semibold">Some Thoughts</h1>
            <ul className="flex flex-col gap-3">
                {posts.map((post) => (
                    <li key={post.title} className="flex gap-8 rounded-full border px-6 py-2">
                        <span className="text-zinc-500">{post.date}</span>
                        <span>{post.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
