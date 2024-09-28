import Image from "next/image";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/LQYonWKymt9sKB4WKd5PESNuZyGWe4aloX0s7fLirDncbY21",
    "https://utfs.io/f/LQYonWKymt9soamjlDAwYeFGsfZmIN4VaRcg5CO9B3DMWvS7",
    "https://utfs.io/f/LQYonWKymt9sNfR2C0BXa3O2FV41Weinw9pgxCLPMBUTsHjR",
    "https://utfs.io/f/LQYonWKymt9sZqAeDDtahDFsjEkdACtgN9VO1zJHYB5K7qTX",
    "https://utfs.io/f/LQYonWKymt9sc9tz0B5Z5VOUYGljfmqbaHJTgFiQW0I97Aut",
    "https://utfs.io/f/LQYonWKymt9sERIPA7WypHjFLETkoCgQKmIzB0W5n9tbd8q6",
    "https://utfs.io/f/LQYonWKymt9sFmEhuXcgymZ3OlweVQK0baG9WXR4TCctg7iL",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        {mockImages.map((item) => (
          <img key={item.id} src={item.url} />
        ))}
      </div>
    </main>
  );
}
