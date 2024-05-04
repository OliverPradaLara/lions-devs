import { useParams } from "react-router-dom"
import { Form } from "../components/Form"
import { useUserDetails } from "../hooks/useUserDetails"
import { useEditUser } from "../hooks/useEditUser"


export const EditUserPage = () => {
  const {userId} = useParams()

  const id = Number(userId)

  const {data} = useUserDetails(id)
  const {mutate: updateUser} = useEditUser()

  console.log(data)
  const handleEditUser = (updateDataUser) => {
    updateUser({
      id,
      ...updateDataUser,
    });
  };
  return (
    <Form titleButton="Edit User" initialValue={data?.data} onSubmit={handleEditUser}/>
  )
}
