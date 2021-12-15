import React, { useState } from 'react'
import {Link} from 'react-router-dom';



export default function Admin(props) {


  const [showIO, setShowIO] = useState(false);

  const showInfoOrder = (state, i) => { 
    setShowIO (state) 
  }  
  
  
    const delUser = ( indexToRemove) => {
   
        const newUsers = props.users.filter((e, index)=>(index !== indexToRemove))
        console.log(indexToRemove)
        props.setUsers([...newUsers]);
      };
      
    return (<div>
                        
            <h1 style={{backgroundColor:'#FFFFFF'}}>מנהל</h1>



            <h4 style={{backgroundColor:'#FFFFFF'}}>היסטוריית-הזמנות</h4>
            {props.allHistoryOders.map((e, i) => {
              return <div style={{backgroundColor:'#FCE8AB', display:'inline-grid',width:'150px',margin:'10px', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>

                       <div style={{backgroundColor:'#a09c90'}}>
                           <h5 style={{float:'left', marginLeft:'5px', marginTop:'1px', marginBottom:'1px'}}>{e.time}, {e.date}</h5>
                           <h5 style={{float:'right', marginRight:'5px', marginTop:'1px', marginBottom:'1px'}}>({e.orderNumber})</h5><br/>
                        </div>   

                        <h4 style={{ marginTop:'10px', marginBottom:'1px'}}>
                          {/* <button style={{float:'left', marginLeft:'5px', backgroundColor:'#6ae236', cursor:'pointer', borderRadius:'5px'}} onClick={(i) => delOrderFromHistory(i)}>מחק</button> */}
                             {e.fullName} ({e.freindNumber})
                        </h4>
                        
                                                
                        <h5> {props.allHistoryOders[i].orders.map((e, i) => {
          return <div style={{ border: '1px solid black', backgroundColor:'#FFFFFF', margin:'5px', marginBottom:'5px'}}>
             <div onClick={(i)=>showInfoOrder(!showIO, i)} style={{backgroundColor:'#f74b31', cursor:'pointer' }}> {e.mealOrRegular} - {e.prodType}<hr style={{width:'110px', marginBottom:'-1px', marginTop:'1px'}}/> <br/></div>
             
             {showIO? <div>
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
               </div> : ''}

          </div>
        })
      }</h5>
                </div>
                })
            }
            {/* {props.allHistory.map((e, i) => {
            return <div style={{ border: '1px solid black', backgroundColor:'#FFFFFF', margin:'5px' }}>

                </div>
                })
            } */}
 
                

            <h4 style={{backgroundColor:'#FFFFFF'}}>ניהול-לקוחות </h4>
          {props.users.map((e, i) => {
            return <div style={{ border: '1px solid black', backgroundColor:'#FFFFFF', margin:'5px' }}>

                        <h3> {e.firstName}-{e.lastName} ,
                         מספר חבר: {e.freindNumber}
                          <button onClick={() => delUser(i)}>X</button>
                        </h3>
                        
                     
                        {/* <h3> {e.Actions.value} </h3> */}
                                              
                    {/* <button onClick={() => showActions (!show) }>action</button><br />
                    
                    <div> {hidden()}
                    { show? <button className="delButton" onClick={() => props.delUser(i)}> Cancel </button> : ''}
                    </div> */}

                </div>
                })
            }
            
        </div>
    )
}
