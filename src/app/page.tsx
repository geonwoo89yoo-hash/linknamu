import { profile } from "@/data/profile";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col pb-12">
      {/* 상단: 커버 + 원형 프로필 사진 + 이름 + 한 줄 소개 */}
      <ProfileHeader
        name={profile.name}
        title={profile.title}
        avatar={profile.avatar}
        cover={profile.cover}
      />

      {/* 하단: 링크 카드 세로 배치 */}
      <nav aria-label="링크" className="mx-auto mt-10 flex w-full max-w-64 flex-col gap-5 px-4 sm:px-0">
        {profile.links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </nav>
    </main>
  );
}
