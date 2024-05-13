import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function DetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find(({ slug }) => volumes.slug === slug);

  if (!currentVolume) {
    return;
  }

  return (
    <>
      <Link href="/">Home</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books[0].ordinal}
        <li>{currentVolume.books[0].title}</li>
        {currentVolume.books[1].ordinal}
        <li>{currentVolume.books[1].title}</li>
      </ul>

      <Image
        src={`/images/${slug}.png`}
        width={140}
        height={230}
        alt={`${currentVolume.title} cover`}
      ></Image>
    </>
  );
}
