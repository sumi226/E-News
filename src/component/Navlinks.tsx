
import React from "react";
import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  scrapable: boolean;
  topicId: number;
  url: string;
}

const Navlinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  const navs: Navs[] = data.data;

  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <div className="flex justify-center gap-5 mt-5 ">
      <Link href="/" className="hover:text-red-700">
        হোম
      </Link>

      {filteredNavs.map((n) => (
        <Link
          key={n.slug}
          href={`/category/${n.slug}`}
          className="hover:text-red-700"
        >
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;