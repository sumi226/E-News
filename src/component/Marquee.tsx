
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import React from "react";

const Marquee = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/?limit=10"
  );

  const data = await res.json();
  const headlines = data.data;

  return (
    <div className="bg-red-700 text-white font-bold overflow-hidden">
      <div className="flex max-w-7xl mx-auto items-center">

        {/* Fixed Title */}
        <div className="bg-red-900 px-5 py-2 whitespace-nowrap shrink-0">
          সর্বশেষ সংবাদ
        </div>

        {/* Only News Scrolls */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <MarqueeText
            className="py-2"
            direction="right"
            duration={10}
          >
            {headlines.map((h) => (
              <span key={h.id}>
                <span>{h.title}</span>
                <span className="mx-5">•</span>
              </span>
            ))}
          </MarqueeText>
        </div>

      </div>
    </div>
  );
};

export default Marquee;
