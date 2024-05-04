import {Route, Routes} from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AddNewUserPage } from "../pages/AddNewUserPage"
import { EditUserPage } from "../pages/EditUserPage"
import { TableUsersPage } from "../pages/TableUsersPage"
import { UserDetailsPage } from "../pages/UserDetailsPage"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/addNewUser" element={<AddNewUserPage/>}/>
        <Route path="/editUserPage" element={<EditUserPage/>}/>
        <Route path="/tableUsersPage" element={<TableUsersPage/>}/>
        <Route path="/userDetails/:id" element={<UserDetailsPage/>}/>
      </Routes>
    </>
  )
}
