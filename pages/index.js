import Head from "next/head";
import { Inter } from "@next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillBehanceCircle,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Subham | Web Dev Portfolio</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <main className="bg-white text-black px-10">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Subham</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Subham Chowdhury
            </h2>
            <h3 className={"text-2xl py-2"}>Developer and Designer.</h3>
            <p className={"text-md py-5 leading-8 text-gray-800"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              consectetur dolore eos, incidunt ipsa iste iure laboriosam
              molestias pariatur quisquam.
            </p>
          </div>
          <div
            className={"text-5xl flex justify-center gap-16 py-3 text-gray-600"}
          >
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillBehanceCircle />
          </div>
          <div
            className={
              "relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden"
            }
          >
            <Image src={deved} layout={"fill"} objectFit={"cover"} />
          </div>
        </section>
        <section>
          <div>
            <h3 className={"text-3xl py-1"}>Services i offer</h3>
            <p className={"text-md py-2 leading-8 text-gray-800 "}>
              Since the beginning of my journey as a freelance developer and I
              have done remote work for
              <span className="text-teal-500"> agencies </span> consulted for
              <span className="text-teal-500"> Startups </span> , and
              collaborated with talented people to create for both business and
              consumer use.
            </p>
            <p className={"text-md py-2 leading-8 text-gray-800 "}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
              beatae eligend.
            </p>
          </div>
          <div>
            <div>
              <Image src={design} width={100} height={100} />
              <h3 className={"text-lg font-medium pt-8 pb-2"}>
                Beautiful Designs
              </h3>
              <p className={"py-2"}>
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className={"py-4 text-teal-600"}>Design tools i use</h4>
              <p className={"text-gray-800 py-1 "}>Figma</p>
              <p className={"text-gray-800 py-1 "}>Photoshop</p>
              <p className={"text-gray-800 py-1 "}>Illustrator</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
