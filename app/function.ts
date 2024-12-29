import { client } from "@/sanity/lib/client";

export async function getdata(query:any){
    const fetchdata = await client.fetch(query);
    return fetchdata;
}