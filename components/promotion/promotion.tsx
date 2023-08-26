import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Promotion = () => {
  return (



    // <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    // <div className="col-span-2 md:col-span-1 md:row-span-2">
    //   <div className="relative aspect-w-3 aspect-h-2">

    

   


        <div className='container mb-10'>

        <h2 className="  mt-1 text-center text-blue-700">Promotions</h2>
    <h1 className="mt-2 mb-3 text-center text-2xl font-bold"> Checkout Our Latest Promotion</h1>
{/* Grid */}
<Link href={'/allproducts'}>
<div className='grid grid-cols-4 gap-4'>
  <div className='flex col-span-2 row-span-2 bg-slate-200'> 
  <Image 
       src='/event1.png'
       alt=''
       width={150}
       height={150}
       className=''/>
      <span className='text-red-600 text-4xl font-extrabold mt-24 ml-4'>The 30 % OFF This Month</span>
</div>

<div className='flex row-span-2 bg-slate-500'><Image 
       src='/event2.png'
       alt=''
       width={150}
       height={150}
       className=' '/> <span className='-rotate-45 text-black font-extrabold ml-16 underline text-lg  mt-12 '>Best Deal In Town </span></div>
<div className='row-span-4 bg-slate-500'> <Image 
       src='/back Shirt.jpg'
       alt=''
       width={350}
       height={350}
       className=''/><span className='text-white font-extrabold text-center ml-14'>Summer Deals On Heat</span></div>

<div className='flex col-span-3 row-span-2 bg-slate-500'> <Image 
       src='/kid blue shirt.jpg'
       alt=''
       width={150}
       height={150}
       className=' '/><span className='text-yellow-600 text-4xl ml-20 mt-14 overline font-bold'>Excited Summer Sales Are Live Now</span></div>



</div>
{/* Grid End*/}


</Link>



{/* <div>
       <Image 
       src='/event1.png'
       alt=''
       height={200}
       width={600}
       className='bg-gray-400'/>
<p>
 <Image 
       src='/event1.png'
       alt=''
       height={200}
       width={300}
       /> </p> </div>

       <div> 
       <Image 
       src='/event1.png'
       alt=''
       height={200}
       width={300}
       />
       </div>
       <div> <Image 
       src='/event1.png'
       alt=''
       height={200}
       width={300}
       /> </div> */}
       
</div>
  //     </div>
  //   </div>
  // </div>
        
  
  )
}

export default Promotion;
