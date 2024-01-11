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

import Navbar from "./components/Navbar";
import tailwindStylesheet from "./tailwind.css";
import stylesheet from "./styles.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheet},
  { rel: "stylesheet", href: stylesheet},
];



export default function App() {
  return (
    <html lang="en" className="h-full bg-white">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">

        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
