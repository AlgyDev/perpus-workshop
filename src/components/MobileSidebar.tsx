"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PiChartPieSliceDuotone } from "react-icons/pi";
import { BiBook } from "react-icons/bi";

export default function MobileSidebar() {

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <div className="lg:hidden">
      <input
        id="mobileSidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content grid z-50 mr-2">
        <label
          htmlFor="mobileSidebar-drawer"
          className="btn btn-square btn-ghost"
        >
          <RxHamburgerMenu className="w-6 h-6 text-blue-950" />
        </label>
      </div>
      <div className="drawer-side z-[120]">
        <label
          htmlFor="mobileSidebar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => { }}
        ></label>

        <div className="menu bg-blue-950 text-white min-h-full w-[80%] md:w-[464px] p-0">
          <div className="flex bg-blue-900 justify-between items-center">
            <Link href="/" className="h-16 items-center flex py-3 text-white">
              <Image
                src="/logo/user.jpg"
                alt="Logo"
                quality={100}
                width={100}
                height={100}
                className="object-contain h-full w-fit mx-2"
              />
              <p className="font-semibold text-[12px] leading-3">
                Perpustakaan Digital
              </p>
            </Link>
            <label
              htmlFor="mobileSidebar-drawer"
              className="btn btn-sm btn-circle btn-ghost mr-1"
              onClick={() => { }}
            >
              ✕
            </label>
          </div>

          <div className="mr-3 mt-3">
            <nav className="gap-1 font-normal text-slate-400 px-2">
              <ul className="menu menu-sm rounded-lg w-full max-w-xs p-0 gap-2">
                <li
                  className={`rounded-none py-2 hover:bg-blue-900 hover:border-s-4 ${isActive("/")
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
                  className={`rounded-none py-2 hover:bg-blue-900 hover:border-s-4 ${isActive("/buku")
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
        </div>
      </div>
    </div>
  );
};