import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const pills = [
  " E-E-A-T Verified",
  "Lab-Tested Info",
  "No Paid Placements",
  "Eco-Certified Focus",
  "Updated Regularly",
];

export default function Philosophy() {
  return (
    <div className="bg-forest ">
      <div className="">
        <div className="flex ">
          <div
            className={cn(
              "hidden w-1/2 lg:flex justify-end items-center bg-cream  relative",
            )}
          >
            <span className="absolute -top-5 right-12 font-playfair text-[280px] leading-none italic text-text/10">
              &quot;
            </span>
            <div className="lg:block py-14 lg:py-24 max-w-180 px-8 lg:pl-8 xl:pr-16">
              <p className="text-2xl italic leading-6 text-forest font-playfair relative">
                &quot;We don&apos;t just want you to buy — we want you to buy
                better.&quot;
              </p>
              <span className="block text-xs tracking-[0.15em] uppercase text-text-muted mt-6">
                — The Refined Space Editorial Team
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 border ">
            <div className="py-14 lg:py-24 max-w-180 px-8 lg:pl-16">
              <SectionTitle
                type="white"
                tagline="Our Philosophy"
                title="Research-Backed. Never Sponsored."
              />
              <p className="text-[15px] leading-7 text-white/65 font-light mb-9">
                Every guide on The Refined Space is built from independent
                research, real product testing, and a genuine belief that
                sustainable choices should be easy — not overwhelming. We do the
                deep work so you can shop with confidence.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                {pills && pills.map((p, i) => <Badge key={i}>{p}</Badge>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
