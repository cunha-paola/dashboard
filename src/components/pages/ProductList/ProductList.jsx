import "./productlist.css"
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
import { productRows } from "../../../dummyData";
import { useState } from "react";


export default function ProductList() {

  const [data,setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', 
      headerName: 'ID', 
      width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 220,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.img} alt="" className="productListImg" />
            {params.row.name}
          </div>
        )
      }
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 180,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 140,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/product/" + params.row.id}>
            <button className="productListEdit">Edit</button>
          </Link>
          <Delete className="productListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
