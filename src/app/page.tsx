import Image from "next/image";
import { homepage } from "../content/text";

export default function Home() {
  return (
    <main className="">
      <section className="hero-section flex flex-col items-center md:flex-row md:min-h-screen justify-between p-6 md:p-24 md:grid md:grid-cols-2">
        <div className="max-w-96 max-h-96 p-4 bg-white rounded-full flex items-center justify-self-center justify-center">
          <Image
            className="w-3/4 h-auto"
            src="/images/codingbumblebee.png"
            height={400}
            width={400}
            alt="cartoon image of Liz, a blonde woman with glasses, dressed as a bumblebee and using a laptop"
          />
        </div>

        <div className="col-start-2 pl-4 flex flex-col justify-center space-y-4">
          <h1 className="text-3xl">Hello!</h1>
          <h2 className="text-xl">I'm Liz Kaufman.</h2>
          <p className="">{homepage.summary}</p>
        </div>
      </section>
    </main>
  );
}
