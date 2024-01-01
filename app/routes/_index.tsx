import type { MetaFunction } from "@remix-run/node";
import {useLoaderData, useRevalidator} from "@remix-run/react";
import {useEffect, useState} from "react";
import {createBrowserClient} from "@supabase/ssr";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
    const env = {
        SUPABASE_URL: process.env.SUPABASE_URL!,
        SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!
    };

    return { env };
};

export default function Index() {

    const { env } = useLoaderData();
    const [supabase] = useState(() => createBrowserClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY));

    const signUp = () => {
        supabase.auth.signUp({
            email: "test@mtts.ch",
            password: "secure"
        });
    };

    const signIn = () => {
        supabase.auth.signInWithPassword({
            email: "test@mtts.ch",
            password: "secure"
        });
    };

    const signOut = () => {
        supabase.auth.signOut();
    };

    const revalidator = useRevalidator();
    useEffect(() => {
        const {data: {subscription}} = supabase.auth.onAuthStateChange(() => {
            // call loaders
            revalidator.revalidate();
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [supabase])
  return (
      <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
        <h1>Welcome to Remix</h1>
        <button onClick={signUp}>Sing Up</button>
        <button onClick={signIn}>Sing In</button>
        <button onClick={signOut}>Sing Out</button>
        <ul>
          <li>
            <a
                target="_blank"
                href="https://remix.run/tutorials/blog"
                rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
                target="_blank"
                href="https://remix.run/tutorials/jokes"
                rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
  );
}
