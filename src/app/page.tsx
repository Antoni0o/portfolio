import MainCard from "@/components/main-card";
import PostCard from "@/components/post-card";
import TechsCard from "@/components/techs-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import { CgWebsite } from "react-icons/cg";
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
        <MainCard />
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
        <Card className="my-6">
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
