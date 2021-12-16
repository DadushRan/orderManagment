import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddOrder from "./AddOrder";
import EditUser from "./EditUser";
import HistoryUserOrder from "./HistoryUserOrder";

export default function User(props) {

  const [showAddOrder, setShowAddOrder] = useState(false);

    const showAddOrderForm = (state) => {
      setShowAddOrder (state)
      setShowEditUser (false)
      setShowOrderHistory (false)
    }


  const [showEditUser, setShowEditUser] = useState(false);

    const showEditUserForm = (state) => {
      setShowEditUser (state) 
      setShowAddOrder (false) 
      setShowOrderHistory(false)
    }


  const [showOrderHistory, setShowOrderHistory] = useState(false);

    const showOrderHistoryBlock = (state) => {
      setShowOrderHistory (state)
      setShowEditUser(false)
      setShowAddOrder(false) 
    }


  const delOrder = (element, indexToRemove) => {
    const newOrdersList = props.user.orders.filter((e, currIndex) => currIndex !== indexToRemove)
    const newUsers = props.users.filter((e, index)=>(e.freindNumber !== props.user.freindNumber))
    props.user.orders = newOrdersList
    props.setUser(props.user);
    props.setUsers([props.user,...newUsers]);
  };


  const delAllOrder = () => {
    const newUsers = props.users.filter((e, index)=>(e.freindNumber !== props.user.freindNumber))
    props.user.orders = []
    props.setUser(props.user);
    props.setUsers([props.user,...newUsers]);
  };

  
  const duplicateOrder =(element, i) => {
    props.user.orders.unshift(element)
    props.setUser(props.user)
    const newUsers = props.users.filter((e, index)=>(e.freindNumber !== props.user.freindNumber))
    props.setUsers([props.user,...newUsers]);
    // console.log( props.users.freindNumb[element])
  };

  const OrderConfirm = (orders, freindNumber, phoneNumb, e) =>{  

    if(props.user.orders === ''){
      alert('העגלה שלך ריקה אנא בחר לפני מוצר ב-"הוסף הזמנה +" שנמצא למעלה.')
      e.preventDefault ()
      return
    }
    if(props.user.freindNumber === 'Guest') (                             // אם זה קניה במזומן אז התרע לגשת לקופה לתשלום, 0 = אורח
      alert('גש לקופה לתשלום')
    )
    const orderNumber = props.allHistoryOders.length+1   // מביא את אורח ההזמנות ומפרש למספר ההזמנה של הלקוחת זמני עד שיהיה דאטה בייס ואז זה יגיע משם  

    alert('בתיאבון, ההזמנה שלך התווספה בהצלחה! :) אנא המתן שיקראו לך ')
    props.user.history.unshift({orderNumber, fullName, freindNumber, phoneNumb, date, time, sumPrices, orders})    
    props.user.orders = []
    props.setUser(props.user)
    const newUsers = props.users.filter((e, index)=>(e.freindNumber !== props.user.freindNumber))
    
    if(props.user.freindNumber === 'Guest'){
      props.user.firstName = 'אורח'
      props.user.lastName  ='Guest'
    }
    props.setUsers([props.user,...newUsers]);
    props.allHistoryOders.unshift({orderNumber, fullName, freindNumber, date, time, sumPrices, orders})
    // props.setUser()        // הגנה מפני חזרה ללקוח לאחר אישור הזמנה, צריך לבטל את הדף שמראה באג
  };

  

  const getIndexToEdit = (index) => {
    props.setIndexToEdit(index); 
      }

  var today = new Date(),
  date = today.getDate() + '/' + (today.getMonth() + 1) ,  //   פונקציה שרושמת את התאריך בהיסטוריה של היוזר 
  time = today.getHours() + ':' + today.getMinutes();       //   פונקציה שרושמת את השעה בהיסטוריה של היוזר
  
  const sumPrices =  (props.user.orders.reduce((a, b) => a+b.prodPrice,0))+(props.user.orders.reduce((a, b) => a+b.extraPayOnCheese,0)) ;     //   פונקציה שמחברת את כל המוצרים שברשימת הזמנות 
  
  const fullName = props.user.firstName + '-' + props.user.lastName;

  const yesOrNoExtraCheeseBox = (element) =>{
    if(element === 'כן'){
      return ('** תוספת-גבינה **')
    }
    else{
      return
    }
  }

  const orderDetails = (e) =>{
    alert(
    e.mealOrRegular+'-'+e.prodType+"\n"+
    '*הערה*: '+'"'+ e.note+'...'+'"'+"\n"+
    '*אלף-האיים*: '+ e.elefHaihimSouce+"\n"+
    '*חסה*: '+ e.lettuce+"\n"+
    '*עגבנייה*: '+ e.tomato+"\n"+
    '*מלפפון-חמוץ*: ' +e.pickles+"\n"+
    '*תוספת גבינה*: ' +e.extraCheese+"\n"+
    '*חלפיניו*: ' +e.hotPepper+"\n"+
    '*קטשופ*: ' +e.ketchup+"\n"+
    '*מיונז*: ' +e.mayonnaise+"\n"
  )}
  
  return (
        <div style={{marginTop:'5px'}}>

          <div style={{boxSizing:'-moz-initial', color:'#FFFFFF',backgroundColor:'#1771E6', width:'200px', marginRight:'auto',marginLeft:'auto', border:'1.5px solid black', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
         <button onClick={()=>showEditUserForm(!showEditUser)} style={{float:'left', marginLeft:'7px', marginTop:'7px', border:'1.5px solid black', borderRadius:'5px', fontSize:'10px', cursor:'pointer'}}>ערוך</button>
         <button onClick={()=>showOrderHistoryBlock(!showOrderHistory)} style={{float:'right', marginRight:'7px', marginTop:'7px', border:'1.5px solid black', borderRadius:'5px', fontSize:'10px', cursor:'pointer'}}>היסטוריה</button>

            <h3 style={{marginBottom:'5px',marginTop:'25px'}}> {fullName} </h3>
            <p style={{marginBottom:'5px',marginTop:'5px', fontSize:'13px'}}>מס' חבר: {props.user.freindNumber}</p>
            <p style={{marginBottom:'5px',marginTop:'5px', fontSize:'13px'}}> {props.user.phoneNumb} </p>
          </div>

          {showEditUser? <EditUser user={props.user} users={props.users} setUser={props.setUser} setUsers={props.setUsers}></EditUser> : ''}
          {showOrderHistory? <HistoryUserOrder user={props.user} setShowOrderHistory={setShowOrderHistory}></HistoryUserOrder> : ''}

          <div style={{backgroundColor:'#fce8ab', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} >
          <hr/>
            <h2 style={{marginTop:'1px', marginLeft:'100px',textDecoration:'underline', padding:'3px'}}>
              <button onClick={()=>showAddOrderForm(!showAddOrder)} style={{backgroundColor:'#6ae236', marginLeft:'7px', cursor:'pointer', borderRadius:'5px'}}> הוסף הזמנה +</button>
              ההזמנות שלי
            </h2>
              {showAddOrder? <AddOrder addNewOrder={props.addNewOrder} setShowAddOrder={setShowAddOrder}></AddOrder> : ''}
          <hr/>
              <button onClick={()=>delAllOrder()} style={{backgroundColor:'#f74b31', marginLeft:'5px', marginTop:'-10px', cursor:'pointer', borderRadius:'5px', float:'left', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>  מחק הכל X</button>            
          </div>


          <div style={{marginTop:'20px'}}>
          {props.user.orders.map((element, i) => {
            return <div style={{backgroundColor:'#FFFFFF', display:'inline-block',width:'200px',margin:'5px', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>

                <button onClick={()=> orderDetails(element)} style={{float:'left', marginLeft:'7px', marginTop:'7px', border:'1.5px solid black', borderRadius:'5px', fontSize:'10px', cursor:'pointer'}}>פרטים</button>
                <br/>
              <h4 style={{marginTop:'5px'}}>
                {element.mealOrRegular} - {element.prodType} <br />
               {yesOrNoExtraCheeseBox(element.extraCheese)}
                <hr/>
                מחיר: ₪{element.prodPrice+element.extraPayOnCheese} <br/>
            
                <button onClick={()=>duplicateOrder(element, i)} style={{backgroundColor:'#fce8ab', borderRadius:'5px', cursor:'pointer'}}>שכפל(1X)</button>
                <br/>
                <Link to="/EditOrder"><button onClick={()=>getIndexToEdit(i)} style={{backgroundColor:'#1771E6', borderRadius:'5px', cursor:'pointer'}}> ערוך </button></Link>
                
                <button onClick={ ()=>delOrder(element, i)} style={{backgroundColor:'rgb(242, 53, 53)', marginRight:'3px', borderRadius:'5px', cursor:'pointer'}}>X</button>
             </h4>
            </div>
           })}
            </div> 

          
          <div style={{backgroundColor:'#fce8ab', paddingBottom:'15px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <hr/>
            <h4><div>
              סה"כ לתשלום: 
            <br/>
              ₪{sumPrices}
            </div></h4>

            <Link to="/"><button onClick={(e)=>OrderConfirm( props.user.orders, props.user.freindNumber,props.user.phoneNumb ,e)} style={{backgroundColor:'#6ae236', cursor:'pointer', borderRadius:'5px'}}>ההזמנה שלך מוכנה?!? <br/> לחץ כאן<br/> </button></Link>
          </div>


          </div>
        );
  }
