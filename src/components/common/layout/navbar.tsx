import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center gap-2 my-4">
      <Image src={"/svg/logo.svg"} width={48} height={24} alt="" />
      <h1 className="font-bold text-[28px] text-white">ReadmeBox</h1>
    </div>
  );
}
