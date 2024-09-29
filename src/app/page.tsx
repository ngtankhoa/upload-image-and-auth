import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  console.log(images);
  return images.map((item) => (
    <div key={item.id} className="flex flex-col">
      <img src={item.url} alt={item.name} />
      {/* <Image src={}/> */}
      <div>{item.name}</div>
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
