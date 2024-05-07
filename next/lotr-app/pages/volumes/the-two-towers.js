import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TwoTowers() {
  const currentVolume = volumes.find(({ slug }) => slug === "the-two-towers");
  console.log(currentVolume);

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
        src="/images/the-two-towers.png"
        width={140}
        height={230}
        alt="The two towers cover"
      ></Image>
    </>
  );
}
