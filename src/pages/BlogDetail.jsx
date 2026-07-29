import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogAPI } from "../api";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    blogAPI
      .getById(id)
      .then(({ data }) => {
        if (!active) return;
        setBlog(data?.blog || data?.data || data);
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, [id]);

  if (status === "loading") {
    return <div className="container-wide px-4 py-20 text-center">Loading post…</div>;
  }
  if (status === "error" || !blog) {
    return (
      <div className="container-wide px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Post unavailable</h1>
        <Link to="/blog" className="mt-6 inline-block font-semibold text-primary">← Back to blog</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Jadhavar Yuva Sansad</title>
        {blog.excerpt && <meta name="description" content={blog.excerpt} />}
      </Helmet>
      <article className="container-wide max-w-4xl px-4 py-16">
        <Link to="/blog" className="font-semibold text-primary">← Back to blog</Link>
        <header className="mt-8">
          <div className="text-sm font-semibold uppercase text-primary">{blog.category || "Updates"}</div>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">{blog.title}</h1>
          {blog.author && <p className="mt-4 text-gray-500">By {blog.author}</p>}
        </header>
        {blog.featuredImage && (
          <img src={blog.featuredImage} alt="" className="mt-10 max-h-[32rem] w-full rounded-xl object-cover" />
        )}
        <div className="prose prose-lg mt-10 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content || blog.excerpt || ""}</ReactMarkdown>
        </div>
      </article>
    </>
  );
}
