import { Form } from "../components/Form"
import { useAddNewUser } from "../hooks/useAddNewUser"

export const AddNewUserPage = () => {
   const {mutate: addUser} = useAddNewUser()

   const handleAddUser = (user) =>{
    addUser(user)
   }

  return (
    <Form titleButton="Add User" onSubmit={handleAddUser} initialValue={{}}/>
  )
}
