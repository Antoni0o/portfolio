import PostCard from "@/components/post-card";
import TechsCard from "@/components/techs-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import { TerminalSquare } from "lucide-react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

async function getPosts() {
  const posts = getAllPosts(["title", "date", "slug", "coverImage", "excerpt"]);

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <main className="container mt-4">
        <Card className="flex items-center lg:justify-between p-8 mb-6">
          <div className="flex flex-col items-center w-full lg:items-start lg:w-1/2">
            <div className="mb-28">
              <h1 className="text-5xl lg:text-7xl font-bold mb-2">Olá, mundo!</h1>
              <h2 className="text-xl font-medium text-zinc-400">Me chamo Antonio. Sou um desenvolvedor de software Full-Stack e entusiasta da tecnologia!</h2>
            </div>
            <div className="flex gap-4">
              <Button className="flex items-center gap-2"><FaGithub size={22} /> Github</Button>
              <Button variant="outline" className="flex items-center gap-2"><FaLinkedin size={22} />LinkedIn</Button>
            </div>
          </div>
          <div className="hidden md:flex lg:flex xl:flex">
            <TerminalSquare size={360} />
          </div>
        </Card>
        <TechsCard />
        <Card>
          <CardHeader>
            <CardTitle className="flex gap-2"><MdArticle /> Meu Blog:</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2">
            {posts.map((post, index) => {
              if (index < 4) {
                return (
                  <div key={index}>
                    <PostCard
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.date}
                      excerpt={post.excerpt}
                      slug={`/blog/${post.slug}`}
                    />
                  </div>
                );
              }
            })}
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex gap-2"><CgWebsite /> Meus Projetos:</CardTitle>
          </CardHeader>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle>Projetos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Em breve...</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </main >
    </>
  );
}
