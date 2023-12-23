import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLoaderData, useRevalidator,
} from "@remix-run/react";
import {createBrowserClient} from "@supabase/ssr";
import {useEffect, useState} from "react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = () => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!
  };

  return { env };
};

export default function App() {

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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <button onClick={signUp}>Sing Up</button>
        <button onClick={signIn}>Sing In</button>
        <button onClick={signOut}>Sing Out</button>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
