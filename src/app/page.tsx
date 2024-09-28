import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        {images.map((item) => (
          <div key={item.id} className="flex flex-col">
            <img src={item.url} alt={item.name} />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
