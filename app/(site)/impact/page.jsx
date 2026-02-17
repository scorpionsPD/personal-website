import Image from "next/image";

const awards = [
  {
    year: "2025",
    title: "FORTUNA® Global Excellence Awards - Next-Gen Innovator of the Year",
    detail: "Technology | United Kingdom | Business Leaders | 2025 Global Edition.",
    image: "/images/awards/forttuna-award.jpg",
    video: "/videos/forttuna-award.mp4",
    videoPoster: "/videos/preview.png"
  },
  {
    year: "2023",
    title: "Indian Tech Society Award",
    detail: "Certificate of Recognition for outstanding contributions to the UK tech sector, recognised for exceptional talent, impactful innovation, and community leadership as an Indian technologist.",
    image: "/images/awards/indian-tech-society-award.jpeg"
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
    year: "2024",
    title: "Digital Trustee, Third Sector Lab",
    detail:
      "Serving as digital trustee providing governance, ethics, and technology strategy oversight across multiple sectors."
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
    title: "University Guest Lecture Series",
    detail:
      "Practical Use of AI: What Works, What Doesn't — an experience-led perspective on real-world AI beyond hype.",
    image: "/images/speaking/university-lecture.jpg"
  }
];

const builtAndShipped = [
  {
    year: "2025",
    title: "AppDeploy: Internal application distribution without MDM dependency or private hosting",
    detail:
      "Developed novel approach for enterprise app distribution without device enrollment, solving deployment friction in regulated environments. Shipped with paid pilots proving market demand."
  },
  {
    year: "2025",
    title: "ScotiTech Workspace: Private AI execution architecture",
    detail:
      "Built platform enabling AI agents to operate entirely within controlled environments, solving the deployment constraint for regulated organizations where external AI processing is unacceptable."
  },
  {
    year: "2023",
    title: "ElderConnect+: Shared coordination layer for independent living",
    detail:
      "Built a shared layer for everyday support where family, neighbours, and helpers can coordinate small requests with clear, predictable interactions. Deployed with real users."
  },
  {
    year: "14+ years",
    title: "Production systems architecture and platform innovation",
    detail:
      "Built production systems across mobile, backend, and distributed infrastructure with a focus on reliability, data sovereignty, and maintainable ownership. Led architecture decisions for long-term scalability, compliance constraints, and real-world operational uptime."
  }
];

const measurableImpact = [
  {
    metric: "2",
    title: "International awards for innovation",
    detail: "Recognition from Forttuna Global Excellence Awards and Indian Tech Society for technology contributions."
  },
  {
    metric: "14+ years",
    title: "Professional software development",
    detail: "Experience spanning mobile development, backend systems, and platform architecture across enterprise and startup environments."
  },
  {
    metric: "Multiple",
    title: "Production platforms deployed",
    detail: "Built and shipped operational systems including AppDeploy, ScotiTech Workspace, and ElderConnect+ serving real organizations."
  }
];

const testimonials = [
  {
    quote:
      "Working alongside Pradeep has been nothing short of inspiring. His technical acumen as an iOS developer, coupled with his strategic vision as the founder of ScotiTech Ltd, sets him apart as an industry leader and an innovator. Pradeep's dedication to delivering top-notch solutions is evident in every project he undertakes, be it through his proficiency in Swift, SwiftUI, and Objective-C, or his advocacy for solid software principles. Beyond his technical capabilities, Pradeep is a natural leader and a highly collaborative team player. In the time I've had the pleasure of working with him at BUSINESSNEXT, I've witnessed firsthand his willingness to listen, mentor, and drive forward-thinking initiatives that create tangible value. Pradeep's resilience, combined with his innovative spirit, makes him an invaluable asset to any team and an inspiration to all who have the opportunity to work with him.",
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
  },
  {
    quote:
      "I've recently been working Pardeep and i had a nice time working with him. He got on with the team and would listen to all our feedback we gave him from code reviews. He learns very fast and it would be a pleasure for anyone to work with him in the future.",
    author: "Bashir Sentongo",
    context: "iOS Engineer"
  }
];

export const metadata = {
  title: "Impact | Pradeep Dahiya",
  description:
    "Awards, recognition, mentoring, and shipped platforms from a technology architect and founder.",
  openGraph: {
    title: "Impact | Pradeep Dahiya",
    description:
      "Awards, recognition, mentoring, and shipped platforms from a technology architect and founder.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact | Pradeep Dahiya",
    description:
      "Awards, recognition, mentoring, and shipped platforms from a technology architect and founder."
  }
};

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

export default function ImpactPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Impact
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Recognition tied to real products, not prototypes.
        </h1>
        <p className="text-base leading-7 text-neutral-600 md:text-lg">
          Recognition, mentorship, and platforms delivered in real-world environments.
        </p>
      </section>

      <section className="grid gap-12 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Awards
          </p>
          <Timeline items={awards} />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Professional Impact
          </p>
          <Timeline items={professionalImpact} />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Built & Shipped
          </p>
          <Timeline items={builtAndShipped} />
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            At a glance
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            A few numbers from the work.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {measurableImpact.map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-semibold text-accent">{item.metric}</p>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Testimonials
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            What clients, peers, and mentees have said.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <p className="text-sm leading-7 text-neutral-700 italic">"{item.quote}"</p>
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
