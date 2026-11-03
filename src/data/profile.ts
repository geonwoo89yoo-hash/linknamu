export type LinkItem = {
  /** 클릭 수 집계에 쓰는 고유 ID. 한 번 정하면 바꾸지 마세요. */
  id: string;
  label: string;
  url: string;
};

export type SocialItem = LinkItem & {
  icon: "instagram" | "whatsapp" | "x";
};

export type Profile = {
  name: string;
  title: string;
  /** public/ 아래 이미지 경로. 없으면 이니셜/그라데이션으로 대체됩니다. */
  avatar?: string;
  cover?: string;
  links: LinkItem[];
  socials: SocialItem[];
};

// TODO: 보여 주기용 더미 값입니다. 실제 이름·소개·사진·링크로 교체하세요.
export const profile: Profile = {
  name: "Gildong Hong",
  title: "Software Developer",
  avatar: "/avatar.svg",
  cover: "/cover.svg",
  links: [
    { id: "github", label: "GitHub", url: "https://github.com/" },
    { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/" },
    { id: "blog", label: "Blog", url: "https://example.com/blog" },
  ],
  socials: [],
};

/** 클릭 집계 API가 허용하는 링크 ID 목록 */
export const trackableIds = new Set<string>([
  ...profile.links.map((l) => l.id),
  ...profile.socials.map((s) => s.id),
]);
