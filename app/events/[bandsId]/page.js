
const getData = async (bandsId) => {
    let res = await fetch(`http://localhost:4000/bands/${bandsId}`);
    return await res.json();
  };
  const stageFarver = {
    RødScene: "bg-[#E9485B]",
    BlåScene: "bg-[#4A6FBF]",
    GrønScene: "bg-[#54A047]",
    LillaScene: "bg-[#be01be]",
  };
const Bandsid = async({ params: { bandsId } }) => {
    const data = await getData(bandsId);
console.log(data)
    return ( 
        <main>
            <section className="   text-center text-white text-4xl">
        <div className={`flex justify-center gap-4 p-5 ${stageFarver[data.stage.split(" ").join("")]}`}>
            <h1>{data.stage}</h1>
            <p>{data.day} {data.time}</p>
        </div>
        </section>
        <section className="flex p-[5rem] gap-5">
           
            <img className="w-[400px] h-[472]" src={data.image.src} alt="" />
             <div>
            <p className="text-4xl font-semibold">{data.name}</p>
            <p>
{data.description}
            </p>
            </div>
        </section>
        </main>
     );
}
 
export default Bandsid;