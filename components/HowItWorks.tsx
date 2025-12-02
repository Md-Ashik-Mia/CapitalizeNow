import { howItWorks } from "@/data/fakeData";

export default function HowItWorks() {
  return (
    <section className="bg-black/20 border border-white/10 rounded-2xl p-10 mt-20 max-w-5xl mx-auto">
      <h2 className="text-center text-2xl font-semibold text-white mb-10">
        How It Works?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 text-center">
        {howItWorks.map((step, i) => (
          <div key={i}>
            <div className="text-5xl text-pink-500 font-bold mb-4">{i + 1}</div>
            <h3 className="font-semibold text-white">{step.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
