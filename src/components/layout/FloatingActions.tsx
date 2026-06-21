"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 md:right-6 md:bottom-6">
      <motion.a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us instantly on WhatsApp"
        className="group flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-lg transition-shadow hover:shadow-xl md:px-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
          <span className="absolute inset-0 animate-pulse-gold rounded-full bg-white/20" />
          <WhatsAppIcon size={24} className="relative z-10 [&>path]:fill-white" />
        </span>
        <span className="hidden text-sm font-semibold sm:inline">
          Chat Us Instantly On WhatsApp
        </span>
      </motion.a>

      <motion.a
        href={SITE.phoneHref}
        aria-label="Call for immediate assistance"
        className="group flex items-center gap-3 rounded-full gold-gradient px-4 py-3.5 text-white shadow-lg premium-shadow-gold transition-shadow hover:shadow-xl md:px-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="material-icons text-xl" aria-hidden="true">
          phone
        </span>
        <span className="hidden text-sm font-semibold sm:inline">
          Call For Immediate Assistance
        </span>
      </motion.a>
    </div>
  );
}
