import Image from "next/image";
import LoopVideo from "./LoopVideo";
import { ProductFrame } from "./ui";
import { vamiqMedia } from "../lib/site";

// The framed Vamiq product window with its 14-second loop and the branded
// app store on an iPhone, as on the vamiq.app home page.
export default function VamiqShowcase({ className = "" }) {
  return (
    <div className={`relative pb-8 pr-6 md:pb-10 md:pr-14 ${className}`}>
      <ProductFrame label="vamiq.app">
        <LoopVideo
          src={vamiqMedia.loop.src}
          poster={vamiqMedia.poster.src}
          width={vamiqMedia.loop.width}
          height={vamiqMedia.loop.height}
          label={vamiqMedia.poster.alt}
        />
      </ProductFrame>
      <div className="absolute bottom-0 right-0 w-[24%] min-w-[92px] max-w-[200px] overflow-hidden rounded-[22px] border-[5px] border-ink bg-ink shadow-lift ring-1 ring-white/15 md:rounded-[28px] md:border-[7px]">
        <Image
          src={vamiqMedia.phone.src}
          width={vamiqMedia.phone.width}
          height={vamiqMedia.phone.height}
          alt={vamiqMedia.phone.alt}
          className="h-auto w-full rounded-[16px] md:rounded-[21px]"
        />
      </div>
      <p className="mt-3 text-[12px] text-muted">Sample workspace</p>
    </div>
  );
}
