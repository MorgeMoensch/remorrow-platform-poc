import {LoaderFunctionArgs} from "@remix-run/router";
import {json, useLoaderData} from "@remix-run/react";

import mailIconUrl from "../../assets/mail-logo.png"
import {createSupabaseServerClient} from "~/supabase.server";
import type {ActionFunctionArgs} from "@remix-run/node";

export const loader = async ({params, request}) => {

    const { supabaseClient, headers } = createSupabaseServerClient(request)

    const postgresResponse = await supabaseClient.from("projects").select().eq("id", params.projectId);
    console.log(postgresResponse);

    const project = postgresResponse.data[0]

    return json({
        id: project.id,
        title: project.title,
        description: project.description,
        supportNeeds: project.support_needs,
        facts: project.facts
    });

    //return params.projectId;
}

export default function ProjectDetailsPage() {
    const project = useLoaderData<typeof loader>();

    return <>
        <img className={"header-image-big"}
             src={"https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <section style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            maxWidth: "100%",
            marginBottom: "2rem"
        }}>
            <h1 className="text-3xl font-bold" style={{marginBottom: "2rem", width: "100%"}}>{project.title}</h1>
            <div style={{width: "60%"}} className={"remorrow-border"}>
                <h2 className="text-xl font-bold">Beschreibung</h2>
                <p>{project.description}</p>
                <h2 className="text-xl font-bold" style={{marginTop: "2rem"}}>Unterstützungsbedarf</h2>
                <p>{project.supportNeeds}</p>
                <h2 className="text-xl font-bold" style={{marginTop: "2rem"}}>Eckdaten</h2>
                <p>{project.facts}</p>
            </div>
            <div className={"remorrow-border"} style={{width: "30%"}}>
                <h2 className="text-xl font-bold">Autor</h2>
                <img style={{
                    borderRadius: "50%",
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    marginLeft: "50%",
                    transform: "translateX(-50%)",
                    marginBottom: "2rem"
                }}
                     src={"https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                <p><b>Melissa Hunziker</b></p>
                <p>Gründerin Öko-GmbH</p>
                <div style={{marginTop: "0.5rem"}}><img src={mailIconUrl} alt={"Mail Icon Logo"} style={{
                    width: "1.5rem",
                    display: "inline",
                    verticalAlign: "middle"
                }}/> Melissa kontaktieren
                </div>
            </div>

        </section>
    </>
}