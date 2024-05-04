import axios from "axios"
import { useQuery, useQueryClient } from "react-query"
import { useParams } from "react-router-dom";

export const useUserDetails = (userId) => {

  
    const fetchUser = () =>{
        return axios.get(`https://api-spartan-143a3bbd2958.herokuapp.com/users/${userId}`)
    }

    const queryClient = useQueryClient()

  return useQuery(["users", userId], fetchUser, {
    initialData: () => {
      const user = queryClient?.getQueryData("users")?.data?.find((user) => user.id === parseInt(userId));
      if(user){
        return{
          data: user
        }
      }else{
        return undefined
      }
    }
  })
}