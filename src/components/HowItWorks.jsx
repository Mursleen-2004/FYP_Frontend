import { Search, TrendingUp, Sparkles, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-[#F49867]" />,
    title: "Choose a Topic",
    description: "Pick your niche or interest. Content Genius adapts to any audience.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#F49867]" />,
    title: "Track Trends",
    description: "Get real-time insights into what's hot right now powered by live data.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#F49867]" />,
    title: "Generate Content",
    description: "Use AI to instantly craft content ideas, captions, tweets, and more.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-[#F49867]" />,
    title: "Share & Grow",
    description: "Export or share your content across platforms with one click.",
  },
];

const stepVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-16 " id="how-it-works">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-[#c5c6c7] text-lg mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Go from idea to viral post in minutes. Content Genius simplifies content creation in 4 smart steps.
        </motion.p>

        {/* Steps Chain */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center">
              <motion.div
                custom={i}
                initial="initial"
                whileInView="animate"
                variants={stepVariants}
                viewport={{ once: true }}
                className="relative z-10 
                border-2 border-gray-700 hover:border-[#F49867] rounded-3xl p-6 w-[250px] text-center 
                  shadow-md hover:shadow-cyan-500/30 backdrop-blur-lg hover:scale-105 cursor-pointer transition-all duration-400"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg mx-auto flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#c5c6c7]">{step.description}</p>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center mx-3 text-[#F49867] text-3xl">
                  -->
                </div>
              )}

              {/* Mobile vertical arrow */}
              {i < steps.length - 1 && (
                <div className="md:hidden my-4 text-[#66fcf1] text-3xl">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


