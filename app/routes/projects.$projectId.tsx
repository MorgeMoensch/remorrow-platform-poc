import {LoaderFunctionArgs} from "@remix-run/router";
import {useLoaderData} from "@remix-run/react";

export async function loader({params,}: LoaderFunctionArgs) {
    return params.projectId;
}

export default function ProjectDetailsPage() {
    const project: string = useLoaderData();
    return <>
        <img className={"header-image-big"}
             src={"https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <section style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "100%", marginBottom: "2rem"}}>
            <h1 className="text-3xl font-bold" style={{marginBottom: "2rem", width: "100%"}}>Project Title</h1>
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
                <p>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum molestie ex felis, ornare
                    faucibus dui congue non. Maecenas posuere ante ac imperdiet porttitor. Quisque interdum finibus ex,
                    in
                    convallis diam malesuada quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                    per
                    inceptos himenaeos. Praesent enim leo, sodales vel tincidunt et, suscipit sed est. Sed consectetur
                    erat
                    in dignissim eleifend. Nullam ultrices, erat a tristique accumsan, lorem orci suscipit tortor, a
                    tincidunt turpis nibh nec lacus. Fusce ac risus erat. Sed porttitor ligula diam, quis auctor ex
                    semper
                    in.
                </p>
                <p>
                    Phasellus eu nibh eu nisl auctor eleifend. Nulla metus mauris, tincidunt nec neque quis, lobortis
                    fringilla risus. Praesent tempus erat non odio malesuada, quis semper ante lobortis. In faucibus ac
                    ligula eget mattis. Curabitur vel dui nec risus malesuada suscipit in id libero. Vivamus mattis,
                    nunc et
                    consequat luctus, dui leo tristique justo, eu sodales metus quam nec metus. Nunc sit amet sem
                    sapien.
                    Nullam vel mi venenatis, rhoncus erat nec, pharetra mauris. Vivamus condimentum nibh at auctor
                    dignissim. Pellentesque maximus porttitor elit, mollis ultricies risus. Sed arcu lorem, hendrerit ut
                    dolor ut, rhoncus imperdiet metus. Fusce eget accumsan neque, et sagittis ante. Duis vehicula metus
                    sed
                    nisi ornare, vel convallis dolor tincidunt. Vivamus sapien dolor, imperdiet ut semper dapibus,
                    mollis
                    elementum enim. Proin ultricies ultricies lectus non interdum. </p>
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
                <p>Melissa Hunziker</p>
                <p>Gründerin Öko-GmbH</p>
            </div>

        </section>

    </>
}