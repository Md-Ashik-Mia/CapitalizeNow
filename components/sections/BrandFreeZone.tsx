import { LuInfo } from "react-icons/lu";
export default function BrandFreeZone() {
  return (
    <section className="max-w-5xl mx-auto mt-16
      p-7 md:p-8 rounded-2xl bg-[rgba(13,11,20,0.96)]
      border border-[rgba(255,255,255,0.08)]">

      <div className="flex items-start gap-3">
        {/* circular ! icon – matches Figma feel */}





        <div>

          <h3 className="text-white font-semibold text-lg mb-1.5 flex gap-2  items-center ">
            <LuInfo className="text-[var(--pink-primary)] text-4xl " />  <span>Brand-Free Zone</span>
          </h3>
          <p className="text-gray-300 leading-relaxed text-[13px] md:text-sm">
            This platform is 100% organic. Any established brands, obvious promotions,
            or sponsored content will be removed instantly. We're here to spot genuine
            trends, not market products. CapitalizeNow is a non-profit, community-run
            platform. We don't collect emails, we don't have sponsors, and we never
            will. This is by creators, for creators.
          </p>
        </div>
      </div>
    </section>
  );
}
