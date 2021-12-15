import React, { useState } from 'react'


export default function EditUser(props) {

    const newFreindNumber = props.user.freindNumber;
    const [newFirstName, setNewFirstName] = useState(props.user.firstName);
    const [newLastName, setNewLastName] = useState(props.user.lastName);
    const [newPhoneNumb, setnewPhoneNumb] = useState(props.user.phoneNumb);
    const [newPass, setNewPass] = useState(props.user.pass);

    const editUser = (newFreindNumber, newFirstName, newLastName, newPhoneNumb, newPass, e) => { // עריכת נתוני משתמש
  
        let tempUser = {
            firstName: newFirstName,
            lastName: newLastName,
            freindNumber: newFreindNumber,
            phoneNumb: newPhoneNumb,
            pass: newPass,
            orders: props.user.orders,
            history: props.user.history
        }     
      
          if (newFreindNumber.length < 1 ) {
            alert("לא הכנסת מספר חבר");
            e.preventDefault();
            return;
          }
          if (newFreindNumber.length > 3) {
            alert("הכנסת מספר חבר ארוך מ3 מספרים");
            e.preventDefault();
            return;
          }
              if ((newFirstName.length && newLastName.length) < 1) {
                alert("לא הכנסת שם פרטי/משפחה");
                e.preventDefault();
                return;
            }
              if ((newFirstName.length && newLastName.length) < 2) {
                alert("שם פרטי/משפחה חייב להיות עם מינמום 2 אותיות");
                e.preventDefault();
                return;
            }
            
            if (newPhoneNumb.length < 1) {
                alert("לא הכנסת מספר הטלפון שלך");
              e.preventDefault();
              return;
            }
            if (newPhoneNumb.length !== 10) {
              alert("מספר הטלפון לא אפשרי(חייב להיות בעל 10 ספרות)");
              e.preventDefault();
              return;
            }
            if (newPass.length < 1) {
                alert("לא הכנסת סיסמה");
              e.preventDefault();
              return;
            }
            if (newPass.length < 6) {
              alert("הסיסמה לא אפשרית(חייב להיות בעל מינימום 6 ספרות)");
              e.preventDefault();
              return;
            }
            else{
              let newUsers = props.users.filter( e => e.freindNumber !== props.user.freindNumber)
          
              props.setUser( tempUser )
              newUsers.unshift(tempUser)
              props.setUsers(newUsers)  
            }
    



    
      }



    return (
        <div style={{display:'inline-block', marginTop:'20px', marginBottom:'15px'}}>
            {/* <tbody >
                      
                      <tr>
                      <td>מספר חבר </td>   
                      <td><label>
                      <input value={newFreindNumber} type="number" onChange={(element) => setNewFreindNumber(element.target.value)} style={{textAlign:'center'}} placeholder='מספר חבר' ></input><br /><br />
                      </label>
                      </td> 
                      </tr>
                    </tbody>             */}
     <div style={{backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)', width:'250px', padding:'2.5%'}}>         
                    <h3><u>ערוך פרטי משתמש</u></h3>

     {/* <input value={newFreindNumber} type="number" onChange={(element) => setNewFreindNumber(element.target.value)} style={{textAlign:'center'}} placeholder='מספר חבר' ></input><br /><br /> */}
        <h4 >מספר חבר/אורח: {props.user.freindNumber}</h4>
     <input value={newFirstName} type="text" onChange={(element) => setNewFirstName(element.target.value)} style={{textAlign:'center'}} placeholder='שם פרטי' ></input><br /><br />
     <input value={newLastName} type="text" onChange={(element) => setNewLastName(element.target.value)} style={{textAlign:'center'}} placeholder='שם משפחה' ></input><br /><br />
     <input value={newPhoneNumb} type="number" onChange={(element) => setnewPhoneNumb(element.target.value)} style={{textAlign:'center'}} placeholder='טלפון' ></input><br /><br />
     <input value={newPass} type='password' onChange={(element) => setNewPass(element.target.value)} style={{textAlign:'center'}} placeholder='סיסמה - מומלץ מספר הטלפון שלך' ></input><br />
      <button onClick={(e) => editUser(newFreindNumber, newFirstName, newLastName, newPhoneNumb, newPass, e)} style={{marginTop:'15px', marginBottom:'10px', backgroundColor:'#6ae236', marginLeft:'7px', cursor:'pointer', borderRadius:'5px'}}>שנה</button>
     </div>

        </div>
    )
}
