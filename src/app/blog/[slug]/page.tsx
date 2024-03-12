import type { Metadata } from "next";
import markdownToHtml, { getPostBySlug } from "@/lib/blog";
import markdownStyles from "./post.module.css";
import Image from "next/image";

type PostPageParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PostPageParams): Promise<Metadata> {
  const postData = await getData(params.slug);

  return {
    title: postData.post.title,
    description: postData.post.excerpt,
    openGraph: {
      title: postData.post.title,
      authors: postData.post.author,
      description: postData.post.excerpt,
      siteName: 'The Antonio Times',
      images: [
        {
          url: postData.post.coverImage,
          width: 800,
          height: 800,
          alt: postData.post.title
        }
      ],
      locale: 'pt-BR'
    }
  };
}

async function getData(slug: string) {
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "content",
    "excerpt",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    post,
    content,
  };
}

export default async function Page({ params: { slug } }: PostPageParams) {
  const data = await getData(slug);
  const color = [
    "bg-red-400",
    "bg-teal-600",
    "bg-yellow-600",
    "bg-blue-400",
    "bg-purple-400",
    "bg-pink-500",
  ];

  return (
    <>
      <article>
        <div className={`${color[Math.floor(Math.random() * color.length)]}  text-background pt-20`}>
          <div className="px-3 pt-2">
            <h1 className="text-4xl font-extrabold ">{data.post.title}</h1>
            <h2 className="mb-2 text-lg font-normal">{data.post.excerpt}</h2>
            <h3 className="text-sm font-light italic">
              {data.post.date}
            </h3>
            <hr className="h-1 w-10 my-2 border-0" />
          </div>
        </div>
        <div className="container">
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </article>
    </>
  );
}