import type { ActionFunctionArgs } from '@remix-run/node';
import {useLoaderData} from "@remix-run/react";
import {createSupabaseServerClient} from "../supabase.server";
import Project from "~/components/project";

export const loader = async ({request}:ActionFunctionArgs) => {

    const { supabaseClient, headers } = createSupabaseServerClient(request)

    const data = await supabaseClient.from("projects").select();

    return {data};
};

export default function Projects() {
    const data = useLoaderData();

    const projects = [
        {id: 1, title: "Solarzellen für Housis Garage"},
        {id: 2, title: "Siriks Lifecoaching goes Vegan"},
        {id: 3, title: "Solarzellen für Housis Garage"},
        {id: 4, title: "Siriks Lifecoaching goes Vegan"},
        {id: 5, title: "Solarzellen für Housis Garage"},
        {id: 6, title: "Siriks Lifecoaching goes Vegan"},
        {id: 1, title: "Solarzellen für Housis Garage"},
        {id: 2, title: "Siriks Lifecoaching goes Vegan"},
        {id: 3, title: "Solarzellen für Housis Garage"},
        {id: 4, title: "Siriks Lifecoaching goes Vegan"},
        {id: 5, title: "Solarzellen für Housis Garage"},
        {id: 6, title: "Siriks Lifecoaching goes Vegan"},
    ];

    const projectElements = projects.map(project => <Project title={project.title} />)

    return <>
        <img className={"header-image"} src={"https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <section>
            <h1 className="text-3xl font-bold">
                Projects
            </h1>
            <div id={"project-overview-wrapper"}>
                {projectElements}

            </div>

        </section>

        <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
}