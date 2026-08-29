import { getPostData, getSortedPostsData } from "../../../lib/posts";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { notFound } from "next/navigation";

// Generate static params for build time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params object in Next.js 15+
  const { slug } = await params;
  
  let postData;
  try {
    postData = getPostData(slug);
  } catch (e) {
    notFound();
  }

  return (
    <>
      {postData.color && (
        <style dangerouslySetInnerHTML={{ __html: `body { background-color: ${postData.color} !important; }` }} />
      )}
      <div className="colah-container mt-12 mb-20">
      <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
      <div className="text-gray-500 mb-8 pb-4 border-b border-gray-200">
        {postData.date}
      </div>
      
      <div className="markdown-content max-w-none text-gray-900 leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeHighlight]}
        >
          {postData.content}
        </ReactMarkdown>
      </div>
      </div>
    </>
  );
}
