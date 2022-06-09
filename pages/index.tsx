import Image from 'next/image'
import Layout from '../components/Layout'
import Panter from "../public/assets/images/pink-panther-pointing-up.webp"

import Logo from "../public/assets/images/juble40_color.svg"

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="h-[5000px] pt-8">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <Image src={Logo} height={250} />

          <div className="pt-8 space-y-2">
            <h1 className="text-3xl font-semibold text-center">Jubileum blah blah blah</h1>
            <h3 className="text-lg text-center">11 November &mdash; 19 November</h3>
          </div>
        </div>
      </div>

      <button
        className="block fixed h-16 w-16 right-4 bottom-4"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Image src={Panter} />
      </button>
    </div>
  </Layout>
)

export default IndexPage
