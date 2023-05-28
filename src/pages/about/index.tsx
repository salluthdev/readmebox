import { SeoMeta } from "@/components/common/seo-meta";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <SeoMeta title="About" />
      <div className="flex max-sm:flex-col gap-4 mt-10">
        <Link
          href={"https://twitter.com/github/status/1618309004362407937"}
          target="_blank"
        >
          <Image
            src={"/img/twitter-github.png"}
            width={280}
            height={280}
            alt=""
            className="rounded active:scale-95 transition cursor-pointer"
          />
        </Link>
        <div className="flex flex-col items-start gap-4 text-sm text-white">
          <Image
            src={"/svg/arrow-fun.svg"}
            width={28}
            height={28}
            alt=""
            className="-rotate-90"
          />
          <p>
            Inspired by this post,{" "}
            <Link
              href={"https://github.com/salluthdev"}
              target="_blank"
              className="font-bold underline underline-offset-2 text-green-400"
            >
              @salluthdev
            </Link>{" "}
            started this project. He also asked his partner{" "}
            <Link
              href={"https://github.com/amienulrana"}
              target="_blank"
              className="font-bold underline underline-offset-2 text-green-400"
            >
              @amienulrana
            </Link>{" "}
            to help him make some components. Thank you Amien! 🙏
          </p>
          <p>
            Do you have another cool project idea? 🤔 Let&apos;s discuss with
            us. 😁
          </p>
          <Link href={"https://www.instagram.com/salluthdev/"} target="_blank">
            <button className="group flex items-center gap-3 font-medium bg-[#161b22] rounded py-2 px-4">
              Say Hello on Instagram
              <Image
                src={"/svg/arrow-straight.svg"}
                width={12}
                height={12}
                alt=""
                className="group-hover:scale-105 group-active:scale-95 transition rotate-90"
              />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
