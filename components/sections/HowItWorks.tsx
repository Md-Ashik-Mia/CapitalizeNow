import { BsStars } from "react-icons/bs";
import { PiArrowArcRightDuotone } from "react-icons/pi";

export default function HowItWorks() {
  return (
    <section
      className="max-w-5xl mx-auto mt-24
      rounded-2xl bg-[rgba(15,10,20,0.96)]
      border border-[rgba(255,255,255,0.25)]
      shadow-[0_0_30px_rgba(255,255,255,0.08),0_0_50px_rgba(255,255,255,0.04)]
      px-6 md:px-10 py-10"
    >
      {/* heading + stars */}
      <div className="flex flex-col items-center mb-8">
        <BsStars className="w-6 h-6 text-[var(--pink-primary)] mb-3" />
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          How It Works?
        </h2>
      </div>

      {/* steps row */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-10 text-center">
          <Step
            number="1"
            title="Spot & Submit"
            text="See something trending? Submit it with proof links. No email needed — just username & password."
          />
          <Step
            number="2"
            title="Boost & Verify"
            text="Seen it too? Boost it with your own proof. The more boosts, the higher the confidence score."
          />
          <Step
            number="3"
            title="Earn & Unlock"
            text="Every boost on YOUR trends = 1 unlock. Access exclusive hidden trends before the masses."
          />
        </div>

        {/* arrows between circles – desktop only */}
        <div className="hidden md:block">
          {/* between 1 and 2 */}
          <div className="absolute text-8xl left-1/3 top-[16%] -translate-x-1/2 -translate-y-1/2">
            <PiArrowArcRightDuotone className="w-9 h-9 text-[var(--pink-primary)] rotate-[15deg]" />
          </div>
          {/* between 2 and 3 */}
          <div className="absolute text-8xl left-2/3 top-[16%] -translate-x-1/2 -translate-y-1/2">
            <PiArrowArcRightDuotone className="w-9 h-9 text-[var(--pink-primary)] rotate-[15deg]" />
          </div>
        </div>
      </div>
    </section>
  );
}

type StepProps = {
  number: string;
  title: string;
  text: string;
};

function Step({ number, title, text }: StepProps) {
  return (
    <div className="flex flex-col items-center text-gray-300">
      <div
        className="w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold
        bg-[rgba(25,10,25,0.9)]
        border border-dashed border-[var(--pink-primary)]
        shadow-[0_0_24px_rgba(255,71,101,0.45)]"
      >
        {number}
      </div>
      <h3 className="mt-4 text-white text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-xs md:text-sm text-gray-400 max-w-xs">
        {text}
      </p>
    </div>
  );
}
