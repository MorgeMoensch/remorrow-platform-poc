import {LoaderFunctionArgs} from "@remix-run/router";
import {useLoaderData} from "@remix-run/react";

import mailIconUrl from "../../assets/mail-logo.png"

export async function loader({params,}: LoaderFunctionArgs) {
    return params.projectId;
}

export default function ProjectDetailsPage() {
    const project: string = useLoaderData();
    return <>
        <img className={"header-image-big"}
             src={"https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <section style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "100%", marginBottom: "2rem"}}>
            <h1 className="text-3xl font-bold" style={{marginBottom: "2rem", width: "100%"}}>Wildbienen-Hotels bauen</h1>
            <div style={{width: "60%"}} className={"remorrow-border"}>
                <h2 className="text-xl font-bold">Beschreibung</h2>
                <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie eros augue, non finibus odio
                    placerat et. Proin a volutpat dui. Nulla pellentesque leo non ultrices convallis. Cras erat lorem,
                    vehicula in nulla ac, semper aliquam sem. Phasellus eget erat in arcu euismod lacinia. Phasellus
                    porttitor accumsan nisl. Sed at justo ornare, dapibus magna non, feugiat purus. Nunc et ipsum id
                    enim
                    elementum pretium. Praesent feugiat, nunc quis venenatis fringilla, arcu dui efficitur metus, sit
                    amet
                    rhoncus est orci ac orci. Quisque dui libero, dignissim suscipit enim ac, eleifend finibus ipsum.
                    Sed
                    feugiat eget risus eu rutrum. Vivamus ac quam a justo ornare rhoncus at eget purus. Ut ut diam
                    dignissim, venenatis sapien eget, pharetra odio. Praesent tincidunt, erat ut tincidunt posuere, ex
                    elit
                    sodales elit, et congue leo leo ut eros. Etiam a fringilla nunc. Mauris scelerisque purus ut nibh
                    molestie malesuada.</p>
                <h2 className="text-xl font-bold" style={{marginTop: "2rem"}}>Eckdaten</h2>
                <ul>
                    <li><b>Wann: </b>7. September 2024</li>
                    <li><b>Wo: </b>Dorfstrasse 23, 1234 Hintertupfigen</li>
                    <li><b>Anforderungen: </b>Freude an der Natur</li>
                    <li><b>Entschädigung: </b>Keine</li>
                </ul>
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
                <div style={{marginTop: "0.5rem"}}><img src={mailIconUrl} alt={"Mail Icon Logo"} style={{width: "1.5rem", display: "inline", verticalAlign: "middle"}}/> Melissa kontaktieren</div>
            </div>

        </section>

    </>
}