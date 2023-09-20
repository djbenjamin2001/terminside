import Image from 'next/image'
import Link from 'next/link';
const getData = async function(){
  let res = await fetch("http://localhost:4000/news")
  return await res.json();
}
export default async function Home() {
 const news = await getData()
 console.log(news)
  return (
    <main className="">
     <img className='relative pb-[2rem]' src="/images/Hero3.png" alt="" />
     <h1 className='text-2xl text-center'>NYHEDER</h1>
     <div className='max-w-4xl pb-5  gap-[2rem] grid grid-cols-2 mx-auto text-center'>
  {news.map(News =>(
    
     <Link href={`/news/${News.id}`} > <div className='bg-gray-400 pb-3'>
 <img className='w-[467px] h-[267px]' src={News.image.src} alt="" />
 <p>{News.title}</p>
 <p>{News.subtitle}</p>
 <button className=' bg-gray-900 text-white p-2 w-[10rem]'>Læs mere</button>
 </div></Link>
 
  ))}
  </div>
    </main>
  )
}
