import axios from "axios"
import { useQuery } from "react-query"

const getApi = () =>{
    return axios.get("https://api-spartan-143a3bbd2958.herokuapp.com/users")
}

export const useFetch = () => {
    const {data} = useQuery("users", getApi)
  return {
    data
  }
}
