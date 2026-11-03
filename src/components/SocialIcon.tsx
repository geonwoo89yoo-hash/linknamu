import type { SocialItem } from "@/data/profile";

// Tabler Icons(MIT) 스타일의 라인 아이콘
export default function SocialIcon({ name }: { name: SocialItem["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "instagram" && (
        <>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <path d="M16.5 7.5v.01" />
        </>
      )}
      {name === "whatsapp" && (
        <>
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </>
      )}
      {name === "x" && (
        <>
          <path d="M4 4l11.733 16H20L8.267 4z" />
          <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
        </>
      )}
    </svg>
  );
}
