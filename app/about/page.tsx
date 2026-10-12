import React from "react";

export default function About(): React.ReactElement {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-semibold">About Inna</h1>
            <section className="flex flex-col gap-8 sm:flex-row">
                <div className="h-40 w-40 shrink-0 rounded-[40%] bg-zinc-200">{/* picture */}</div>
                <p>About / story.</p>
            </section>
            <section className="flex flex-col gap-8 sm:flex-row">
                <p className="flex-1">Hobbies, etc.</p>
                <div className="h-32 w-32 shrink-0 rounded-[40%] bg-zinc-200">{/* picture */}</div>
            </section>
        </div>
    );
}
