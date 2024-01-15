import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 backdrop-blur-0">
      <ul className="flex flex-col items-center justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/test">Test</Link>
        </li>
      </ul>
    </main>
  );
}
