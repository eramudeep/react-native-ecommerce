export default async (url,options)=>{
   const respounce =await fetch(url,options).then(respounce=> respounce.json())
   return respounce
}