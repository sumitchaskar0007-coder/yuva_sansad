import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { blogAPI } from "../api";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    blogAPI
      .getAll()
      .then(({ data }) => {
        if (!active) return;
        setBlogs(Array.isArray(data) ? data : data?.blogs || data?.data || []);
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, []);

  const date = (value) =>
    value
      ? new Intl.DateTimeFormat("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(new Date(value))
      : "";

  return (
    <>
      <Helmet>
        <title>Blog | Jadhavar Yuva Sansad</title>
        <meta name="description" content="News, ideas, and updates from Jadhavar Yuva Sansad." />
      </Helmet>
      <section className="bg-gradient-to-r from-[#7b1d1d] to-red-700 px-4 py-16 text-white">
        <div className="container-wide">
          <h1 className="text-4xl font-bold md:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-red-100">News, ideas, and stories from the youth parliament movement.</p>
        </div>
      </section>
      <section className="container-wide px-4 py-16">
        {status === "loading" && <p className="text-center text-gray-600">Loading posts…</p>}
        {status === "error" && (
          <div className="rounded-lg bg-red-50 p-6 text-center text-red-700">
            Blog posts could not be loaded right now.
          </div>
        )}
        {status === "ready" && blogs.length === 0 && (
          <div className="rounded-lg bg-gray-50 p-10 text-center">
            <h2 className="text-xl font-semibold">No posts yet</h2>
            <p className="mt-2 text-gray-600">Please check back soon.</p>
          </div>
        )}
        {status === "ready" && blogs.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article key={blog._id || blog.id} className="overflow-hidden rounded-xl border bg-white shadow-sm">
                {blog.featuredImage && (
                  <img src={blog.featuredImage} alt="" className="h-52 w-full object-cover" />
                )}
                <div className="p-6">
                  <div className="text-sm font-semibold text-primary">{blog.category || "Updates"}</div>
                  <h2 className="mt-2 text-xl font-bold">{blog.title}</h2>
                  <p className="mt-3 line-clamp-3 text-gray-600">{blog.excerpt || "Read the full story."}</p>
                  <p className="mt-4 text-sm text-gray-500">{blog.author} {date(blog.createdAt)}</p>
                  <Link to={`/blog/${blog.slug || blog._id || blog.id}`} className="mt-5 inline-block font-semibold text-primary">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
