import PostCard from "@/components/post-card";
import { getAllPosts } from "@/lib/blog";

async function getPosts() {
  const posts = getAllPosts(["title", "date", "slug", "coverImage", "excerpt"]);

  return posts;
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="container mt-4">
      <h1 className="text-2xl font-bold">Aqui é onde conto um pouco sobre minhas experiências!</h1>
      <h2 className="text-xl font-medium opacity-75 mb-4">Veja meus posts:</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {posts.map((post, index) => {
          return (
            <PostCard
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              excerpt={post.excerpt}
              slug={`/blog/${post.slug}`}
              key={index}
            />
          );
        })}
      </section>
    </main>
  )
}