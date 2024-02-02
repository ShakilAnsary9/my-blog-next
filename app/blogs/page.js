import Link from "next/link";
import { posts } from "../data/posts";

const BlogPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 dark:text-slate-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {posts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
