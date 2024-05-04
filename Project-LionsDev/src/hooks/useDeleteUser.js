import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

export const useDeleteUser = () => {

    const deleteUser = (userId) =>{
        return axios.delete(`https://api-spartan-143a3bbd2958.herokuapp.com/users/${userId}`)
    }

    const queryClient = useQueryClient()

  return useMutation(deleteUser, {
    onSuccess: () =>{
        queryClient.invalidateQueries("users")
    }
  })
}