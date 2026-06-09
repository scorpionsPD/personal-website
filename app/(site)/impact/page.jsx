import Image from "next/image";
import { createMetadata } from "../../../lib/seo";

const awards = [
  {
    year: "2025",
    title: "FORTUNA® Global Excellence Awards - Next-Gen Innovator of the Year",
    detail: "Technology | United Kingdom | Business Leaders | 2025 Global Edition.",
    image: "/images/awards/forttuna-award.JPG",
    video: "/videos/forttuna-award.mp4",
    videoPoster: "/videos/preview.png"
  },
  {
    year: "2026",
    title: "FORTUNA® Global Excellence Awards - AI Innovation Leader of the Year (Nominee)",
    detail: "Business Leaders Edition | United Kingdom | Technology Category | Nominated for AI Innovation Leader of the Year."
  },
  {
    year: "2023",
    title: "Indian Tech Society Award",
    detail: "Certificate of Recognition for outstanding contributions to the UK tech sector, recognised for exceptional talent, impactful innovation, and community leadership as an Indian technologist.",
    image: "/images/awards/indian-tech-society-award.jpeg"
  },
  {
    year: "2025",
    title: "Talsec Certified App Security Integrator",
    detail: "Recognised for successful integration of the Talsec Runtime Application Self-Protection (RASP) SDK. Certified on April 8, 2025.",
    image: "/images/certifications/talsec-casi-certificate.jpeg"
  }
];

const professionalImpact = [
  {
    year: "2024",
    title: "NASSCOM Mentor for Emerging Startups",
    detail:
      "Selected as technical mentor supporting early-stage technology startups through NASSCOM's mentorship program."
  },
  {
    year: "2026",
    title: "Digital Trustee (Volunteer), TravelHands",
    detail:
      "Serving as a Digital Trustee for TravelHands and supporting the development of an AI-based booking journey system to improve accessibility, trust, and operational usability.",
    link: "https://www.linkedin.com/posts/pradeepkumar2411_im-pleased-to-share-that-ive-joinedtravel-activity-7432787531403784194-8dfg/",
    linkLabel: "View LinkedIn post"
  },
  {
    year: "2025",
    title: "Identified by CISL & BSI Sustainability Accelerator",
    detail:
      "Invited by the University of Cambridge Institute for Sustainability Leadership & BSI accelerator to apply based on relevance of platform architecture work in transparency and data-integrity systems."
  },
  {
    year: "2025",
    title: "PNB MetLife Knowledge Exchange",
    detail:
      "Talk: How Teams Actually Use AI & Digital Workspaces — shared practical adoption patterns, operational constraints, and what makes AI useful inside real enterprise workflows.",
    image: "/images/speaking/pnb-metlife.jpg"
  },
  {
    year: "2025",
    title: "University Guest Lecture",
    detail:
      "Practical Use of AI: What Works, What Doesn't — an experience-led perspective on real-world AI beyond hype.",
    image: "/images/speaking/university-lecture.jpg",
    link: "https://shivommbacollege.in/guest-lecture/",
    linkLabel: "Read more"
  },
  {
    year: "2026",
    title: "Published Article: Rethinking Responsible Innovation in the Age of AI",
    detail:
      "Published by The Tech Founders on building technology people can trust. Covers transparency, privacy-by-design, sustainability, and human-centered AI principles for startup founders.",
    link: "https://thetechfounders.co.uk/growth/rethinking-responsible-innovation-in-the-age-of-ai/",
    linkLabel: "Read article"
  },
  {
    year: "2026",
    title: "DZone: SaaS AI Risks and Losing Control of Data",
    detail:
      "Public article on how AI-enabled SaaS can weaken governance, increase data risk, and erode operational control when organisations rely on systems they do not fully own.",
    link: "https://dzone.com/articles/saas-ai-risks-losing-control-data",
    linkLabel: "Read article"
  }
];

const ecosystemContribution = [
  professionalImpact[0],
  professionalImpact[1],
  professionalImpact[2]
];

const publicContribution = [
  professionalImpact[3],
  professionalImpact[4],
  professionalImpact[5],
  professionalImpact[6]
];

const advisoryRelationships = [
  {
    name: "Dheeraj Rathee",
    role: "Head of AI Strategy at Sensiwise AI and Chief Technology Officer at Provide Digital",
    detail:
      "Provides ongoing mentorship and strategic guidance on responsible AI, governance-first product design, and regulated-environment deployment.",
    link: "https://www.linkedin.com/in/dheerajrathee/",
    linkLabel: "View profile"
  }
];

const builtAndShipped = [
  {
    year: "2025",
    title: "AppDeploy: Internal application distribution without MDM dependency or private hosting",
    detail:
      "Led and developed AppDeploy through ScotiTech as a novel approach to enterprise app distribution without device enrollment, solving deployment friction in regulated environments. Shipped with paid pilots proving market demand.",
    link: "https://appdeploy.scotitech.com",
    linkLabel: "Visit AppDeploy"
  },
  {
    year: "2025",
    title: "AXOS: Private AI workspace architecture",
    detail:
      "Led and developed AXOS through ScotiTech as a private AI workspace architecture for controlled environments, solving the deployment constraint for regulated organizations where external AI processing is unacceptable."
  },
  {
    year: "2023",
    title: "ElderConnect+: Shared coordination layer for independent living",
    detail:
      "Built a community-focused coordination layer for everyday support where family, neighbours, and helpers can manage small requests through clear, predictable interactions. Deployed with real users.",
    link: "https://www.elderconnect.co.uk/welcome",
    linkLabel: "Visit ElderConnect+"
  },
  {
    year: "2025",
    title: "Knowledge Platform (Open Source)",
    detail:
      "Built and open-sourced enterprise-grade knowledge management system with advanced RBAC, OAuth2 integration, and comprehensive security features. Full-stack TypeScript implementation demonstrating production-ready architecture patterns.",
    link: "https://github.com/scorpionsPD/knowledge-platform",
    linkLabel: "View repository"
  },
  {
    year: "2019",
    title: "SwiftUIArchitecture",
    detail:
      "Published a real-world SwiftUI architecture reference implementation, showcasing modern patterns for state management, modular design, and maintainable UI composition.",
    link: "https://github.com/scorpionsPD/SwiftUIArchitechture",
    linkLabel: "View repository"
  },
  {
    year: "14+ years",
    title: "Production systems architecture and platform innovation",
    detail:
      "Built production systems across mobile, backend, and distributed infrastructure with a focus on reliability, data sovereignty, and maintainable ownership. Led architecture decisions for long-term scalability, compliance constraints, and real-world operational uptime."
  }
];

const mediaContent = [
  {
    year: "2026",
    type: "Interview",
    title: "From India to Scotland: Building a Startup",
    videoId: "0IMLuoXFYK8",
    isShort: false,
    detail:
      "Deep dive into entrepreneurship, building in Scotland, and navigating challenges when traditional models don't work. Real founder experience on building products outside the mainstream ecosystem.",
    tags: ["Entrepreneurship", "Startup", "Product"]
  }
];

const mediaShorts = [
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
    type: "YouTube Short",
    title: "Show 300% ROI and Any Client Says Yes",
    videoId: "aubJ1IkU6cg",
    isShort: true,
    detail:
      "How do you convince the first serious customer to trust a brand-new startup? Learn the ROI formula that works for both enterprise and SaaS clients. When you can demonstrate 300-400% return on investment, any organization will listen — whether they care about scale or budget.",
    tags: ["StartupSales", "EnterpriseClients", "FounderAdvice", "ROI"]
  },
  {
    year: "2026",
    type: "YouTube Short",
    title: "Do Bootstrap Founders Actually Pay Themselves?",
    videoId: "7wJlxR0fA3I",
    isShort: true,
    detail:
      "As a bootstrap founder in the UK, do you actually pay yourself a salary — or does everything go back into the company? Learn the reality: when you're a full-time contributor, you get paid. Bootstrap operations run lean with core team plus part-time contractors. An honest look at what bootstrapping actually looks like.",
    tags: ["BootstrapFounder", "StartupReality", "FounderSalary", "UKStartup"]
  },
  {
    year: "2026",
    type: "YouTube Short",
    title: "Don't Skip These 3 Checks Before Starting a Startup",
    videoId: "88qtkP0--M4",
    isShort: true,
    detail:
      "What first-time founders miss: market gap validation, paying users, and financial readiness. These 3 essential checks separate ideas that work from ideas that fail. Get clear on these before you launch.",
    tags: ["Startup", "FounderTips", "Entrepreneurship", "StartupIndia"]
  },
  {
    year: "2026",
    type: "YouTube Short",
    title: "Using AI at Work? Don't Paste Sensitive Data",
    videoId: "twCFAmnDiSQ",
    isShort: true,
    detail:
      "What employees should never share in public AI tools: code, client docs, pitches, and financial plans. Protect your organization's sensitive information. AI is powerful, but data privacy requires discipline.",
    tags: ["ChatGPT", "AISafety", "DataPrivacy", "DeveloperTips"]
  }
];

const evidenceAtGlance = [
  {
    metric: "2",
    title: "International awards and nominations",
    detail: "Recognition from Forttuna Global Excellence Awards and Indian Tech Society for innovation and technology contribution."
  },
  {
    metric: "14+ years",
    title: "Professional software development",
    detail: "Experience spanning mobile development, backend systems, and platform architecture across enterprise and startup environments."
  },
  {
    metric: "Multiple",
    title: "Production platforms deployed",
    detail: "Built and shipped operational systems including AppDeploy, AXOS, and ElderConnect+ serving real organizations."
  },
  {
    metric: "Founder",
    title: "ScotiTech",
    detail: "Built and led products spanning AI governance, internal app distribution, and community-focused digital infrastructure."
  },
  {
    metric: "Mentor",
    title: "NASSCOM program",
    detail: "Selected to support early-stage technology startups through technical mentorship."
  },
  {
    metric: "Digital Trustee",
    title: "Third sector and advisory work",
    detail: "Digital Trustee and advisory work across mission-led organisations and community-focused technology initiatives."
  },
  {
    metric: "Certified",
    title: "App Security Integrator",
    detail: "Talsec certification recognising practical mobile app security integration with RASP tooling."
  }
];

const openSourceSignals = [
  {
    title: "Knowledge Platform",
    detail:
      "Enterprise-grade knowledge management system with deep technical documentation and deployment guides.",
    link: "https://github.com/scorpionsPD/knowledge-platform",
    linkLabel: "View repository"
  }
];

const testimonials = [
  {
    quote:
      "Working alongside Pradeep has been nothing short of inspiring. His technical acumen as an iOS developer, coupled with his strategic vision as the founder of ScotiTech, sets him apart as an industry leader and an innovator. Pradeep's dedication to delivering top-notch solutions is evident in every project he undertakes, be it through his proficiency in Swift, SwiftUI, and Objective-C, or his advocacy for solid software principles. Beyond his technical capabilities, Pradeep is a natural leader and a highly collaborative team player. In the time I've had the pleasure of working with him at BUSINESSNEXT, I've witnessed firsthand his willingness to listen, mentor, and drive forward-thinking initiatives that create tangible value. Pradeep's resilience, combined with his innovative spirit, makes him an invaluable asset to any team and an inspiration to all who have the opportunity to work with him.",
    author: "Nitin Garg",
    context: "Enterprise Integration Tech Manager at Agdata"
  },
  {
    quote:
      "I've had the pleasure of collaborating closely with Pradeep at BusinessNext, where he consistently demonstrates technical excellence and a relentless commitment to quality. His expertise in iOS development, including mastery of Swift and Objective-C, has been crucial in advancing our mobile application projects. Pradeep approaches every challenge with a solution-focused mindset, ensuring that our projects are not only delivered on time but also optimized for the best user experience. One of Pradeep's standout qualities is his adaptability within our agile environment. Whether it's streamlining app features or integrating complex functionalities, he brings a level of precision and innovation that has greatly enhanced our product capabilities. His collaborative nature and dedication make him a key asset to our team at BusinessNext. I am confident that Pradeep will continue to make a profound impact in any role he takes on, and it's been a privilege to work alongside him.",
    author: "Naveen Kumar",
    context: "Technical Manager @ BUSINESSNEXT | MTech in Data Science & Engineering"
  },
  {
    quote:
      "I had the pleasure of working closely with Pradeep Dahiya at CRMNext, where he served as an iOS Lead. Pradeep is a highly skilled iOS developer with a strong understanding of Swift, app architecture, performance optimization, and product-level development. What truly sets him apart is not just his technical expertise, but his calm, supportive, and professional nature. He leads by example, mentors team members effectively, and always approaches challenges with a problem-solving mindset. His ability to collaborate with cross-functional teams and deliver high-quality features on time makes him a valuable asset to any product-based organization.",
    author: "Aashish Tyagi",
    context: "Mobile Tech Enthusiast | 9+ Years in iOS Development | Expert in Swift, Objective-C, AI & ML, and Agile Practices"
  }
];

export const metadata = createMetadata({
  title: "Impact | Pradeep Dahiya",
  description:
    "Awards, recognition, mentoring, and shipped platforms from a technology architect and founder.",
  path: "/impact"
});

function Timeline({ items }) {
  return (
    <div className="flex flex-col gap-10 border-l border-neutral-200 pl-6">
      {items.map((item) => (
        <div key={item.title} className="relative">
          <span className="absolute -left-[34px] mt-1 h-3 w-3 rounded-full border border-neutral-900 bg-white" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            {item.year}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-neutral-900">{item.title}</h3>
          <p className="mt-2 text-sm text-neutral-600">{item.detail}</p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-accent hover:underline"
            >
              {item.linkLabel} →
            </a>
          )}
          {item.video && (
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200">
              <video
                src={item.video}
                controls
                className="h-auto w-full"
                preload="metadata"
                poster={item.videoPoster}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {item.image && (
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="h-auto w-full object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function EvidenceCards({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            {item.year}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-neutral-900">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-neutral-600">{item.detail}</p>
          {item.video && (
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200">
              <video
                src={item.video}
                controls
                className="h-48 w-full bg-neutral-50 object-contain"
                preload="metadata"
                poster={item.videoPoster}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {item.image && (
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={240}
                className="h-48 w-full bg-neutral-50 object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MediaCard({ item }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 text-neutral-700">
          {item.type}
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          {item.year}
        </p>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-neutral-900">{item.title}</h3>
      
      <div className="mt-4">
        {item.isShort ? (
          <div className="overflow-hidden rounded-lg border border-neutral-200">
            <iframe
              width="100%"
              height="350"
              src={`https://www.youtube.com/embed/${item.videoId}`}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="bg-neutral-50"
            />
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-neutral-200">
            <iframe
              width="100%"
              height="350"
              src={`https://www.youtube.com/embed/${item.videoId}`}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="bg-neutral-50"
            />
          </div>
        )}
      </div>

      <p className="mt-4 text-sm leading-6 text-neutral-600">{item.detail}</p>
      
      {item.tags && item.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
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

export default function ImpactPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Impact
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Recognition earned through operational deployment.
        </h1>
        <p className="text-base leading-7 text-neutral-600 md:text-lg">
          Recognition, mentorship, and shipped systems grounded in responsible AI, operational reliability, and governance-first architecture.
        </p>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Evidence At A Glance
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            External validation, leadership, and real-world delivery.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {evidenceAtGlance.map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-semibold text-accent">{item.metric}</p>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Mentorship & Advisory Relationships
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Trusted guidance around responsible AI and product direction.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {advisoryRelationships.map((item) => (
            <div key={item.name} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900">{item.name}</h3>
              <p className="mt-2 text-sm font-semibold text-accent">{item.role}</p>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{item.detail}</p>
              <a
                href={item.link}
                className="mt-4 inline-flex text-sm font-semibold text-accent"
                target="_blank"
                rel="noreferrer"
              >
                {item.linkLabel} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Recognition
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Awards and external recognition.
          </h2>
        </div>
        <EvidenceCards items={awards} />
      </section>

      <section className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Leadership & Ecosystem Contribution
          </p>
          <Timeline items={ecosystemContribution} />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Public Writing & Speaking
          </p>
          <Timeline items={publicContribution} />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Products Shipped
          </p>
          <Timeline items={builtAndShipped} />
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Featured Interview
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            In-depth conversations on entrepreneurship and building.
          </h2>
        </div>
        <div className="max-w-3xl">
          {mediaContent.map((item) => (
            <div key={`${item.year}-${item.videoId}`} className="rounded-2xl border border-neutral-200 bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold">
                  {item.type}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  {item.year}
                </p>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900">{item.title}</h3>
              
              <div className="mt-6">
                <div className="overflow-hidden rounded-lg border border-neutral-200">
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="bg-neutral-50"
                  />
                </div>
              </div>

              <p className="mt-6 text-base leading-7 text-neutral-600">{item.detail}</p>
              
              {item.tags && item.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-neutral-100 text-neutral-600 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Quick Insights
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Founder tips, startup strategy, and quick lessons.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {mediaShorts.map((item) => (
            <MediaCard key={`${item.year}-${item.videoId}`} item={item} />
          ))}
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Open Source & Technical Contribution
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Technical depth beyond commercial work.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {openSourceSignals.map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="mt-2 text-lg font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.detail}</p>
              <a
                href={item.link}
                className="mt-4 inline-flex text-sm font-semibold text-accent"
                target="_blank"
                rel="noreferrer"
              >
                {item.linkLabel} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Third-Party Validation
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            What peers and collaborators have said.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <p className="text-sm leading-7 text-neutral-700 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-neutral-200 pt-4">
                <p className="text-xs font-semibold text-neutral-900">{item.author}</p>
                <p className="mt-1 text-xs text-neutral-500">{item.context}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
