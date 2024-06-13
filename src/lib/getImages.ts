import axios from 'axios'

export default async function getImages(){
    const res = await axios.get('https://pixabay.com/api/?key=44340976-b9f9e52634db8b75a03f280af')   
    // if(!res.ok){
    //   throw new Error('failed to fetch images')
    // }
    setTimeout(() => {
        
    }, 1000)
    return res.data
}