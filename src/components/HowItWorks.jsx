import { Search, TrendingUp, Sparkles, Share2 } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-violet-500" />,
    title: "Choose a Topic",
    description:
      "Pick your niche or interest. Content Genius adapts to any audience.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
    title: "Track Trends",
    description:
      "Get real-time insights into what's hot right now powered by live data.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
    title: "Generate Content",
    description:
      "Use AI to instantly craft content ideas, captions, tweets, and more.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-pink-500" />,
    title: "Share & Grow",
    description:
      "Export or share your content across platforms with one click.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="bg-gradient-to-tr from-slate-100 via-white to-slate-200 py-20 px-6 md:px-16"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          How It Works
        </h2>
        <p className="text-slate-600 text-lg mb-14 max-w-2xl mx-auto">
          Go from idea to viral post in minutes. Content Genius simplifies
          content creation in 4 smart steps.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-white/80 border cursor-pointer border-slate-200 rounded-3xl shadow-lg p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-slate-100 shadow-inner mx-auto mb-4 border border-slate-300 group-hover:scale-110 transition">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
