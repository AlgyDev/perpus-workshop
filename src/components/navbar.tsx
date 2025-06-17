"use client";

// import MobileSidebar from "@/components/admin/MobileSidebar";
import Image from "next/image";
import { IoLogOutOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
   <div>
      <div className="navbar border-b-1">
        <div className="flex-none navbar-start">
          <div className="hidden lg:block">
            <button className="btn btn-square btn-ghost" onClick={toggleSidebar}>
              <RxHamburgerMenu className="w-6 h-6 text-blue-950" />
            </button>
          </div>
          {/* <MobileSidebar permissions={permissions} /> */}
        </div>
        <div className="flex-none navbar-end">
          <div className="flex items-center me-0 lg:me-8">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar flex"
            >
              <div className="w-9 rounded-full">
                <Image
                  alt="Avatar"
                  width={100}
                  height={100}
                  src="/logo/user.jpg"
                />
              </div>
            </div>
            <p className="font-semibold ms-2">User</p>
          </div>
          <div className="btn btn-square btn-ghost">
            <IoLogOutOutline className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
