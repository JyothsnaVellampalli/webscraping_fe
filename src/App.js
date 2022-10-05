
import { useEffect,useState } from 'react';
import { Products, Navbar, Cart, Checkout, Orderstatus} from './Components';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
let [products,setProducts] = useState([]);
let [cart,setCart] = useState([]);
let [total,setTotal] = useState(0);
const [option,setOption]= useState("All");
const [filtered,setFiltered]=useState([]);

let getitems = async()=>{
  let response = await axios.get('/users/getitems');
  console.log(response.data.items);
  setProducts(response.data.items);
  setFiltered(response.data.items);
}
// console.log(products);

let getCart = async()=>{
  let response = await axios.get('/users/getcartitems');
  console.log(response.data);
  // console.log(response.data.cartitems);
  setCart(response.data.cartitems);
  setTotal(response.data.totalPrice);
}

let handleOption=async (opt)=>{
  await setOption(opt);
  // console.log(opt);
  if(opt=='All'){setFiltered(products)}
  else if(opt=='Watches'){
    let ress = products.filter((product)=>product.producttype=='Watch');
    // console.log(ress);
    setFiltered(ress);
  }
  else if(opt=="Mobiles"){
    let res = products.filter((product)=>product.producttype=="Mobile");
    // console.log(res);
    setFiltered(res);
  }
}
// console.log(filtered);
// console.log({option});

useEffect(()=>{
  setTimeout(getitems,1800);
  getCart();
},[])

let handleAddtoCart = async(product)=>{
  console.log(product);
  let response = await axios.post('/users/addtocart',
   {id: product.id, quantity: 1});
   getCart();
 }

 let handleCartquantity = async(id,quantity)=>{
   let response = await axios.put('/users/updatequantity/',
   {id,quantity});
   getCart();
  }

 let handleRemoveitem = async (item)=>{
    let response = await axios.delete('/users/deletefromcart/'+item.id);
    console.log(item);
    console.log(response.data);
     getCart();
 }
 
  return <>
  <BrowserRouter>
  <Navbar selected={cart.length} products={products} handleOption={handleOption}/>

  <Routes>
    <Route path='/' element={<Products products={products} filtered={filtered} AddtoCart={handleAddtoCart}/>} />
    <Route path='/cart' element={<Cart cart={cart} handleCartquantity={handleCartquantity} total={total} handleRemoveitem={handleRemoveitem} />} />
    <Route path='/checkout' element={<Checkout cart={cart} total={total} setCart={setCart} setTotal={setTotal}/>} />
    <Route path='/orderstatus' element={<Orderstatus/>}/>
    </Routes>
  </BrowserRouter>

  </>
}

export default App;
