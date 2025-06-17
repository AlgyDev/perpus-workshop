import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import FormBuku from "./components/form";

function addBuku() {
  return (
    <div className="mb-5 ms-2">
      {/* // Head */}
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <span className="inline-flex items-center gap-1">
              Buku
            </span>
          </li>
          <li>
            <span className="inline-flex items-center gap-1 text-blue-950 font-semibold">
              Tambah
            </span>
          </li>
        </ul>
      </div>
      <div className="flex items-center mt-4 mb-8">
        <Link rel="stylesheet" href="/buku">
          <IoIosArrowRoundBack
            className="me-3 border-2 rounded-full"
            size={35}
          />
        </Link>
        <p className="text-3xl font-bold"> Tambah Buku</p>
      </div>

      {/* main */}
      <FormBuku />
    </div>
  );
}

export default addBuku;
