
import { useEffect,useState } from 'react';
import { Products, Navbar, Cart, Checkout, Orderstatus} from './Components';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
//   let products = [
//     {id:1,name:"shoes",description:"Running Shoes",price:"500",img:"https://assets.ajio.com/medias/sys_master/root/hc4/h09/13018715553822/-288Wx360H-460342492-blue-MODEL.jpg"},
//     {id:2,name:"shoes",description:"Running Shoes",price:"500",img:"https://assets.ajio.com/medias/sys_master/root/hc4/h09/13018715553822/-288Wx360H-460342492-blue-MODEL.jpg"},
//     {id:3,name:"shoes",description:"Running Shoes",price:"500",img:"https://assets.ajio.com/medias/sys_master/root/hc4/h09/13018715553822/-288Wx360H-460342492-blue-MODEL.jpg"},
//     {id:4,name:"shoes",description:"Running Shoes",price:"500",img:"https://assets.ajio.com/medias/sys_master/root/hc4/h09/13018715553822/-288Wx360H-460342492-blue-MODEL.jpg"}
// ];
let [products,setProducts] = useState([]);
let [cart,setCart] = useState([]);
let [total,setTotal] = useState(0);
const [option,setOption]= useState("All");
const [filtered,setFiltered]=useState([]);

let additems = async()=>{
  let additem = await axios.post(`http://localhost:${port}/users/additem`);
}

let getitems = async()=>{
  let response = await axios.get('http://localhost:4000/users/getitems');
  // console.log(response.data);
  setProducts(response.data.items);
  setFiltered(response.data.items);
}
// console.log(products);

let getCart = async()=>{
  let response = await axios.get('http://localhost:4000/users/getcartitems');
  // console.log(response.data.cartitems);
  setCart(response.data.cartitems);
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
  additems();
  setTimeout(getitems,1800);
  getCart();
},[])

let handleAddtoCart = async(id,quantity)=>{
  let response = await axios.post('http://localhost:4000/users/addtocart',
   {id,quantity});
   getCart();
 }

 let handleCartquantity = async(id,quantity)=>{
   let response = await axios.put('http://localhost:4000/users/updatequantity/',
   {id,quantity});
  //  console.log(response.data);
  setTotal(0);
   getCart();
  }

 let handleTotal = async()=>{
  setTotal(0);
  console.log({total});
  let priceArr;
  cart.map((item)=>{
    //  console.log(item.OfferPrice)
    console.log({total});
    if(item.producttype == 'Mobile'){
      let priceint = item.OfferPrice.slice(1, item.OfferPrice.length);
    //  console.log({priceint});
      priceArr= priceint.split(',');}
      
     else{
       priceArr = item.OfferPrice.split(',');
     }
    //  console.log({priceArr});
    let price = priceArr.join('');
    // console.log(price);
    //  console.log(priceint,priceArr,price);
      total+=(Number(price)*Number(item.quantity));
    })
   console.log({total});
   setTotal(total);
 };

 useEffect(()=>{
  console.log('useEffect');
  setTotal(0);
  handleTotal();
},[cart])


 let handleRemoveitem = async (id)=>{
  console.log({id});
    let response = await axios.delete('http://localhost:4000/users/deletefromcart/'+id);
    console.log({id});
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
