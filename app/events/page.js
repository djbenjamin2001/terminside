import Link from "next/link";
const getData = async () =>{
    let res = await fetch("http://localhost:4000/bands")
    return await res.json();
  }

  const stageFarver = {
    RødScene:"bg-[#E9485B]",
   BlåScene:"bg-[#4A6FBF]",
   GrønScene:"bg-[#54A047]",
   LillaScene:"bg-[#be01be]",
  }
const EventsPage = async() => {
    const bands = await getData()
    console.log(bands)
    return ( 
        <main>
            <img src="/images/Hero3.png" alt="" />
            <h1 className='text-2xl text-center'>NYHEDER</h1>
     <div className='max-w-4xl pb-5  gap-[2rem] grid grid-cols-3 mx-auto text-center'>
     {bands.map((Bands, index) => (
          <Link href={`/bands/${Bands.id}`} key={Bands.id}>
            <div className={`${stageFarver[Bands.stage.split(" ").join('')]}`}>
              <img className="w-[467px] h-[267px]" src={Bands.image.src} alt="" />
              <p>{Bands.name}</p>
           
            </div>
          </Link>
        ))}
      </div>
        </main>
     );
}
 
export default EventsPage;