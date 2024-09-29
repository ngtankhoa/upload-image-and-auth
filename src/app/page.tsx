import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  console.log(images);
  return images.map((item) => (
    <div key={item.id} className="flex flex-col border border-slate-200 p-2">
      <div className="relative h-48 w-full">
        <Image src={item.url} alt={item.name} fill objectFit="contain" />
      </div>
      <div className="line-clamp-1">{item.name}</div>
    </div>
  ));
}

export default async function HomePage() {
  return (
    <main>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        <SignedOut>
          <p className="text-center text-xl">Please sign in above</p>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
      </div>
    </main>
  );
}
