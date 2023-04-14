import axios from 'axios'

export const baseUrl= "https://bayut.p.rapidapi.com"


  export const fetchApi = async ( url ) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'ea08fe0320msh8eb50f032860a01p12e680jsnf1068985600c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return await data
  }