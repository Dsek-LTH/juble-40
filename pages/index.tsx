import Image from "next/image";
import Layout from "../components/Layout";
import Panter from "../public/assets/images/pink-panther-pointing-up.webp";
import Schedule from "../components/Schedule";

import Logo from "../public/assets/images/juble40_color.svg";

const IndexPage = () => (
  <Layout description="D-sektionen firar 40 år 2022 och det ska firas med en vecka fylld av eveneang. Här hittar du all information man kan behöva och mer!">
    <div className="h-[5000px] pt-8">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <Image src={Logo} height={250} />

          <div className="space-y-2 pt-8">
            <h1 className="text-center text-3xl font-semibold">
              Jubileum blah blah blah
            </h1>
            <h3 className="text-center text-lg">
              11 November &mdash; 19 November
            </h3>
          </div>
        </div>
      </div>
      <Schedule />

      <button
        className="fixed right-4 bottom-4 block h-16 w-16"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Image src={Panter} />
      </button>
    </div>
  </Layout>
);

export default IndexPage;
