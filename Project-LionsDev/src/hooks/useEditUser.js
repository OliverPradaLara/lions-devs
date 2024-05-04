import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const updateCategory = async (newData) => {
    const response = await axios.put(
        `https://api-spartan-143a3bbd2958.herokuapp.com/users/${newData.id}`,newData
    );
    return await response.data;
  };

  export const useEditUser = () => {
    const queryClient = useQueryClient();
    return useMutation(updateCategory, {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
      onError: (error) => {
        console.log(error);
      },
      onSettled: () => {},
    });
  };