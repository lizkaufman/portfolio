"use client";

import Image from "next/image";
import { homepage } from "@/content/text";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import LinkButton from "@/components/atoms/LinkButton/LinkButton";

export type HeroProps = {};

export default function Hero({}: HeroProps) {
  return (
    <section className="flex flex-col items-center md:flex-row md:min-h-screen justify-between p-6 md:p-16 md:grid md:grid-cols-3">
      <div className="max-w-96 max-h-96 p-4 bg-white rounded-full flex items-center justify-self-center justify-center border-solid border-4 border-codingbumblebee-yellow">
        <Image
          className="w-3/4 h-auto"
          src="/images/codingbumblebee.png"
          height={400}
          width={400}
          alt="cartoon image of Liz, a blonde woman with glasses, dressed as a bumblebee and using a laptop"
        />
      </div>

      <div className="col-start-2 col-span-2 flex flex-col justify-around space-y-4 pl-8 m-0 mt-0">
        <h1 className="text-3xl m-0">Hello!</h1>
        <h2 className="text-xl">I'm Liz Kaufman.</h2>
        <p className="">{homepage.summary}</p>
        <div className="flex flex-row items-center space-x-4">
          <LinkButton href="">
            {/* TODO: set up to link to below the fold */}
            <span>Learn more</span>
          </LinkButton>
          <LinkButton href="https://www.linkedin.com/in/liz-kaufman/">
            <LinkedIn className="fill-codingbumblebee-dark-grey" />
          </LinkButton>
          <LinkButton href="https://github.com/lizkaufman">
            <GitHub className="fill-codingbumblebee-dark-grey" />
          </LinkButton>
          <LinkButton href="mailto:lizkaufman92@gmail.com">
            <Email className="fill-codingbumblebee-dark-grey" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
