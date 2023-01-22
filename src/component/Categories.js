import {React,useState, useEffect} from 'react';
import './CategoriesStyle.css';
import {Card, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Head from './Head';
import Footer from './Footer';
import env from "react-dotenv";
import Loading from './Loading';


function Categories() {

  let [data,setData] =useState([])
  let Navigate = useNavigate()
  
  let[cartItems,setCartItems]=useState([])
  let [cart, setCart] = useState(0)
  let [total,setTotal] =useState(0)
  const [isadmin, setIsadmin] = useState(false)
const [isloading, setisloading] = useState(true)

  //Fetching the data from mockapi starts
  useEffect(() => {
    getData()
    if(localStorage.getItem('admin') === "true"){
      setIsadmin(true)
    }
    },[])
  
    
    function addToCart(item){
      setCart(cart+1);
      setTotal(prev=>prev+item.price)
      cartItems.push(item);
    }
  
  
    function deleteItem(e){
      cartItems.splice(cartItems.indexOf(e),1);
      setCart(cart-1);
      setTotal(prev=>prev-e.price)
  
    }

  //Fetching using Axios
  let IsAdmin = false
  let getData = async()=>{
    IsAdmin =  localStorage.getItem('admin')
    try {
    
      let modeldata = await axios.get(env.API_URL)
      let modelvalue = modeldata.data.data
      {modelvalue?setisloading(false):setisloading(true)}

    setData(modelvalue)
    } catch (error) {
      alert("Error Occured while fetching the data please contact developer")
      console.log(error)
    }
    

  }

  // Deleting the data using axios

  let handledelete = async(id)=>{
    try {
     let res = await axios.delete(env.API_URL+'delete/'+id)
      
      getData();
    } catch (error) {
      alert("Error occured while deleting the data please contact developer")
      console.log(error)
    }
  }

  //Fetching the data from mockapi ends
  return (<div>
    <Head></Head>
    
    {isadmin? "":
    <div  className='fixed-top d-flex justify-content-end pushdown' style={{padding:'0' }}>

                        <button class="btn btn-outline-dark"  type="button"  style={{ backgroundColor:'white' }} data-toggle="modal" data-target="#exampleModal">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
                            <br/>Price: <b>${total}</b> 
                        </button>
                    </div> }
                    
 
  <div className='container-fluid pushdown'>
  {isloading ? 
 <Loading/>
:
      <div className='row'>     
         {
           data.map((e,i)=>{

             return<div key={i}className='col'>
          <div>
             <Card style={{ width: '19rem' }}>
              <Card.Img variant="top" src={e.Imageone} id="modelimg"/>
               <Card.Body>
                <Card.Title>{i+1}. {e.Name}</Card.Title>
                 <Card.Text>
                  <p>Width x height:{e.width} inch X {e.height} inch </p>
                  <p> Material:{e.Material}</p>
                  <p>Non Battery operated</p>
                  <p>Age: {e.Age}</p>
                  <p>Assembly require: {e.Assembly}</p>
                  <p>Product Weight: {e.weight}</p>
                  <p>PRICE:{e.Price}/- (Incl. of all taxes)</p>
                 </Card.Text>
              
                 <div className='cardbtn'>  
              
                 {isadmin? 
                                   
           (<div>
            <Button variant="success edit" onClick={()=>{
              Navigate('/EditModel/'+e._id) 
             }}>Edit</Button> &nbsp;
            
            <Button variant="danger delete" onClick={()=>handledelete(e._id)}>Delete</Button>
            </div>):
                             ( <a class="btn btn-outline-dark mt-auto" onClick={()=>addToCart({name:e.Name, price:Number(e.Price),Image:e.Imageone})}>Add to cart</a>)

            }
            
            </div>
              
            
             
             
              
              </Card.Body>
              </Card>

              </div>
               
             </div>
           })
         } 
        
        
      </div> 
}
    </div>
    

    


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cart Items</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div>

        
<section className="CartItems">
 
 <div className="cartlist ">
  {
      
    cartItems.map(e=>{
      return<div  class="Cartdata">
        
    <div className="Itemtitle d-flex justify-content-center"> 
    

    <div class="card" style={{width:"18rem"}}>
  <img class="card-img-top" src={e.Image}alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{e.name}</h5>
    <p class="card-text">Price: {e.price} /- (Incl. of all taxes)</p>
    

    
    <button className="btn btn-danger" onClick={()=>deleteItem(e)}> Delete</button>
  </div>
  

</div>
    
    </div> 
      </div>
      
    })
  }
 </div>
</section>
</div>
      </div>
      <b class="card-text mx-auto">Total: {total} /- (Incl. of all taxes)</b>

      <div class="modal-footer">

        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      <Footer></Footer>

  </div>);
}

export default Categories;
