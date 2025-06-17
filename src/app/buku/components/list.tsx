import { listBuku } from "@/app/buku/action/list";

export default async function ListBuku() {
  const response = await listBuku();

  if (response.status !== 200 || !response.data) {
    return <p>Gagal memuat data buku.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead className="bg-slate-50">
          <tr>
            <th>No.</th>
            <th>Judul</th>
            <th>Penulis</th>
          </tr>
        </thead>
        <tbody>
          {response.data.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center text-gray-500 py-4">
                Tidak ada buku yang tersedia.
              </td>
            </tr>
          ) : (
            response.data.map((buku, index) => (
              <tr key={buku.id} className="hover">
                <td>{index + 1}</td>
                <td>{buku.judul}</td>
                <td>{buku.penulis}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
