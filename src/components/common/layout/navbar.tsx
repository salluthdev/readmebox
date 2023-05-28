import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navbarList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
];

export default function Navbar() {
  const [activePage, setActivePage] = useState<string>(navbarList[0].path);
  const router = useRouter();

  useEffect(() => {
    setActivePage(router.pathname);
  }, [router]);

  return (
    <div className="flex justify-between items-center gap-2 my-4">
      <div className="flex items-center gap-2">
        <Image src={"/svg/logo.svg"} width={48} height={24} alt="" />
        <h1 className="font-bold text-[28px] text-white">ReadmeBox</h1>
      </div>
      <div className="flex items-center gap-6 font-medium text-white">
        {navbarList.map((list) => (
          <Link key={list.name} href={list.path}>
            <p
              className={`${
                activePage === list.path
                  ? "text-green-400 underline"
                  : "text-white"
              } hover:underline underline-offset-2 cursor-pointer`}
              onClick={() => setActivePage(list.path)}
            >
              {list.name}
            </p>
          </Link>
        ))}
        <div className="group bg-[#161b22] rounded-lg py-2 px-4 cursor-pointer">
          <div className="flex items-center gap-1">
            <Image
              src={"/svg/star.svg"}
              width={16}
              height={16}
              alt=""
              className="group-hover:scale-105 group-active:scale-95 transition"
            />
            <p>12</p>
          </div>
        </div>
      </div>
    </div>
  );
}
