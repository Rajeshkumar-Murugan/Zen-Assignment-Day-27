import {React,useState, useEffect} from 'react';
import './CategoriesStyle.css';
import {Card, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
function Categories() {

  let [data,setData] =useState([])
  let Navigate = useNavigate()
  
  //Fetching the data from mockapi starts
  useEffect(() => {
    getData()
    },[])
  
  
  //Fetching using Axios
  let getData = async()=>{
    try {
      let d = await axios.get('https://61e2c3c93050a1001768226a.mockapi.io/3Dreams')
    setData(d.data)
    } catch (error) {
      alert("Error occured while fetching the data please contact developer")
      console.log(error)
    }
    

  }

  // Deleting the data using axios

  let handledelete = async(id)=>{
    try {
     let res = await axios.delete('https://61e2c3c93050a1001768226a.mockapi.io/3Dreams/'+id)
      console.log(res)
      getData();
    } catch (error) {
      alert("Error occured while deleting the data please contact developer")
      console.log(error)
    }
  }

  //Fetching the data from mockapi ends

  return (<div>
    <div className='container-fluid'>
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
              
            
             <Button variant="success edit" onClick={()=>{
              Navigate('/EditModel/'+e.id) 
             }}>Edit</Button> &nbsp;

              <Button variant="danger delete" onClick={()=>handledelete(e.id)}>Delete</Button>
              </div> 
              
              </Card.Body>
              </Card>

              </div>
               
             </div>
           })
         } 
        
        
      </div> 
    </div>
      

  </div>);
}

export default Categories;
