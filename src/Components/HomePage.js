import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Register from './Register';



export default function HomePage(props) {
  
        
        const [loginFreindNumb, setFreindNumb] = useState('');
        const [loginPass, setLoginPass] = useState('');
        
        const getUserLogIn = (e, loginFreindNumb, loginPass) => { // פונקציה מהלוגאין שבודקת עם משתמש קיים ומביאה אותו
            let myUser = props.users.filter (currUser => currUser.freindNumber === loginFreindNumb)
        
            if (loginFreindNumb === 'ADMIN' && loginPass === 'ADMIN'){
                return '/Admin'
              }
            if (loginFreindNumb === 'WORKER' && loginPass === 'WORKER'){
                return '/Worker'
              }
            
            if (loginFreindNumb.length === 0) {
              alert ("מלא את מספר-החבר שלך בבקשה");
              e.preventDefault ()
              return;
            }
            if (myUser.length === 0) {
              alert ("מספר-חבר לא קיים אצלנו, נסה/י שוב או הרשם/מי במידה ועוד לא נרשמת ");
              e.preventDefault ()
              return;
            }
            myUser = myUser[0];                                  // מקדם את היוזר למקום ה-0 במערך היוזרים                           
            if (myUser.pass !== loginPass) {
              alert ("סיסמה לא נכונה, אולי הטלפון שלך? במידה ולא גש בבקשה למנהל לקבלת עזרה");
              e.preventDefault ()
              return;
            }
            props.setUser (myUser);
           }

           const link = () => {
               if (loginFreindNumb === "ADMIN" && loginPass === "ADMIN") {return "Admin"}
               if (loginFreindNumb === "WORKER" && loginPass === "WORKER") {return "Worker"}
            else return "User"
           }

           
     ////////////////////////////////////////////////////////////////////////////////////////
     
     
           const [showFI, setShowFI] = useState(false);
           const [showRI, setShowRI] = useState(false);
           
           const showFreindInputs = (state) => {
             setShowFI (state)
            setShowRI(false)
            setShowGI(false)
           } 
           const showRegisterInputs = (state) => {
             setShowRI (state)
             setShowGI (false)
             setShowFI (false)
           } 
           
           const freindInputs = (
            <div>
              <h2  style={{backgroundColor:'#FFFFFF'}}>כניסה לרשומים</h2> 
             <div style={{backgroundColor:'#FFFFFF', paddingTop:'15px'}}>
              <input type="text" onChange={(element) => setFreindNumb(element.target.value)} placeholder='מספר חבר' maxLength='6' /><br />
               <br />
              <input type="password" onChange={(element) => setLoginPass(element.target.value)} placeholder='סיסמה' maxLength='10' /><br />
              <button style={{marginTop:'15px', marginBottom:'5px',width:'150px'}}>
                 <Link to={`/${link()}`} onClick={(e) => getUserLogIn(e, loginFreindNumb, loginPass)}>
                    קדימה אני מוכן
                 </Link> 
                </button>
                 <br />     
                <button onClick={() => showRegisterInputs(!showRI)} style={{marginBottom:'20px'}}>פעם ראשונה? הרשם כאן</button>
              </div>   
            </div>
            )
            
            const setShowsFalse = () => {
              setShowGI  (false)
              setShowFI(false)
              setShowRI(false)
            }
            
            const registerInputs = <Register cancelRegister={setShowsFalse} add={props.add} users={props.users}></Register>

            /////////////////////////////////////////////////////////////////////////////////////////////////////
            

            const getGuestLogIn = (e, guestFirstName, guestLastName, guestphoneNumb) => { // פונקציה מהלוגאין שמעבירה לאורח
                
              if ((guestFirstName.length && guestLastName.length && guestphoneNumb.length)===0) {
                alert ("מלא בבקשה את כל השדות");
                e.preventDefault ()
                return;
              }
              if (guestphoneNumb.length !== 10) {
                alert ("טלפון חייב להיות בעל 10 מספרים");
                e.preventDefault ()
                return;
              }
              
              let myUser = props.users.filter (currUser => currUser.freindNumber === 'Guest')    // מביא את אורח
                myUser = myUser[0];           // מקדם את היוזר למקום ה-0 במערך היוזרים  
                myUser.firstName = guestFirstName
                myUser.lastName = guestLastName
                myUser.phoneNumb = guestphoneNumb
                props.setUser (myUser);
            }
            
               const [showGI, setShowGI] = useState(false);

               const showGuestInputs = (state) => {
                setShowGI (state)
                setShowFI(false)
                setShowRI(false)
               } 

               const [guestFirstName, setGuestFirstName] = useState('');
               const [guestLastName, setGuestLastName] = useState('');
               const [guestphoneNumb, setGuestphoneNumb] = useState('');
    
               const guestInputs = (
                <div>
                  <h2  style={{backgroundColor:'#FFFFFF'}}>כניסה למשלמים במזומן/ביט</h2> 
                 <div style={{backgroundColor:'#FFFFFF', paddingTop:'15px'}}>
                  <input type="text" onChange={(element) => setGuestFirstName(element.target.value)} placeholder='שם פרטי' /><br />
                  <br/>
                  <input type="text" onChange={(element) => setGuestLastName(element.target.value)} placeholder='שם משפחה' /><br />
                  <br/>
                  <input type="number" onChange={(element) => setGuestphoneNumb(element.target.value)} placeholder='מספר טלפון' /><br />
                  <button style={{marginTop:'15px', marginBottom:'15px'}}>
                     <Link to={`/${link()}`} onClick={(e) => getGuestLogIn(e, guestFirstName, guestLastName, guestphoneNumb)}>
                        קדימה אני מוכן
                     </Link> 
                    </button>
                  </div>   
                </div>
                )   
           
           

            

    return (
        <div>
            <h2 style={{backgroundColor:'#FFFFFF'}}>צורת תשלום</h2>

            <div style={{backgroundColor:'#FFFFFF', padding:'15px', paddingBottom:'15px'}}>
             <button onClick={() => showGuestInputs (!showGI)} style={{width:'150px', height: '100px', margin:'5px'}}><h2>מזומן/ביט<hr style={{width:'70px'}} />אורח</h2></button>
             <button onClick={() => showFreindInputs (!showFI)} style={{width:'150px', height: '100px', margin:'5px'}}><h2>מס' תקציב<hr style={{width:'70px'}} />חברי קיבוץ</h2></button>
            </div>

            {showGI? guestInputs : ''}
            {showFI? freindInputs : ''}
            {showRI? registerInputs : ''}


        </div>
    )
}

