// hacer tabla html

import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useDeleteUser } from "../hooks/useDeleteUser";

export const TableUsers = () => {

  const {mutate: deleteUser} = useDeleteUser()
  const navigate = useNavigate();

  const { data } = useFetch();

  const handleNavigate = (url) => {
    navigate(`${url}`);
  };

  const handleDelete = (id) =>{
    deleteUser(id)
  }

  const handleNavigateToEdit = (id) =>{
    navigate(`/editUserPage/${id}`)
  }

  return (
    <>
      <button onClick={()=> handleNavigate("/addNewUser")}>add new user</button>

      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th className="name">Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Username</th>
              <th>Website</th>
              <th className="action">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data?.data.map((table) => (
              <tr>
                <td>{table.name}</td>
                <td>{table.email}</td>
                <td>{table.city}</td>
                <td>{table.username}</td>
                <td>{table.website}</td>

                <td>
                  <div className="tdButton">
                    <button
                      className="buttonEdit"
                      onClick={() => handleNavigateToEdit(table.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="buttonView"
                      onClick={() =>
                        handleNavigate(`/userDetails/:${table.id}`)
                      }
                    >
                      View
                    </button>
                    <button className="buttonDelete" onClick={()=> handleDelete(table.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
