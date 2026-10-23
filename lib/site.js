/**
 * Facts shown across the site. Every line here should be checkable: a live
 * product page, a store listing, a public record or a photo of the event.
 * Product wording follows what vamiq.app, onq.scotitech.com and
 * axos.scotitech.com say today (22 October 2026).
 */

export const person = {
  name: "Pradeep Dahiya",
  role: "Founder, ScotiTech",
  positioning:
    "I build software that gives people control: of their company's Apple devices, of their private data, and of their time.",
  email: "pradeepdahiya@hotmail.com",
  linkedin: "https://www.linkedin.com/in/pradeepkumar2411/",
  github: "https://github.com/scorpionsPD",
  company: { name: "ScotiTech", legalName: "ScotiTech Solutions Limited", url: "https://scotitech.com" }
};

export const portraits = {
  headshot: {
    src: "/images/about/pradeep-dahiya-headshot-840.webp",
    width: 840,
    height: 1114,
    alt: "Pradeep Dahiya"
  },
  desk: {
    src: "/images/about/pradeep-dahiya-desk-790.webp",
    width: 789,
    height: 1052,
    alt: "Pradeep Dahiya working on a MacBook"
  }
};

export const vamiqMedia = {
  loop: { src: "/media/vamiq/vamiq-hero-loop-20261021.mp4", width: 1600, height: 1000 },
  poster: {
    src: "/media/vamiq/vamiq-hero-poster-20261021.webp",
    width: 1600,
    height: 1000,
    alt: "Vamiq sample workspace: one app installing across a team's iPhones and iPads"
  },
  phone: {
    src: "/media/vamiq/vamiq-hero-phone-20261021.webp",
    width: 780,
    height: 1688,
    alt: "A branded company app store on an iPhone, in a Vamiq sample workspace"
  },
  film: {
    src: "https://vamiq.app/media/vamiq-film-75s-20261022.mp4",
    page: "https://vamiq.app/film",
    poster: "/media/vamiq/vamiq-film-poster-20261021.webp",
    title: "Vamiq in 75 seconds",
    description:
      "A 75-second tour of Vamiq in a sample workspace: each release checked before it ships, released to the right team, published in a branded app store and ready on a new starter's iPhone.",
    uploadDate: "2026-10-21",
    duration: "PT1M15S"
  }
};

// Real screens from the OnQ iPhone app, as published on its App Store listing.
export const onqScreens = [
  {
    src: "/images/onq/onq-screen-nearby-640.webp",
    width: 640,
    height: 1386,
    alt: "OnQ on iPhone: nearby salons on a map, each with its live wait",
    caption: "Nearby salons, each with its live wait"
  },
  {
    src: "/images/onq/onq-screen-pin-640.webp",
    width: 640,
    height: 1386,
    alt: "OnQ on iPhone: a shop owner pinning the shop's location so customers are routed to the front door",
    caption: "Shop owners pin their front door"
  }
];

export const onqLinks = {
  site: "https://onq.scotitech.com",
  appStore: "https://apps.apple.com/gb/app/onq/id6803853512",
  googlePlay: "https://play.google.com/store/apps/details?id=com.scotitech.qapp"
};

export const products = [
  {
    id: "vamiq",
    name: "Vamiq",
    href: "/products/vamiq",
    url: "https://vamiq.app",
    urlLabel: "vamiq.app",
    kind: "Apple device management and private app store",
    line: "Your Apple devices and your own apps, managed in one place.",
    summary:
      "Vamiq sets up and secures a team's iPhones, iPads and Macs, and puts the company's own apps on them through its own branded app store.",
    logo: "/images/products/vamiq-logo.png",
    accent: "text-vamiq"
  },
  {
    id: "onq",
    name: "OnQ",
    href: "/products/onq",
    url: onqLinks.site,
    urlLabel: "onq.scotitech.com",
    kind: "Live queues for walk-in shops",
    line: "See the wait. Join from anywhere.",
    summary:
      "OnQ shows live wait times at participating local businesses. People join from their phone, keep their place while they get on with their day, and get an alert as their turn gets close.",
    logo: "/images/onq/onq-icon-512.png",
    accent: "text-onq"
  },
  {
    id: "axos",
    name: "AXOS",
    href: "/products/axos",
    url: "https://axos.scotitech.com",
    urlLabel: "axos.scotitech.com",
    kind: "Private AI workspace",
    line: "Your entire workspace. Private by design.",
    summary:
      "AXOS brings mail, files, calendar, chat, video and tasks into one self-hosted workspace with private AI built in. It runs inside an organisation's own environment, so its data stays there.",
    logo: "/images/products/AXOS.png",
    accent: "text-axos"
  }
];

export const awards = [
  {
    id: "forttuna",
    year: "2025",
    title: "Next-Gen Innovator of the Year",
    by: "Forttuna Global Excellence Awards",
    detail: "Technology, United Kingdom. 2025 Global Edition.",
    link: "https://awards.forttuna.com/winner?profile=pradeep-dahiya-winner-global-2025",
    linkLabel: "Winner profile",
    image: {
      src: "/images/recognition/forttuna-2025-stage-1200.webp",
      width: 1200,
      height: 1600,
      alt: "Pradeep Dahiya receiving the Next-Gen Innovator of the Year award at the Forttuna Global Excellence Awards 2025"
    }
  },
  {
    id: "startup-awards",
    year: "2026",
    title: "Scotland Regional Finalist, Digital StartUp of the Year",
    by: "UK StartUp Awards",
    detail: "ScotiTech was named a Scotland regional finalist in June 2026.",
    link: "https://scotitech.com/media",
    linkLabel: "ScotiTech news",
    company: true,
    image: {
      src: "/images/recognition/startup-awards-2026-finalists-1600.webp",
      width: 1600,
      height: 1200,
      alt: "The Scotland StartUp Awards 2026 finalists for Digital StartUp of the Year on screen, including ScotiTech"
    }
  },
  {
    id: "indian-tech-society",
    year: "2024",
    title: "Certificate of Recognition",
    by: "Indian Tech Society",
    detail: "Recognised in London in July 2024 for contributions to the UK technology sector.",
    image: {
      src: "/images/recognition/indian-tech-society-award-1200.webp",
      width: 1200,
      height: 800,
      alt: "Pradeep Dahiya receiving a certificate of recognition from the Indian Tech Society"
    }
  },
  {
    id: "talsec",
    year: "2025",
    title: "Certified App Security Integrator",
    by: "Talsec",
    detail: "For integrating Talsec's runtime app self-protection SDK. Certified on 8 April 2025.",
    image: {
      src: "/images/recognition/talsec-casi-certificate-1000.webp",
      width: 1000,
      height: 750,
      alt: "Talsec Certified App Security Integrator certificate"
    }
  }
];

export const roles = [
  {
    year: "2026",
    title: "Director (volunteer), D'LOUMMMIES CIC",
    detail: "Board-level oversight and governance for a community interest company.",
    link: "https://find-and-update.company-information.service.gov.uk/company/14818984/officers",
    linkLabel: "Companies House record"
  },
  {
    year: "2026",
    title: "Tech Advisor (volunteer), TravelHands",
    detail: "Technology advice for an accessibility-focused travel organisation, including an AI-assisted booking journey.",
    link: "https://www.travelhands.co.uk/www-travelhands-co-uk-about-us",
    linkLabel: "About TravelHands"
  },
  {
    year: "2024",
    title: "Mentor, NASSCOM",
    detail: "Technical mentor to early-stage technology startups through NASSCOM's mentorship programme."
  }
];

export const talks = [
  {
    year: "2026",
    kind: "Article",
    title: "Rethinking Responsible Innovation in the Age of AI",
    venue: "The Tech Founders",
    link: "https://thetechfounders.co.uk/growth/rethinking-responsible-innovation-in-the-age-of-ai/"
  },
  {
    year: "2026",
    kind: "Article",
    title: "SaaS AI Risks and Losing Control of Data",
    venue: "DZone",
    link: "https://dzone.com/articles/saas-ai-risks-losing-control-data"
  },
  {
    year: "2025",
    kind: "Talk",
    title: "How Teams Actually Use AI and Digital Workspaces",
    venue: "PNB MetLife knowledge exchange",
    image: {
      src: "/images/recognition/pnb-metlife-talk-1200.webp",
      width: 1200,
      height: 900,
      alt: "Pradeep Dahiya with the audience after a talk at PNB MetLife"
    }
  },
  {
    year: "2025",
    kind: "Guest lecture",
    title: "Practical Use of AI: What Works, What Doesn't",
    venue: "University guest lecture",
    link: "https://shivommbacollege.in/guest-lecture/",
    linkLabel: "About the lecture",
    image: {
      src: "/images/recognition/university-lecture-1200.webp",
      width: 1200,
      height: 900,
      alt: "Pradeep Dahiya with students after a guest lecture on practical AI"
    }
  }
];

export const interview = {
  title: "Building a product company in the UK",
  channel: "Swift Published",
  channelUrl: "https://www.youtube.com/@swiftpublished",
  url: "https://www.youtube.com/watch?v=0IMLuoXFYK8",
  clips: [
    { title: "Enterprise vs SaaS Buyers: The Real Difference", url: "https://www.youtube.com/shorts/wHEX6pGu27c" },
    { title: "3 Founder Mistakes Before You Start a Startup", url: "https://www.youtube.com/shorts/88qtkP0--M4" }
  ]
};

export const openSource = [
  {
    title: "Knowledge Platform",
    detail: "A full-stack TypeScript knowledge base with role-based access and OAuth2 sign-in.",
    link: "https://github.com/scorpionsPD/knowledge-platform"
  },
  {
    title: "SwiftUIArchitecture",
    detail: "A reference SwiftUI app architecture: state management, modular features and testable UI.",
    link: "https://github.com/scorpionsPD/SwiftUIArchitechture"
  }
];

export const testimonials = [
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
    context: "Technical Manager, BUSINESSNEXT"
  },
  {
    quote:
      "I had the pleasure of working closely with Pradeep Dahiya at CRMNext, where he served as an iOS Lead. Pradeep is a highly skilled iOS developer with a strong understanding of Swift, app architecture, performance optimization, and product-level development. What truly sets him apart is not just his technical expertise, but his calm, supportive, and professional nature. He leads by example, mentors team members effectively, and always approaches challenges with a problem-solving mindset. His ability to collaborate with cross-functional teams and deliver high-quality features on time makes him a valuable asset to any product-based organization.",
    author: "Aashish Tyagi",
    context: "iOS engineer, 9+ years"
  }
];
