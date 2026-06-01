const conferences = [
  {
    year: "2025",
    title: "Cambridge Institute for Sustainability Leadership",
    venue: "Cambridge CISL Contributor",
    detail:
      "Invited contributor to discussions on technology's role in sustainable development. Published article on responsible platform design."
  },
  {
    year: "2025",
    title: "University Guest Lecture",
    venue: "Technical University",
    detail:
      "Practical Use of AI: What Works, What Doesn't — an experience-led perspective on real-world AI beyond hype.",
    link: "https://shivommbacollege.in/guest-lecture/"
  }
];

const publications = [
  {
    year: "2026",
    title: "SaaS AI Risks and Losing Control of Data",
    publication: "DZone",
    detail:
      "Article on how AI-enabled SaaS can reduce governance clarity, increase data exposure, and shift operational control away from the organisations that depend on it.",
    link: "https://dzone.com/articles/saas-ai-risks-losing-control-data"
  },
  {
    year: "2024–2026",
    title: "Technical Blog on Operational Platforms",
    publication: "Personal blog",
    detail:
      "Series of articles on MDM-free distribution, self-hosted infrastructure, and operational platform design.",
    link: "/blog"
  }
];

const workshops = [
  {
    year: "2024",
    title: "NASSCOM Startup Mentorship",
    detail:
      "Ongoing mentorship of emerging technology startups on platform architecture, technical strategy, and operational design."
  },
  {
    year: "2025",
    title: "PNB MetLife Knowledge Exchange",
    detail:
      "Talk: How Teams Actually Use AI & Digital Workspaces — shared practical adoption patterns, operational constraints, and what makes AI useful inside real enterprise workflows."
  }
];

const media = [
  {
    year: "2026",
    type: "YouTube Short",
    title: "Enterprise vs SaaS Buyers: The Real Difference",
    videoId: "wHEX6pGu27c",
    isShort: true,
    detail:
      "Enterprise organizations prioritize security above all, while smaller SaaS customers want pricing and simplicity. If you're building a B2B product, this insight changes how you pitch.",
    tags: ["EnterpriseSales", "B2BSaaS", "ProductStrategy"]
  },
  {
    year: "2026",
    type: "Interview",
    title: "Apple Rejected His App, So He Built a Startup in Scotland",
    videoId: "0IMLuoXFYK8",
    isShort: false,
    detail:
      "A deep dive into entrepreneurship, building in Scotland, and navigating challenges when traditional app store models don't work. Real founder experience on building products outside the mainstream ecosystem.",
    tags: ["Entrepreneurship", "Startup", "Product"]
  },
  // TODO: Add remaining 3 shorts/interviews here
];

export const metadata = {
  title: "Speaking & Publications | Pradeep Dahiya",
  description:
    "Conference presentations, technical publications, workshops, and media appearances from a technology architect and thought leader.",
  openGraph: {
    title: "Speaking & Publications | Pradeep Dahiya",
    description:
      "Conference presentations, technical publications, workshops, and media appearances from a technology architect and thought leader.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking & Publications | Pradeep Dahiya",
    description:
      "Conference presentations, technical publications, workshops, and media appearances from a technology architect and thought leader."
  }
};

function TimelineItem({ item }) {
  return (
    <div className="relative">
      <span className="absolute -left-[34px] mt-1 h-3 w-3 rounded-full border border-neutral-900 bg-white" />
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
        {item.year}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-neutral-900">{item.title}</h3>
      {item.venue && (
        <p className="mt-1 text-sm font-medium text-accent">{item.venue}</p>
      )}
      {item.publication && (
        <p className="mt-1 text-sm font-medium text-accent">{item.publication}</p>
      )}
      {item.outlet && (
        <p className="mt-1 text-sm font-medium text-accent">{item.outlet}</p>
      )}
      <p className="mt-2 text-sm text-neutral-600">{item.detail}</p>
      {item.link && (
        <a 
          href={item.link}
          className="mt-2 inline-block text-sm font-semibold text-accent hover:underline"
        >
          Read more →
        </a>
      )}
    </div>
  );
}

function MediaItem({ item }) {
  return (
    <div className="relative">
      <span className="absolute -left-[34px] mt-1 h-3 w-3 rounded-full border border-neutral-900 bg-white" />
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
        {item.year}
      </p>
      <span className="inline-block mt-1 text-xs font-medium px-2 py-1 rounded-full bg-neutral-100 text-neutral-700">
        {item.type}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-neutral-900">{item.title}</h3>
      
      <div className="mt-4">
        {item.isShort ? (
          <div className="w-full max-w-xs">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${item.videoId}`}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        ) : (
          <div className="w-full max-w-2xl">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${item.videoId}`}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        )}
      </div>

      <p className="mt-3 text-sm text-neutral-600">{item.detail}</p>
      
      {item.tags && item.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SpeakingPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Speaking & Publications
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Contributing through mentorship, education, and knowledge sharing.
        </h1>
        <p className="text-base leading-7 text-neutral-600 md:text-lg">
          Supporting the technology community through NASSCOM mentorship, university lectures,
          and contributions to industry discussions.
        </p>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Conference Speaking
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Academic and industry contributions.
          </h2>
        </div>
        <div className="flex flex-col gap-10 border-l border-neutral-200 pl-6">
          {conferences.map((item) => (
            <TimelineItem key={`${item.year}-${item.title}`} item={item} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Technical Publications
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Written contributions advancing architectural practice.
          </h2>
        </div>
        <div className="flex flex-col gap-10 border-l border-neutral-200 pl-6">
          {publications.map((item) => (
            <TimelineItem key={`${item.year}-${item.title}`} item={item} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Mentorship & Knowledge Exchange
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Mentorship and knowledge exchange programs.
          </h2>
        </div>
        <div className="flex flex-col gap-10 border-l border-neutral-200 pl-6">
          {workshops.map((item) => (
            <TimelineItem key={`${item.year}-${item.title}`} item={item} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Media & Video Content
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Insights on startups, product strategy, and enterprise architecture.
          </h2>
        </div>
        <div className="flex flex-col gap-12 border-l border-neutral-200 pl-6">
          {media.map((item) => (
            <MediaItem key={`${item.year}-${item.videoId}`} item={item} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-10">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Collaboration Opportunities
          </p>
          <h2 className="font-display text-2xl text-neutral-950">
            Open to speaking, mentoring, and knowledge-sharing opportunities.
          </h2>
          <p className="text-sm leading-7 text-neutral-600">
            Available for technical lectures, mentorship programs, and discussions on
            operational platform architecture, MDM-free distribution, and self-hosted systems.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
