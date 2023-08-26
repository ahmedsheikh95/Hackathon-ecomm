import Image from 'next/image'
import Hero from '../../components/herosection/hero'
import Navbar from '../../components/navbar/navbar'
import Promotion from '../../components/promotion/promotion'
import Products from '../../components/Product/Product'
import Hero2 from '../../components/herosection/hero2'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/Footer/footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero2/>
 {/* <Hero/> */}

<Products/>

<Promotion/>

<Newsletter/>
<Footer/>

   </>
  )
}
