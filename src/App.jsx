import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import User from './pages/user/User';
import Hotel from './pages/hotel/Hotel';
import Room from './pages/rooms/Room';
import Transaction from './pages/transaction/Transaction';
import NewHotel from './pages/newHotel/NewHotel';
import NewRoom from './pages/newRoom/NewRoom';
function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<DefaultLayout />}>
               <Route index element={<Dashboard />}></Route>
               <Route path="user" element={<User />}></Route>
               <Route path="hotel" element={<Hotel />}></Route>
               <Route path="room" element={<Room />}></Route>
               <Route path="transaction" element={<Transaction />}></Route>
               <Route path="newHotel" element={<NewHotel />}></Route>
               <Route path="newRoom" element={<NewRoom />}></Route>
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
