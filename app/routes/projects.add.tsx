import {Form, redirect, useOutletContext} from "@remix-run/react";
import {createServerClient, parse, serialize} from "@supabase/ssr";
import {createSupabaseServerClient} from "~/supabase.server";

export async function action({ request }) {
    const formData = await request.formData();
    const values = Object.fromEntries(formData);

    const { supabaseClient, headers } = createSupabaseServerClient(request)
    console.log("mooooohooooin")

    console.log(values)

    const { error, data } = await supabaseClient.from('projects').insert({
        title: values.title, description: values.description, support_needs: values.supportNeeds, facts: values.facts
    }).select()

    console.log(data)
    console.log(error)
    console.log(data)

    if(error === null && data !== null) {
        const createdProjectId = data[0].id;
        return redirect (`/projects/${createdProjectId}`)
    }

    return redirect ('/')
}
export default function Add() {
    return <>
        <div style={{width: "60vw", position: "absolute", left: "50%", transform: "translateX(-50%)", marginTop: "4em", marginBottom: "3em"}} className={"remorrow-border"}>
        <Form method="post">
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">Add new project</h1>
                    <p className="mt-1 text-sm leading-6 text-gray-600">You've decided to add your project to the re:morrow platform? Great! To proceeed, we need some more information about your project.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title
                                *</label>
                            <div className="mt-2">
                                <div
                                    className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="title" id="title"
                                           className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                           placeholder="Energiesparlampen für Siriks Lifecoaching"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="description"
                                   className="block text-sm font-medium leading-6 text-gray-900">Description *</label>
                            <div className="mt-2">
                                <textarea id="description" name="description" rows="3"
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Explain what your project is about and
                                your motivation behind it. How does it contribute to a better tomorrow?</p>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="supportNeeds"
                                   className="block text-sm font-medium leading-6 text-gray-900">Wo brauchst du Unterstützung? *</label>
                            <div className="mt-2">
                                <textarea id="supportNeeds" name="supportNeeds" rows="3"
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Wie können dir andere Leute oder Unternehmen helfen?</p>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="facts"
                                   className="block text-sm font-medium leading-6 text-gray-900">Eckdaten</label>
                            <div className="mt-2">
                                <textarea id="facts" name="facts" rows="3"
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Ort, Datum, Dauer, Entschädigung, ...</p>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover
                                photo</label>
                            <div
                                className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label htmlFor="file-upload"
                                               className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save
                    </button>
                </div>
            </div>

        </Form>
        </div>
    </>
}