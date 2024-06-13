import axios from 'axios'

export default async function getImages(query:string){
    const res = await axios.get(`https://pixabay.com/api/?key=44340976-b9f9e52634db8b75a03f280af&q=${query}`)   
    return res.data
}