"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { SocialLink } from "@/components/ui/SocialIcons";

export default function SocialBar() {
  return (
    <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {SOCIAL_LINKS.map((social) => (
        <SocialLink
          key={social.name}
          name={social.name}
          href={social.href}
          platform={social.platform}
          variant="dark"
          size={18}
        />
      ))}
    </div>
  );
}
