import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal'

import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart); //redux 简化写法
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]); // 当 store cartItems 改变时，重新计算总价

  useEffect(() => {
    dispatch(getCartItems('random')); // render 时获取数据
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
