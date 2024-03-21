import { NextPage } from "next";

interface TypePostingData {
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}
interface TypePostingFetchResponseData {
  resultData:TypePostingData;
}
const fetchData = async ():Promise<TypePostingFetchResponseData> => {
  const baseUrl = process.env.LOCALHOST_API_URL;
  const res = await fetch(`${baseUrl}/caching`);
  const data = await res.json();
  const parseJSON = JSON.parse(JSON.stringify(data));
  console.log(Object.values(parseJSON))
  

  return data;
}

// export async function generateStaticParams() {
//   const baseUrl = process.env.LOCALHOST_API_URL;
//   const res = await fetch(`${baseUrl}/caching`);
//   const data = await res.json();
//   const parseJSON = JSON.parse(JSON.stringify(data));
//   const dataValues = Object.values(parseJSON);
//   console.log(dataValues);
//   return(

//   )
// }
const CachingPage:NextPage = async () => {
  const data = await fetchData();
  const postingData = data.resultData;
  
  console.log(data);
  return(
    <>
      {postingData.title}
    </>
  )
}

export default CachingPage;