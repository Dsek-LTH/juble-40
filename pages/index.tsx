import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

import Logo from "../public/assets/images/juble40_color.svg"

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="h-[5000px]">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <Image src={Logo} height={250} />

          <div className="pt-8 space-y-2">
            <h1 className="text-3xl font-semibold text-center">Jubileum blah blah blah</h1>
            <h3 className="text-lg text-center">1 Juni till 7 Juni</h3>
          </div>
        </div>
      </div>

      <button
        className="block fixed h-16 w-16 right-8 bottom-8 bg-blue-500 text-white rounded-full"
        onClick={() => window.scrollTo(0, 0)}
      >
        Top
      </button>
    </div>
  </Layout>
)

export default IndexPage
