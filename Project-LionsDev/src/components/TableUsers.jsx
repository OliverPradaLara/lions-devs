// hacer tabla html 

import { useFetch } from "../hooks/useFetch"


export const TableUsers = () => {

const {data} = useFetch()



  return (
    <div className="tabla">
       <table >
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
    {
    data?.data.map((table) =>(
         <tr>
        <td>{table.name}</td>
        <td>{table.email}</td>
        <td>{table.city}</td>
        <td>{table.username}</td>
        <td>{table.website}</td>

 
        <td >
        <div className="tdButton">
            <button className="buttonEdit">Edit</button>
            <button className="buttonView">View</button>
            <button className="buttonDelete">Delete</button>
        </div>
        </td>
        
    </tr> 
       ) )
}
</tbody>

</table>
</div>
  )
}


// El formulario debe tener los siguientes campos
// Name
// Email
// Gender
// Username
// Website