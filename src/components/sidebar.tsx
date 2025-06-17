import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiBook } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiChartPieSliceDuotone } from "react-icons/pi";

export default function Sidebar({
  isSidebarOpen,
}: {
  isSidebarOpen: boolean;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <div
      className={`h-full bg-blue-950 transition-all duration-300 ease-in-out overflow-x-scroll scrollbar-hide hidden lg:block ${
        isSidebarOpen ? "w-64" : "w-0 overflow-hidden"
      }`}
    >
      <Link
        href="/"
        className="h-16 bg-blue-900 items-center flex py-3 text-white"
      >
        <div className="w-9 rounded-full ms-2 me-3">
          <Image
            src="/logo/user.jpg"
            alt="Logo"
            quality={100}
            width={100}
            height={100}
            className="object-contain h-full"
          />
        </div>
        <p className="font-semibold text-[12px]">
          PERPUSTAKAAN DIGITAL
        </p>
      </Link>
      <IoSettingsOutline />
      <nav className="gap-1 font-normal text-slate-400 px-2">
        <ul className="menu menu-sm rounded-lg w-full max-w-xs p-0 gap-2">
            <li
              className={`rounded-none py-2 hover:bg-blue-900 hover:border-s-4 ${
                isActive("/")
                  ? "bg-blue-900 border-s-4 text-white"
                  : ""
                }`}
            >
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <PiChartPieSliceDuotone className="text-lg ms-1" />
                Dashboard
              </Link>
            </li>
            <li
              className={`rounded-none py-2 hover:bg-blue-900 hover:border-s-4 ${
                isActive("/buku")
                  ? "bg-blue-900 border-s-4 text-white"
                  : ""
                }`}
            >
              <Link
                href="/buku"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <BiBook className="text-lg ms-1" />
                Buku
              </Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}
