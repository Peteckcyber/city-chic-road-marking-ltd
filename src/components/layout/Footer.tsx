import { Link } from "react-router-dom";
import { NAV_LINKS, SITE, SERVICES, SOCIAL_LINKS, LOCATIONS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";
import { SocialLink } from "@/components/ui/SocialIcons";

function Icon({ name }: { name: string }) {
  return (
    <span className="material-icons text-base" aria-hidden="true">
      {name}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" size="md" showLink={false} className="mb-6" />
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              Premium road marking services in Lagos — delivering precision lines,
              safer streets, and enhanced property value for commercial, industrial,
              and estate developments.
            </p>
            <div className="flex gap-3">
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
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold"
                >
                  <Icon name="phone" />
                  {SITE.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold"
                >
                  <Icon name="email" />
                  {SITE.email}
                </a>
              </li>
              {LOCATIONS.map((loc) => (
                <li key={loc.id} className="flex items-start gap-3 text-sm text-white/60">
                  <Icon name="location_on" />
                  <div>
                    <p className="font-medium text-white/80">{loc.label}</p>
                    {loc.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Precision Lines. Premium Quality. Safer Streets.
          </p>
        </div>
      </div>
    </footer>
  );
}
