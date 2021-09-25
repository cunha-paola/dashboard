import "./userlist.css"
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
import { userRows } from "../../../dummyData";
import { useState } from "react";


export default function UserList() {

  const [data,setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', 
      headerName: 'ID', 
      width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 220,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 140,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <Delete className="userListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
