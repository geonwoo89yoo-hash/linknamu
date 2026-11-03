"use client";

import type { SocialItem } from "@/data/profile";
import { trackClick } from "@/lib/track";
import SocialIcon from "./SocialIcon";

export default function SocialLinks({ socials }: { socials: SocialItem[] }) {
  if (socials.length === 0) return null;

  return (
    <ul className="mt-10 flex items-center justify-center gap-6">
      {socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            onClick={() => trackClick(social.id)}
            className="flex size-11 items-center justify-center rounded-full transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-ink"
          >
            <SocialIcon name={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
