import Pagetitle from "@/components/page_title";
import { client } from "@/sanity/lib/client";
import { promises } from "dns";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

interface BlogType {
  blogId: string;
  heading: string;
  content: any; // Adjust this based on your Sanity schema
  imageUrl?: string;
}
interface Ty {
  id: Promise<any>; // Use `string` instead of `String`
}

export default async function BlogPost({ params }: { params: Ty }) {
  const { id } = params;

  // Validate `id`
  if (!id) {
    notFound();
  }

  // Fetch data from Sanity
  const query = `*[_type == "blog" && blogId == $id][0]{
    blogId,
    heading,
    content,
    "imageUrl": image.asset->url
  }`;

  const fetchData: BlogType | null = await client.fetch(query, { id });

  // Handle no data scenario
  if (!fetchData) {
    notFound();
  }

  return (
    <div>
      <Pagetitle name="Blog Details" />
      <div className="p-5">
        <h1 className="title-font text-5xl text-center font-medium text-gray-900 mb-3">
          {fetchData.heading}
        </h1>
        <div className="flex items-center justify-center p-5">
          {fetchData.imageUrl && (
            <img
              src={fetchData.imageUrl}
              alt={fetchData.heading}
              className="w-[650px] flex items-center"
            />
          )}
        </div>
        <div className="leading-relaxed text-left text-gray-700 mb-3">
          <PortableText value={fetchData.content} />
        </div>
      </div>
    </div>
  );
}
