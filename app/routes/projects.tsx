import type { ActionFunctionArgs } from '@remix-run/node';
import {useLoaderData} from "@remix-run/react";
import {createSupabaseServerClient} from "../supabase.server";

export const loader = async ({request}:ActionFunctionArgs) => {

    const { supabaseClient, headers } = createSupabaseServerClient(request)

    const data = await supabaseClient.from("users").select();

    return {data};
};

export default function Projects() {
    const data = useLoaderData();
    return <>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
        }