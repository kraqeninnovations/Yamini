import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, Eye, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Sparkles className="w-7 h-7 text-gold" />,
      title: "Personalised Looks",
      description: "Makeup that complements your preferences, natural skin tone, and unique occasion. We create a look tailored specifically for you, never a one-size-fits-all formula."
    },
    {
      icon: <Eye className="w-7 h-7 text-gold" />,
      title: "Attention to Detail",
      description: "Careful work across makeup, hair and draping. From symmetrical liner and seamless blending to millimeter-precise saree pleating and secure pin placements."
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-gold" />,
      title: "Your Vision Matters",
      description: "We consider your outfit, jewellery and preferred style with deep respect. Your voice and personal comfort guide every brushstroke and hairpin."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-gold" />,
      title: "A Beautiful Experience",
      description: "Helping you feel comfortable and confident throughout your bridal preparation. A serene, patient, and uplifting presence on your most important morning."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
            The Yamini Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mb-4">
            Why Choose Makeup 101 by Yamini?
          </h2>
          <div className="gold-divider" />
          <p className="text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
            Bridal beauty is about more than cosmetics—it is about feeling cherished, radiant, and true to yourself.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gold/20 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-ivory border border-gold/30 flex items-center justify-center mb-6 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-burgundy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-burgundy/75 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ivory-300/40 text-[11px] font-mono uppercase tracking-wider text-gold">
                Pillar 0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
