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
            width={140}
            height={140}
            alt=""
            className="rounded active:scale-95 transition cursor-pointer"
          />
        </Link>
        <div className="flex-1 flex flex-col items-start gap-4 text-sm text-white">
          <Image
            src={"/svg/arrow-fun.svg"}
            width={28}
            height={28}
            alt=""
            className="max-sm:hidden -rotate-90"
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
            started this project. The idea is to create an svg genenator to cool
            your github readme. You don&apos;t neet to waste your time on
            coding, let me do the work. You just enter the text you want to
            display. 😎
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
