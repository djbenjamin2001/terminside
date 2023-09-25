"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
const getData = async () => {
  let res = await fetch("http://localhost:4000/bands");
  return await res.json();
};

const stageFarver = {
  RødScene: "bg-[#E9485B]",
  BlåScene: "bg-[#4A6FBF]",
  GrønScene: "bg-[#54A047]",
  LillaScene: "bg-[#be01be]",
};
const EventsPage = () => {
  const [bands, setBands] = useState([]);
  const [sorterOrder, setSorterOrder] = useState("A-Å");

  useEffect(() => {
    const sorterData = async () => {
      const data = await getData();
      setBands(data);
    };
    sorterData();
  }, []);
  const toggleSortering = () => {
    setSorterOrder(sorterOrder === "A-Å" ? "Å-A" : "A-Å");
  };

  const sortedeBands = [...bands].sort((a, b) => {
    const navnA = a.name.toLowerCase();
    const navnB = b.name.toLowerCase();
    return sorterOrder === "A-Å"
      ? navnA.localeCompare(navnB)
      : navnB.localeCompare(navnA);
  });

  return (
    <main className="">
      <img src="/images/Hero3.png" alt="" />
      <h1 className="text-2xl text-center p-5">Line up</h1>
      <section className="flex justify-center p-5">
        <div className="flex justify-evenly text-white  bg-[#333] p-[1rem] w-[80rem]">
          <button onClick={toggleSortering} className="text-white">
            {sorterOrder === "A-Å" ? "A-Å" : "Å-A"}
          </button>
          <p>RØD SCENE</p>
          <p>BLÅ SCENE</p>
          <p>LILLA SCENE</p>
        </div>
      </section>
      <section className="max-w-4xl pb-5  gap-[2rem] grid grid-cols-3 mx-auto text-center">
        {sortedeBands.map((Bands) => (
          <article>
            <Link href={`/events/${Bands.id}`} key={Bands.id}>
              <div
                className={`${stageFarver[Bands.stage.split(" ").join("")]}`}
              >
                <img
                  className="w-[467px] h-[267px]"
                  src={Bands.image.src}
                  alt=""
                />
                <p>{Bands.name}</p>
                <p>
                  {Bands.day} Kl:{Bands.time}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
};

export default EventsPage;
