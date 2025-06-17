import { listBuku } from "@/app/buku/action/list";
import Image from "next/image";

export default async function ListBukuPage() {
  const response = await listBuku();

  if (response.status !== 200 || !response.data) {
    return <p>Gagal memuat data buku.</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="flex justify-between mt-5 mb-10 max-w-7xl">
        <div className="flex flex-row gap-16 items-stretch flex-wrap">
          {response.data.length === 0 ? (
            <p className="text-gray-500">Tidak ada buku yang tersedia.</p>
          ) : (
            response.data.map((buku) => (
              <div
                key={buku.id}
                className="p-4 cursor-pointer w-full sm:w-64 bg-[#F5F5F5] hover:shadow-md rounded-xl"
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="max-h-64 max-w-40">
                    <Image
                        src={buku.image || "/logo/user.jpg"}
                        alt="Preview"
                        quality={100}
                        width={100}
                        height={100}
                        className="transition-all rounded-xl min-h-64 object-cover"
                    />
                  </div>
                </div>

                <div className="p-2 flex flex-col">
                  <div className="tooltip text-left" data-tip={buku.penulis}>
                    <p className="font-light text-xs font-work-sans line-clamp-1">
                      {buku.penulis}
                    </p>
                  </div>

                  <div className="tooltip text-left" data-tip={buku.judul}>
                    <p
                      className="font-semibold font-work-sans mb-2 line-clamp-3"
                      title={buku.judul}
                    >
                      {buku.judul}
                    </p>
                  </div>

                  <p className="font-light text-sm font-work-sans mb-2">
                    2025
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

