import Image from "next/image";
import Layout from "../components/Layout";
import SadPanter from "../public/assets/images/pink-panther-sad.gif";

import Logo from "../public/assets/images/juble40_color.svg";

const NotFoundPage = () => (
  <Layout title="¯\_(ツ)_/¯ D-sek 40-års Jubileum" description="Sida hittades ej" noindex>
    <div className="flex justify-center pt-16">
      <div className="flex flex-col">
        <Image src={Logo} height={250} />

        <div className="space-y-2 pt-8 mb-8">
          <h1 className="text-center text-3xl font-semibold">
            Sida hittades ej ¯\_(ツ)_/¯
          </h1>
        </div>
        <Image src={SadPanter} height={300} width={320} />
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
