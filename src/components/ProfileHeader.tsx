import Image from "next/image";

type Props = {
  name: string;
  title: string;
  avatar?: string;
  cover?: string;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ProfileHeader({ name, title, avatar, cover }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-48 w-full sm:h-56">
        {cover ? (
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover"
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-stone-400 via-stone-300 to-stone-200" />
        )}

        <div className="absolute bottom-0 left-1/2 size-36 -translate-x-1/2 translate-y-1/2 overflow-hidden rounded-full border-4 border-paper bg-stone-300 shadow-sm">
          {avatar ? (
            <Image src={avatar} alt={`${name} 프로필 사진`} fill sizes="144px" className="object-cover" />
          ) : (
            <span className="flex h-full w-full items-center justify-center font-serif text-4xl text-stone-600">
              {initials(name)}
            </span>
          )}
        </div>
      </div>

      <h1 className="mt-22 px-4 font-script text-5xl leading-tight">{name}</h1>
      <p className="mt-1 font-serif text-base uppercase tracking-[0.15em]">{title}</p>
    </header>
  );
}
