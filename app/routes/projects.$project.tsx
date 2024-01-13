import {LoaderFunctionArgs} from "@remix-run/router";
import {useLoaderData} from "@remix-run/react";

export async function loader({params, }: LoaderFunctionArgs) {
    return params.project;
}

export default function ProjectDetailsPage() {
    const project:string = useLoaderData();
    return <>
        <h1>Project Title</h1>
        <p>This is the projects title: {project}</p>
    </>
}