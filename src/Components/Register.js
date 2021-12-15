import React, { useState } from 'react';
import { Link } from "react-router-dom";


export default function Register(props) {

    const [freindNumber, setFreindNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumb, setPhoneNumb] = useState('');
    const [pass, setPass] = useState('');

    const myUserFreindNumber = props.users.filter (currUser => currUser.freindNumber == freindNumber)
    
    const confirmVal = (e) => {
      
      if (freindNumber.length < 1 ) {
        alert("לא הכנסת מספר חבר");
        e.preventDefault();
        return;
      }
      if (freindNumber.length > 3) {
        alert("הכנסת מספר חבר ארוך מ3 מספרים");
        e.preventDefault();
        return;
      }
      if (myUserFreindNumber.length == 1) {
        alert("מספר חבר קיים כבר במערכת");
        e.preventDefault();
        return;
      }

      // if ((firstName.charAt() || lastName.charAt()) != Text) {
    //         alert("שם פרטי/משפחה חייב להיות עם אותיות בלבד");
    //         e.preventDefault();
    //         return;
    //       }
          if ((firstName.length && lastName.length) < 1) {
            alert("לא הכנסת שם פרטי/משפחה");
            e.preventDefault();
            return;
        }
          if ((firstName.length && lastName.length) < 2) {
            alert("שם פרטי/משפחה חייב להיות עם מינמום 2 אותיות");
            e.preventDefault();
            return;
        }
        
        if (phoneNumb.length < 1) {
            alert("לא הכנסת מספר הטלפון שלך");
          e.preventDefault();
          return;
        }
        if (phoneNumb.length > 10) {
          alert("מספר הטלפון לא אפשרי(חייב להיות בעל 10 ספרות)");
          e.preventDefault();
          return;
        }
        if (pass.length < 1) {
            alert("לא הכנסת סיסמה");
          e.preventDefault();
          return;
        }
        if (pass.length < 6) {
          alert("הסיסמה לא אפשרית(חייב להיות בעל מינימום 6 ספרות)");
          e.preventDefault();
          return;
        }
        else{
          props.add(firstName, lastName, freindNumber,phoneNumb, pass)
        }
}




    return (
        <div>
      <h3 style={{backgroundColor:'#FFFFFF'}}>משתמש חדש</h3>
     <div style={{backgroundColor:'#FFFFFF', padding:'2.5%'}}>
     <input type="text" onChange={(element) => setFreindNumber(element.target.value)} style={{textAlign:'center'}} placeholder='מספר חבר' minLength="4" ></input><br /><br />
     <input type="text" onChange={(element) => setFirstName(element.target.value)} style={{textAlign:'center'}} placeholder='שם פרטי' minLength="2" ></input><br /><br />
     <input type="text" onChange={(element) => setLastName(element.target.value)} style={{textAlign:'center'}} placeholder='משפחה'  minLength="2" ></input><br /><br />
     <input type="number" onChange={(element) => setPhoneNumb(element.target.value)} style={{textAlign:'center'}} placeholder='מספר טלפון'  minLength="2" ></input><br /><br />
     <input type="password" onChange={(element) => setPass(element.target.value)} style={{textAlign:'center'}} placeholder='סיסמה - מומלץ מספר הטלפון שלך' minLength="9" ></input><br /><br />
     <Link to='/User' > <button onClick={(e) => confirmVal(e)}>הירשם</button></Link>
     <button onClick={() => props.cancelRegister()}>בטל</button>
     </div>

    </div>
    )
}
