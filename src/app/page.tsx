import ListBuku from "@/components/ListBuku";

export const dynamic = "force-dynamic"; 
export default function Home() {
  return (
    <div className="ms-2">
      {/* head */}
      <div className="breadcrumbs text-2xl font-bold">
        <ul>
          <li>
            <span className="inline-flex items-center gap-1">
              List Buku
            </span>
          </li>
        </ul>
      </div>
      {/* main */}
      <div>
        <ListBuku />
      </div>
    </div>
  );
}
