import axios from "axios"
import { useMutation } from "react-query"


export const useAddNewUser = () => {

    const addUser = (user) =>{
      return axios.post("https://api-spartan-143a3bbd2958.herokuapp.com/users", user)
    }

    return useMutation(addUser, {
      onSuccess: () =>{
          queryClient.invalidateQueries("users")
      }
    })
}
