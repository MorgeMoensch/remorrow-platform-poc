import type { ActionFunctionArgs } from '@remix-run/node';
import {useLoaderData, Link, json} from "@remix-run/react";
import {createSupabaseServerClient} from "../supabase.server";
import ProjectOverviewCard from "~/components/ProjectOverviewCard";

export const loader = async ({request}:ActionFunctionArgs) => {

    const { supabaseClient, headers } = createSupabaseServerClient(request)

    const data = await supabaseClient.from("projects").select();

    return json(data.data);
};

export default function Projects() {
    const projects = useLoaderData();

    const projectElements = projects.map(project => <ProjectOverviewCard title={project.title} id={project.id}/>)

    return <>
        <img className={"header-image"} src={"https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <section>
            <div style={{maxWidth: "95vw"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h1 className="text-3xl font-bold" style={{marginBottom: "2rem"}}>
                        Projects
                    </h1>
                    <Link to="add" style={{height: "2.5rem"}} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add your project</Link>
                </div>
                <div id={"project-overview-wrapper"}>
                    {projectElements}

                </div>
            </div>
        </section>
    </>
}