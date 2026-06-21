"use client";

import { useState } from "react";
import Image from "@/lib/NextImageShim";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_ITEMS } from "@/lib/constants";

export default function ProjectGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="section-padding bg-soft-gray" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Project Gallery"
          subtitle="Explore our portfolio of precision road marking projects across highways, car parks, warehouses, and sports facilities."
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setLightbox(index)}
              aria-label={`View ${item.title} project`}
            >
              <div className={`relative ${index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute right-0 bottom-0 left-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="mb-1 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Project image lightbox"
          >
            <button
              type="button"
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <span className="material-icons" aria-hidden="true">close</span>
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_ITEMS[lightbox].image}
                alt={GALLERY_ITEMS[lightbox].title}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
              />
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">
                  {GALLERY_ITEMS[lightbox].title}
                </h3>
                <p className="text-sm text-white/60">
                  {GALLERY_ITEMS[lightbox].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
