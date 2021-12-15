import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import User from './Components/User';
import AddOrder from './Components/AddOrder';
import EditUser from './Components/EditUser';
import EditOrder from './Components/EditOrder';
import {Link} from 'react-router-dom';
import Admin from './Components/Admin';
import Worker from './Components/Worker';
import HistoryUserOrder from "./Components/HistoryUserOrder";


export default function App(props) {

const [users, setUsers] = useState([ // מערך משתמשים
    {freindNumber:'Guest', firstName:'אורח',lastName:'Guest',phoneNumb:'0', pass:'', orders:[], history:[]},
    {freindNumber:'1', firstName:'רן',lastName:'דדוש', phoneNumb:'0524040047', pass:'0524040047', orders:[
      {mealOrRegular:'ארוחה', prodType:'גבינה כפול', note:'', prodPrice:75, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'לא', pickles:'כן', hotPepper:'כן', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
      {mealOrRegular:'ארוחה', prodType:'רגיל', note:'מדיום וול', prodPrice:35, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא',extraCheese:'כן', extraPayOnCheese:10 }
    ], history:[
      {orderNumber:4 ,fullName:"רן-דדוש", freindNumber:"1", date:"5/11", time:"12:58",sumPrices:80,orders:[
        {mealOrRegular:'ארוחה', prodType:'גבינה כפול', note:'מדיום וול', prodPrice:75, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'לא', pickles:'כן', hotPepper:'כן', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
        {mealOrRegular:'רגיל', prodType:'גבינה', note:'', prodPrice:35, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא', extraCheese:'כן', extraPayOnCheese:10 }
       ]
      }    ]},
    {freindNumber:'2', firstName:'אלברט',lastName:'כהן',phoneNumb:'0534040047', pass:'0534040047', orders:[     
      {mealOrRegular:'ארוחה', prodType:'גבינה כפול', note:'', prodPrice:45, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'לא', pickles:'כן', hotPepper:'כן', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
      {mealOrRegular:'ארוחה', prodType:'רגיל', note:'', prodPrice:35, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
    ], history:[]}
])

const [user, setUser] = useState(// משתמש נוכחי
  {freindNumber:'1', firstName:'רן',lastName:'דדוש', phoneNumb:'0524040047', pass:'0524040047', orders:[
        {mealOrRegular:'ארוחה', prodType:'גבינה כפול', note:'', prodPrice:75, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'לא', pickles:'כן', hotPepper:'כן', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
        {mealOrRegular:'ארוחה', prodType:'רגיל', note:'מדיום וול', prodPrice:50, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא',extraCheese:'כן', extraPayOnCheese:10 }],
        history:[          
      {orderNumber:4 ,fullName:"רן-דדוש", freindNumber:"1", date:"5/11", time:"12:58",sumPrices:80,orders:[
        {mealOrRegular:'ארוחה', prodType:'גבינה כפול', note:'מדיום וול', prodPrice:75, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'לא', pickles:'כן', hotPepper:'כן', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
        {mealOrRegular:'רגיל', prodType:'גבינה', note:'', prodPrice:35, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא', extraCheese:'כן', extraPayOnCheese:10 }       
        ]
      }]}
    ) 

const [allHistoryOders, setAllHistoryOders] = useState([
  {orderNumber:4 ,fullName:"רן-דדוש", freindNumber:"1", date:"5/11", time:"12:58",sumPrices:80,orders:[
        {mealOrRegular:'ארוחה', prodType:'גבינה כפול', note:'מדיום וול', prodPrice:75, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'לא', pickles:'כן', hotPepper:'כן', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
        {mealOrRegular:'רגיל', prodType:'גבינה', note:'', prodPrice:35, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא', extraCheese:'כן', extraPayOnCheese:10 }
       ]
      },
  {orderNumber:3 ,fullName:"אלברט-כהן", freindNumber:"2", date:"5/11", time:"12:52",sumPrices:70,orders:[
        {mealOrRegular:'ארוחה', prodType:'רגיל', note:'מדיום וול', prodPrice:35, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'לא', pickles:'כן', hotPepper:'כן', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
        {mealOrRegular:'רגיל', prodType:'צמחוני', note:'', prodPrice:35, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
        {mealOrRegular:'ארוחה', prodType:'רגיל', note:'', prodPrice:35, elefHaihimSouce:'לא', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 }
       ]
      },
  {orderNumber:2 ,fullName:"רן-דדוש", freindNumber:"1", date:"5/11", time:"12:58",sumPrices:80,orders:[
        {mealOrRegular:"צ'יפס", prodType:'', note:'תפנקו', prodPrice:45, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'לא', pickles:'כן', hotPepper:'כן', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 }       ]
      },
  {orderNumber:1 ,fullName:"אלברט-כהן", freindNumber:"2", date:"5/11", time:"12:52",sumPrices:70,orders:[
        {mealOrRegular:'ארוחה', prodType:'דאבל-רגיל', note:'מדיום וול', prodPrice:45, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'לא', pickles:'כן', hotPepper:'כן', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
        {mealOrRegular:'ארוחה', prodType:'צמחוני', note:'', prodPrice:35, elefHaihimSouce:'כן', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
        {mealOrRegular:'רגיל', prodType:'רגיל', note:'', prodPrice:35, elefHaihimSouce:'לא', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 },
        {mealOrRegular:'ארוחה', prodType:'גבינה', note:'', prodPrice:35, elefHaihimSouce:'לא', lettuce:'כן', tomato:'כן', purpleOnion:'כן', pickles:'כן', hotPepper:'לא', ketchup:'לא', mayonnaise:'לא',extraCheese:'לא', extraPayOnCheese:0 }
       ]
      },
    ])    

const addUser = (firstName, lastName, freindNumber,phoneNumb, pass) => { // פונקציית הוספת משתמש חדש למערך ולנוכחי
      setUsers([
        {firstName: firstName, lastName: lastName, freindNumber: freindNumber, phoneNumb: phoneNumb, pass: pass, orders:[], history:[]},
        ...users
      ]);
      setUser(
        {firstName: firstName, lastName: lastName, freindNumber: freindNumber, phoneNumb: phoneNumb, pass: pass, orders:[], history:[]}
      ); return
    }

const addNewOrder = (userOrder) => { // פונקציית הוספת הזמנה למשתמש נוכחי
      user.orders.unshift(userOrder);
      let newUsers = users.filter((element, index)=>(element.freindNumber != user.freindNumber))
      setUsers([user,...newUsers])
    }

    const [indexOrderToEdit, setIndexOrderToEdit] = useState(); // שולח את האינדקס של הארוחה שנבחרה לעריכה

const today = new Date(),
  date = today.getDate() + '/' + (today.getMonth() + 1) ,  //   פונקציה שרושמת את התאריך בהיסטוריה של היוזר 
  time = today.getHours() + ':' + today.getMinutes();       //   פונקציה שרושמת את השעה בהיסטוריה של היוזר


    return (
    <div className='App'>
      <Router>
       <div style={{backgroundColor:'#afa37e'}} >
         <Link to='/' style={{marginLeft:'5px', marginTop:'10px' , float:'left'}}>דף ראשי</Link>
        <h1 style={{display:'inline'}}>שף-בורגר</h1> 
        <div style={{marginRight:'5px', marginTop:'10px' ,float:'right'}}>
         {date}
         {/* <br/> {time} */}
        </div>
          <hr/>
       </div>
        <Switch>
          <Route exact path='/' component={()=>{return <HomePage users={users} setUser={setUser} add={addUser}/>}}/>
          <Route exact path='/Register' component={()=>{return <Register/>}}/>
          <Route exact path='/User' component={()=>{return <User user={user} users={users} setUser={setUser} setUsers={setUsers} allHistoryOders={allHistoryOders} setIndexToEdit={setIndexOrderToEdit} indexToEdit={indexOrderToEdit} addNewOrder={addNewOrder}/>}}/>
          <Route exact path='/AddOrder' component={()=>{return <AddOrder user={user} users={users} />}}/>
          <Route exact path='/EditUser' component={()=>{return <EditUser user={user} users={users} setUser={setUser} setUsers={setUsers} />}}/>
          <Route exact path='/EditOrder' component={()=>{return <EditOrder user={user} users={users} setUser={setUser} setUsers={setUsers} indexToEdit={indexOrderToEdit} />}}/>
          <Route exact path='/HistoryUserOrder' component={()=>{return <HistoryUserOrder user={user}/>}}/>
          <Route exact path='/Admin' component={()=>{return <Admin users={users} setUsers={setUsers} allHistoryOders={allHistoryOders}/>}}/>
          <Route exact path='/Worker' component={()=>{return <Worker users={users} setUsers={setUsers} allHistoryOders={allHistoryOders} setAllHistoryOders={setAllHistoryOders} />}}/>
        </Switch>
        <div style={{backgroundColor:'#afa37e',paddingBottom:'20px', marginTop:'15px'}} >
          <hr/>
         <Link to='/' style={{marginRight:'20px',marginTop:'10px',float:'left'}}>יציאה</Link>
          <h5 style={{display:'inline', marginRight:'60px'}}>Powerd by InfiniWeb Ⓒ</h5> 
       </div>
      </Router>
    </div>
  )
}