import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export default function PostCard({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <Link href={slug}>
      <Card className="flex flex-col justify-between h-full rounded-lg cursor-pointer transition-all duration-200 hover:brightness-105">
        <div className="flex w-full p-2">
          <Image
            className="rounded-lg"
            src={coverImage}
            alt={`Imagem de ${title}`}
            width={600}
            height={600}
          />
        </div>
        <div className="p-2 flex flex-col justify-between h-full gap-2">
          <div>
            <h1 className="text-lg font-bold leading-tight">
              {title}
            </h1>
            <h2 className="text-sm opacity-75">
              {excerpt}
            </h2>
          </div>
          <div>
            <h2 className="opacity-60 text-xs">Publicado em: {date}</h2>
          </div>
        </div>
      </Card>
    </Link>
  );
}