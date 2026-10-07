
import Marquee from "@/component/Marquee";
import MainNews from "@/component/MainNews";
import NewsCard from "@/component/NewsCard";

interface IOtherSections {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const data = await res.json();

  const sections = data.data;

  const mainNews = sections[0].articles;

  const otherSections: IOtherSections[] = sections.slice(1);

  return (
    <div>
      <Marquee />

      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* News Section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="grid gap-5 mt-5">
            {otherSections.map((os) => (
              <div
                key={os.curationId}
                className="border-b-2 pb-1 border-red-700"
              >
                <h1 className="font-bold">{os.title}</h1>

                <div className="grid grid-cols-3 gap-5">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read Section */}
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
