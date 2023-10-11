"use client";

import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { BiLogOut } from "react-icons/bi";

function extractFirstPathSegment(path: string) {
  // Remove leading and trailing slashes and split the path by "/"
  const segments = path.replace(/^\/|\/$/g, "").split("/");

  // Return the first segment
  return segments[0];
}

interface LeftSidebarProps {}

const Sidebar: FC<LeftSidebarProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const routeSection = "/" + extractFirstPathSegment(pathname);
  //   const { userId } = useAuth();

  return (
    <section className="custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto shadow-md pb-5  max-lg:hidden ">
      <div className="px-6 py-8">
        <div className="flex items-center justify-center  border-b pb-6">
          <Image
            src={"/assets/logo.png"}
            alt={"Logo"}
            width={180}
            height={180}
          />
        </div>
      </div>

      <div className="flex flex-1 w-full flex-col gap-3 px-3">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === routeSection + link.route;
          //   if (link.route === "/profile") link.route = `/profile/${userId}`;

          return (
            <Link
              href={routeSection + link.route}
              key={link.label}
              className={`relative hover:bg-[#C2C5AA] flex justify-start items-center gap-4 rounded-lg p-4 ${
                isActive && "bg-[#C2C5AA]"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-sm ">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-2">
        <div className="flex gap-3 cursor-pointer p-4 items-center rounded-lg hover:bg-[#C2C5AA]">
          {/* <Image
                src={"assets/logout.svg"}
                alt="logout"
                width={24}
                height={24}
              /> */}
          <BiLogOut className={"text-[30px] text-[#B2B5A4]"} />
          <p className="text-sm max-lg:hidden">Log Out</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;