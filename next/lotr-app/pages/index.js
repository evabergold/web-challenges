import { introduction } from "../lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/volumes">Go to all volumes</Link>
    </div>
  );
}
