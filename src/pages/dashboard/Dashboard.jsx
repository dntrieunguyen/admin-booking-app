import React from 'react';
import './Dashboard.scss';
// import { DataGrid } from '@mui/x-data-grid';

const columns = [
   { field: 'id', headerName: 'ID', width: 70 },
   { field: 'firstName', headerName: 'First name', width: 130 },
   { field: 'lastName', headerName: 'Last name', width: 130 },
   {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
   },
   {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: params =>
         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
   },
];
const rows = [
   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Dashboard() {
   return (
      <>
         <div className="widget__container">
            <div className="widget__items">
               <h2>Users</h2>
               <p>100</p>
               <i class="fa-regular fa-user text-error bg-red-100"></i>
            </div>
            <div className="widget__items">
               <h2>Orders</h2>
               <p>100</p>
               <i class="fa-solid fa-cart-shopping text-warning bg-yellow-100"></i>
            </div>
            <div className="widget__items">
               <h2>Earnings</h2>
               <p>100</p>
               <i class="fa-solid fa-dollar-sign text-success bg-green-100"></i>
            </div>
            <div className="widget__items">
               <h2>Balance</h2>
               <p>100</p>
               <i class="fa-solid fa-wallet text-purple-800 bg-purple-100"></i>
            </div>
         </div>

         <section className="table__container">
            <h2>Lates Transaction</h2>
            {/* <div style={{ height: 400, width: '100%' }}>
               <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                     pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                     },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
               />
            </div> */}
         </section>
      </>
   );
}

export default Dashboard;
