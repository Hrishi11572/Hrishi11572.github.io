import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="colah-container mt-12 mb-12">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Posts</h2>
      
      <div className="flex flex-wrap gap-6">
        {allPostsData.map(({ slug, date, title, description, image }) => (
          <Link href={`/posts/${slug}`} key={slug} className="group block w-[230px] h-[300px] hover:no-underline text-inherit mb-6">
            <div className="border border-gray-200 p-2 h-full flex flex-col items-center bg-white hover:shadow-md transition-shadow duration-200 rounded-sm">
              <div className="w-full h-[180px] flex items-center justify-center overflow-hidden mb-3 bg-white">
                {image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={image} alt={title} className="max-w-full max-h-full object-contain p-2" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    No image
                  </div>
                )}
              </div>
              <h3 className="text-[17px] font-bold text-center leading-snug group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              {/* Note: Colah often hides dates or descriptions in the thumbnail grid, but we can keep date if we want, or omit it. Let's omit for clean look. */}
            </div>
          </Link>
        ))}
        {allPostsData.length === 0 && (
          <p className="text-gray-500">No posts found. Create a .md file in the /posts directory to get started.</p>
        )}
      </div>
    </div>
  );
}
