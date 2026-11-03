"use client";

import type { LinkItem } from "@/data/profile";
import { trackClick } from "@/lib/track";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(link.id)}
      className="block rounded-full border border-ink bg-paper/40 px-6 py-2.5 text-center font-serif text-lg font-medium uppercase tracking-wide transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      {link.label}
    </a>
  );
}
