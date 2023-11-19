import './Dashboard.scss';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
   { field: 'id', headerName: 'ID', width: 70 },
   { field: 'user', headerName: 'User', width: 130 },
   { field: 'hotel', headerName: 'Hotel', width: 130 },
   { field: 'room', headerName: 'Room', width: 90 },
   { field: 'date', headerName: 'Date', width: 200 },
   { field: 'price', headerName: 'Price', width: 80 },
   { field: 'payment', headerName: 'Payment Method', width: 160 },
   { field: 'status', headerName: 'Status', width: 160 },
];
const rows = [
   {
      id: '1',
      user: 'test',
      hotel: 'Pro',
      room: '301',
      type: 'date',
      date: '',
      price: '$100',
      payment: 'Credit Card',
      status: 'CheckIn',
   },
   {
      id: '2',
      user: 'test',
      hotel: 'Pro',
      room: '301',
      date: '04//04/2023 - 04//04/2023',
      price: '$100',
      payment: 'Credit Card',
      status: 'CheckIn',
   },
];

function Dashboard() {
   return (
      <>
         <div className="widget__container">
            <div className="widget__items">
               <h2>Users</h2>
               <p>100</p>
               <i className="fa-regular fa-user text-error bg-red-100"></i>
            </div>
            <div className="widget__items">
               <h2>Orders</h2>
               <p>100</p>
               <i className="fa-solid fa-cart-shopping text-warning bg-yellow-100"></i>
            </div>
            <div className="widget__items">
               <h2>Earnings</h2>
               <p>100</p>
               <i className="fa-solid fa-dollar-sign text-success bg-green-100"></i>
            </div>
            <div className="widget__items">
               <h2>Balance</h2>
               <p>100</p>
               <i className="fa-solid fa-wallet text-purple-800 bg-purple-100"></i>
            </div>
         </div>

         <section className="table__container">
            <h2>Lates Transaction</h2>

            <div style={{ height: 400, width: '100%' }}>
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
            </div>
         </section>
      </>
   );
}

export default Dashboard;
