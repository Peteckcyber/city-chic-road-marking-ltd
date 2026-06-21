"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-soft-gray" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block text-xs font-bold tracking-[0.25em] text-gold uppercase">
            FAQ
          </span>
          <h2 id="faq-heading" className="text-3xl font-bold text-charcoal md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 gold-gradient rounded-full" />
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-charcoal/5 bg-white premium-shadow"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-soft-gray/50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-charcoal">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="material-icons shrink-0 text-gold"
                  aria-hidden="true"
                >
                  expand_more
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-6 pb-6 leading-relaxed text-muted">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
