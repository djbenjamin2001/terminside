

const getData = async (newsId) => {
  let res = await fetch(`http://localhost:4000/news/${newsId}`)
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return await res.json();
};
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString("da-DK", options);
  };
const NewsIdpage = async ({ params: { newsId } }) => {
  const details = await getData(newsId);
  const formattedDate = formatDate(details.date);
  console.log(details);
  return (
    <main className="flex flex-col justify-center items-center p-5 space-y-5">
    <h1 className="text-2xl font-bold">{details.title}</h1>
     <img className="w-[55rem] h-[25rem]" src={details.image.src} alt="" />
     <p className="text-xl font-semibold">{details.author}</p>
     <p className="text-xl font-semibold">{formattedDate}</p>
      <p className="w-[55rem]">{details.body}</p>
    </main>
  );
};

export default NewsIdpage;
