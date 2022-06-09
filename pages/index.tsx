import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Schedule from "../components/Schedule";

import Logo from "../public/assets/images/juble40_color.svg";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="h-[5000px]">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <Image src={Logo} height={250} />

          <div className="space-y-2 pt-8">
            <h1 className="text-center text-3xl font-semibold">
              Jubileum blah blah blah
            </h1>
            <h3 className="text-center text-lg">1 Juni till 7 Juni</h3>
          </div>
        </div>
      </div>
      <Schedule />

      <button
        className="fixed right-8 bottom-8 block h-16 w-16 rounded-full bg-blue-500 text-white"
        onClick={() => window.scrollTo(0, 0)}
      >
        Top
      </button>
    </div>
  </Layout>
);

export default IndexPage;
