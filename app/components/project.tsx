export default function Project({title}) {
    return <>
    <div className={"project-card"}>
        <img
            style={{width: "15em"}}
            src={"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} />
        <h2 className={"font-semibold text-gray-900"}>{title}</h2>
    </div></>
}