import React, { useState } from 'react'
import {Link} from 'react-router-dom';




export default function Worker(props) {
  

const CardDetails = (e,id, handleSelect, selected) => {
  return (
    <div key={id}  >
    אלף-האיים: {e.elefHaihimSouce}<br/>
    חסה: {e.lettuce}<br/>
    עגבנייה: {e.tomato}<br/>
    בצל-סגול: {e.purpleOnion}<br/>
    מלפפון-חמוץ: {e.pickles}<br/>
    <hr style={{width:'110px'}}/>
    תוספת גבינה: {e.extraCheese}<br/>
    חלפיניו: {e.hotPepper}<br/>
    קטשופ: {e.ketchup}<br/>
    מיונז: {e.mayonnaise}<br/>
    <hr style={{width:'110px'}}/>
    הערה:"{e.note}"<br/><br/>
    </div>
  );
};
  const [state, setState] = useState({selected:[]})
    
    const handleSelect =( id, orderId )=>{
      setState({selected: { ...state.selected,  [id]: !state.selected[id] }})
       return  
    };


    const passToReady = ( indexReady) => {
   
        // console.log(props.allHistoryOders[i])
        // const newAllHistoryOders = props.allHistoryOders[i].filter((e, index)=>(index !== indexReady))
        // props.setAllHistoryOders([...newAllHistoryOders]);
      };


    const yesOrNoExtraCheeseBox = (element) =>{
        if(element == 'כן'){
          return ('** תוספת-גבינה **')
        }
        else{
          return
        }
      }
      
    return (
    <div>
                        
            <h1 style={{backgroundColor:'#FFFFFF'}}>מטבח</h1>

            <h4 style={{backgroundColor:'#FFFFFF'}}>הזמנות להכנה</h4>
          {props.allHistoryOders.map((e, id) => {
              return <div key={id}  style={{ display:'inline-grid',  backgroundColor:'#FCE8AB', width:'150px',margin:'10px', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>

                       <div style={{backgroundColor:'#a09c90'}}>
                           <h5 style={{float:'left', marginLeft:'5px', marginTop:'1px', marginBottom:'1px'}}>{e.time}</h5>
                           <h5 style={{float:'right', marginRight:'5px', marginTop:'1px', marginBottom:'1px'}}>({e.orderNumber})</h5><br/>
                        </div>   

                        <h4 style={{ marginTop:'10px', marginBottom:'1px'}}>
                          <button style={{float:'left', marginLeft:'5px', backgroundColor:'#6ae236', cursor:'pointer', borderRadius:'5px'}} onClick={(id) => passToReady(id)}>מוכן</button>
                          {e.fullName} ({e.freindNumber})
                        </h4>
                        
                                                
                        <h5> {props.allHistoryOders[id].orders.map( (e, orderId) => {
                          const handleClick = () => handleSelect(id, orderId);
                          console.log(id.orderId)

                            return <div key={orderId} style={{ border: '1px solid black', backgroundColor:'#FFFFFF', margin:'5px'}}>
             <div onClick={handleClick} style={{backgroundColor:'#f74b31', cursor:'pointer' }}> {e.mealOrRegular} - {e.prodType}<hr style={{width:'110px', marginBottom:'-1px', marginTop:'1px'}}/> {yesOrNoExtraCheeseBox(e.extraCheese)}<br/>
             </div>
             
               <div style={{display: state.selected[id] ? "block": 'none'}} >{CardDetails(e,id,handleSelect,state.selected)}
               </div>
               
            </div>
        })
    }</h5>

<h5 style={{marginTop:'-5px'}}> סה"כ להזמנה: {e.sumPrices}₪</h5>
                </div>
                })
            }
            
            <h4 style={{backgroundColor:'#FFFFFF'}}>הזמנות מוכנות</h4>

            {/* {props.readyOders.map((e, i) => {
              return <div style={{ border: '1px solid black', backgroundColor:'#FFFFFF', margin:'5px' }}>

                        <h3>
                             {e}, 

                          <button style={{float:'left', marginLeft:'5px', backgroundColor:'#f74b31', cursor:'pointer', borderRadius:'5px'}} onClick={() => passYoReady(i)}>מוכן</button>
                        </h3>
                </div>
                })
            } */}
        
        </div>
    )
}
