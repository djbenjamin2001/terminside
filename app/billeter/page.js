import Link from "next/link";


const BilletPage = () => {
  return (
    <main>

      <img src="/images/hero2.png" alt="" />
      <h1 className="text-center p-5">BILLETER</h1>
      <section className=" flex flex-col justify-center items-center p-5 ">
        <div className="bg-[#333] p-[1rem] w-[55rem]">
          <p className="text-white">PARTOUT BILLET-ALLE DAGE</p>
        </div>

        <article className="bg-[#EFEFEF] p-[1rem] w-[55rem] flex flex-row justify-between   ">
          <p>ALM.PARTOUTBILLET</p>
          &nbsp;
          <div className="flex">
            <p>1495 DKK</p>
           <Link href={`koeb?antal=1&billet=ALM.PARTOUTBILLET&pris=1495`}><button>KØB BILLET</button></Link> 
          </div>
        </article>

        <article className="bg-[#CFCFCF] p-[1rem] w-[55rem] flex justify-between">
          <p>PARTOUTBILLET-DELUXE</p> &nbsp;
          <div className="flex">
            <p>1945 DKK</p>
            <Link href={`koeb?antal=1&billet=PARTOUTBILLET-DELUXEæ&pris=1495`}><button>KØB BILLET</button></Link> 
          </div>
        </article>
      </section>

      <section className=" flex flex-col justify-center items-center p-5 ">
        <article className="bg-[#333] p-[1rem] w-[55rem]">
          <p className="text-white">ENKELTBILLETER</p>
        </article>
        <article className="bg-[#EFEFEF] p-[1rem] w-[55rem] flex justify-between">
          <p>ONSDAG</p>
          &nbsp;
          <div className="flex">
    <p>600 DKK</p>  
    <Link href={`koeb?antal=1&billet=onsdag&pris=600`}><button>KØB BILLET</button></Link> 
    </div>

        </article>
        <div className="bg-[#CFCFCF] p-[1rem] w-[55rem] flex justify-between">
          <p>TORSDAG</p> &nbsp;
          <div className="flex">
    <p>600 DKK</p>  
    <Link href={`koeb?antal=1&billet=torsdag&pris=600`}><button>KØB BILLET</button></Link> 
    </div>

        </div>

        <article className="bg-[#EFEFEF] p-[1rem] w-[55rem] flex justify-between">
          <p>FREDAG</p>
          &nbsp;
          <div className="flex">
    <p>600 DKK</p>  
   <Link href={`koeb?antal=1&billet=fredag&pris=600`}><button>KØB BILLET</button></Link> 
    </div>
        </article>

        <article className="bg-[#CFCFCF] p-[1rem] w-[55rem] flex justify-between">
          <p>LØRDAG</p> &nbsp;
          <div className="flex"> 
    <p>600 DKK</p>  
   <Link href={`koeb?antal=1&billet=lørdag&pris=600`}><button>KØB BILLET</button></Link> 
  
    </div>
        </article>
      </section>
    </main>
  );
};

export default BilletPage;
