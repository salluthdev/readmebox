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
    name: "About",
    path: "/about",
  },
];

export default function Navbar() {
  const [activePage, setActivePage] = useState<string>(navbarList[0].path);
  const router = useRouter();

  useEffect(() => {
    setActivePage(router.pathname);
  }, [router]);

  return (
    <div className="flex justify-between items-center gap-2 mt-4 mb-2">
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
                  ? "font-bold text-green-400 underline"
                  : "font-medium text-white"
              } hover:underline underline-offset-2 cursor-pointer`}
              onClick={() => setActivePage(list.path)}
            >
              {list.name}
            </p>
          </Link>
        ))}
        <Link href={"https://github.com/salluthdev/readmebox"} target="_blank">
          <div className="group flex items-center gap-2 bg-[#161b22] rounded-lg py-2 px-4 cursor-pointer">
            <Image
              src={"/svg/star.svg"}
              width={16}
              height={16}
              alt=""
              className="group-hover:scale-105 group-active:scale-95 transition"
            />
            <p>12</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
