import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import ListBuku from "./components/list";

export const dynamic = "force-dynamic";
export default async function buku() {
return (
  <div className="ms-2">
      {/* head */}
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <span className="inline-flex items-center gap-1">
              Pengaturan CMS
            </span>
          </li>
          <li>
            <span className="inline-flex items-center gap-1 text-blue-950 font-semibold">
              Buku
            </span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between py-5 items-center">
        <p className="font-semibold text-2xl">Buku</p>
          <Link
            href="/buku/add-buku"
            className="btn bg-blue-900 text-white hover:bg-blue-800 btn-sm rounded-md font-medium"
          >
            Tambah <IoMdAddCircleOutline />
          </Link>
      </div>

      {/* main */}
      <div>
        <ListBuku />
      </div>
    </div>
    );
}
