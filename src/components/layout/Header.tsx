"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { SocialLink } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-icons ${className ?? ""}`} aria-hidden="true">
      {name}
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useLocation().pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-dark py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Logo variant="light" size="md" />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-colors hover:text-gold",
                  pathname === link.href
                    ? "text-gold"
                    : scrolled
                      ? "text-white/80"
                      : "text-white/90"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 h-0.5 w-full gold-gradient rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <SocialLink
                  key={social.name}
                  name={social.name}
                  href={social.href}
                  platform={social.platform}
                  variant="light"
                  size={18}
                />
              ))}
            </div>
            <Button href={SITE.phoneHref} variant="primary" size="sm" external>
              <Icon name="phone" className="text-base" />
              {SITE.phoneFormatted}
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 280 }}
              className="absolute top-0 right-0 flex h-full w-[85%] max-w-sm flex-col bg-charcoal p-8 pt-24"
              aria-label="Mobile navigation"
            >
              <div className="mb-8">
                <Logo variant="light" size="md" showLink={false} />
              </div>

              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block border-b border-white/10 py-4 text-lg font-medium transition-colors hover:text-gold",
                      pathname === link.href ? "text-gold" : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-8 flex flex-col gap-3">
                <Button href="/contact" variant="primary" size="md">
                  Get Free Quote
                </Button>
                <Button href={SITE.phoneHref} variant="outline" size="md" external>
                  Call {SITE.phoneFormatted}
                </Button>
              </div>

              <div className="mt-auto flex gap-3 pt-8">
                {SOCIAL_LINKS.map((social) => (
                  <SocialLink
                    key={social.name}
                    name={social.name}
                    href={social.href}
                    platform={social.platform}
                    variant="footer"
                    size={18}
                  />
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
