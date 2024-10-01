import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return images.map((item) => (
    <div
      key={item.id}
      className="flex flex-col rounded-md border border-slate-200 p-2 px-2.5"
    >
      <Link href={`/img/${item.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={item.url}
            alt={item.name}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </Link>
      <div className="line-clamp-1">{item.name}</div>
    </div>
  ));
}

export default async function HomePage() {
  return (
    <div className="p-2">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        <SignedOut>
          <p className="text-center text-xl">Please sign in above</p>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
      </div>
    </div>
  );
}
