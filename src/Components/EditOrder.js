import React, { useState } from 'react'
import {Link} from 'react-router-dom';


export default function EditOrder(props) {

    const [newMealOrRegular,setNewMealOrRegular] = useState(props.user.orders[props.indexToEdit].mealOrRegular);  
    const [newProdType,setNewProdType] = useState(props.user.orders[props.indexToEdit].prodType);
    const [newProdPrice,setNewProdPrice] = useState(props.user.orders[props.indexToEdit].prodPrice);
    const [newNote, setNewNote] =useState(props.user.orders[props.indexToEdit].note);
    
    const [newDry,setNewDry] = useState(props.user.orders[props.indexToEdit].dry);
    const [newElefHaihimSouce,setNewElefHaihimSouce] = useState(props.user.orders[props.indexToEdit].elefHaihimSouce);
    const [newLettuce,setNewLettuce] = useState(props.user.orders[props.indexToEdit].lettuce);
    const [newTomato,setNewTomato] = useState(props.user.orders[props.indexToEdit].tomato);
    const [newPurpleOnion,setNewPurpleOnion] = useState(props.user.orders[props.indexToEdit].purpleOnion);
    const [newPickles,setNewPickles] = useState(props.user.orders[props.indexToEdit].pickles);
    
    const [newExtraCheese,setNewExtraCheese] = useState(props.user.orders[props.indexToEdit].extraCheese);
    const [newExtraPayOnCheese,setNewExtraPayOnCheese] = useState(props.user.orders[props.indexToEdit].extraPayOnCheese);

    const [newHotPepper,setNewHotPepper] = useState(props.user.orders[props.indexToEdit].hotPepper);
    const [newKetchup,setNewKetchup] = useState(props.user.orders[props.indexToEdit].ketchup);
    const [newMayonnaise,setNewMayonnaise] = useState(props.user.orders[props.indexToEdit].mayonnaise);

    const confirmEditOrder = () => {

        if((newMealOrRegular == "צ'יפס" || newMealOrRegular == 'שתיה') && newProdType == ''){
            props.user.orders[props.indexToEdit] = {
                mealOrRegular: newMealOrRegular,
                prodType: newProdType,
                prodPrice: newProdPrice,
                note: newNote,
                dry: newDry,
                elefHaihimSouce: newElefHaihimSouce,
              lettuce: newLettuce,
              tomato: newTomato,
              purpleOnion: newPurpleOnion,
              pickles: newPickles,
              hotPepper: newHotPepper,
              ketchup: newKetchup,
              mayonnaise: newMayonnaise,
              extraCheese: newExtraCheese,
              extraPayOnCheese: newExtraPayOnCheese
              }   
        }
        else if(newProdType == '' && (newMealOrRegular == 'רגיל' || newMealOrRegular == 'ארוחה')){
            alert('בחר סוג בורגר')
        }
        else{
        props.user.orders[props.indexToEdit] = {
            mealOrRegular: newMealOrRegular,
            prodType: newProdType,
            prodPrice: newProdPrice,
            note: newNote,
            dry: newDry,
            elefHaihimSouce: newElefHaihimSouce,
          lettuce: newLettuce,
          tomato: newTomato,
          purpleOnion: newPurpleOnion,
          pickles: newPickles,
          hotPepper: newHotPepper,
          ketchup: newKetchup,
          mayonnaise: newMayonnaise,
          extraCheese: newExtraCheese,
          extraPayOnCheese: newExtraPayOnCheese
          }   
        const newUsers = props.users.filter((e, index)=>(e.freindNumber !== props.user.freindNumber))  
        props.setUser(props.user);
        props.setUsers([props.user,...newUsers]);
        }   
    }


        const valueOfnewMealOrRegular = (element) =>{
        
            if(element == 'רגיל'){
                setNewProdPrice(30)
                setNewMealOrRegular(element)
                setNewProdType(newProdType)
                setNewDry('לא')
                setNewElefHaihimSouce('כן')
                setNewLettuce('כן')
                setNewTomato('כן')
                setNewPurpleOnion('כן')
                setNewPickles('כן')
                setNewHotPepper('לא')
                setNewKetchup('לא')
                setNewMayonnaise('לא') 
                setNewExtraCheese('לא')
                setNewExtraPayOnCheese(0)   
            }
            if(element == 'רגיל' &&  newProdType == ''){
                setNewProdType('רגיל')
            }
            if(element == 'רגיל' &&  newProdType == 'רגיל'){
                setNewProdPrice(30)
                setNewMealOrRegular(element)
            }
            if(element == 'רגיל' &&  newProdType == 'רגיל כפול' ){
                setNewProdPrice(45)
                setNewMealOrRegular(element)
            }
            if(element == 'רגיל' &&  newProdType == 'גבינה כפול' ){
                setNewProdPrice(50)
                setNewMealOrRegular(element)
            }
            if(element == 'רגיל' &&  (newProdType == 'גבינה' || newProdType == 'צמחוני' || newProdType == 'טבעוני')){
                setNewProdPrice(35)
                setNewMealOrRegular(element)
            }
            if(element == 'ארוחה'){
                setNewProdPrice(50)
                setNewMealOrRegular(element)
                setNewProdType(newProdType)
                setNewDry('לא')
                setNewElefHaihimSouce('כן')
                setNewLettuce('כן')
                setNewTomato('כן')
                setNewPurpleOnion('כן')
                setNewPickles('כן')
                setNewHotPepper('לא')
                setNewKetchup('לא')
                setNewMayonnaise('לא') 
                setNewExtraCheese('לא')
                setNewExtraPayOnCheese(0)   
            }
            if(element == 'ארוחה' &&  newProdType == ''){
                setNewProdType('רגיל')
            }
            if(element == 'ארוחה' &&  newProdType == 'רגיל'){
                setNewProdPrice(50)
                setNewMealOrRegular(element)
            }
            if(element == 'ארוחה' &&  (newProdType == 'גבינה' || newProdType == 'צמחוני' || newProdType == 'טבעוני')){
                setNewProdPrice(55)
                setNewMealOrRegular(element)
            }
            if(element == 'ארוחה' &&  newProdType == 'גבינה כפול' ){
                setNewProdPrice(70)
                setNewMealOrRegular(element)
            }
            if(element == 'ארוחה' &&  newProdType == 'רגיל כפול' ){
                setNewProdPrice(65)
                setNewMealOrRegular(element)
            }
            if(element == "צ'יפס"){
                setNewProdPrice(15)
                setNewMealOrRegular(element)
                setNewProdType('')
                setNewDry('כן')
                setNewElefHaihimSouce('לא')
                setNewLettuce('לא')
                setNewTomato('לא')
                setNewPurpleOnion('לא')
                setNewPickles('לא')
                setNewHotPepper('לא')
                setNewKetchup('לא')
                setNewMayonnaise('לא') 
                setNewExtraCheese('לא')
                setNewExtraPayOnCheese(0)              
            }
            if(element == 'שתיה'){
                setNewProdPrice(10)
                setNewMealOrRegular(element)
                setNewProdType('')
                setNewDry('כן')
                setNewElefHaihimSouce('לא')
                setNewLettuce('לא')
                setNewTomato('לא')
                setNewPurpleOnion('לא')
                setNewPickles('לא')
                setNewHotPepper('לא')
                setNewKetchup('לא')
                setNewMayonnaise('לא') 
                setNewExtraCheese('לא')
                setNewExtraPayOnCheese(0) 
            }
        }

    
    const valueOfProd = (element) =>{

         if(element == 'רגיל' &&  newMealOrRegular == 'רגיל'){
             setNewProdPrice(30)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('כן')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewHotPepper('לא')
             setNewKetchup('לא')
             setNewMayonnaise('לא')
         }
         if(element == 'רגיל כפול' &&  newMealOrRegular == 'רגיל'){
             setNewProdPrice(45)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('כן')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewHotPepper('לא')
             setNewKetchup('לא')
             setNewMayonnaise('לא')
         }
         if(element == 'רגיל' &&  newMealOrRegular == 'ארוחה'){
             setNewProdPrice(50)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('כן')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewHotPepper('לא')
             setNewKetchup('לא')
             setNewMayonnaise('לא')
         }
         if(element == 'רגיל כפול' &&  newMealOrRegular == 'ארוחה'){
             setNewProdPrice(65)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('כן')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewHotPepper('לא')
             setNewKetchup('לא')
             setNewMayonnaise('לא')
         }
         if(element == 'גבינה' &&  newMealOrRegular == 'רגיל'){
             setNewProdPrice(35)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('כן')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewHotPepper('לא')
             setNewKetchup('לא')
             setNewMayonnaise('לא')
         }
         if(element == 'גבינה כפול' &&  newMealOrRegular == 'רגיל'){
             setNewProdPrice(50)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('כן')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewHotPepper('לא')
             setNewKetchup('לא')
             setNewMayonnaise('לא')
         }
         if(element == 'גבינה' &&  newMealOrRegular == 'ארוחה'){
             setNewProdPrice(55)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('כן')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewHotPepper('לא')
             setNewKetchup('לא')
             setNewMayonnaise('לא')
         }
         if(element == 'גבינה כפול' &&  newMealOrRegular == 'ארוחה'){
             setNewProdPrice(70)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('כן')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewHotPepper('לא')
             setNewKetchup('לא')
             setNewMayonnaise('לא')
         }
         if(element == 'צמחוני' &&  newMealOrRegular == 'רגיל'){
             setNewProdPrice(35)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('כן')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewExtraCheese('לא')
             setNewHotPepper('לא')
             setNewKetchup('לא')
             setNewMayonnaise('לא')
         }
         if(element == 'צמחוני' &&  newMealOrRegular == 'ארוחה'){
             setNewProdPrice(55)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('כן')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewExtraCheese('לא')
             setNewHotPepper('לא')
             setNewKetchup('לא')
             setNewMayonnaise('לא')
         }
         if(element == 'טבעוני' &&  newMealOrRegular == 'רגיל'){
             setNewProdPrice(35)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('לא')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewExtraCheese('לא')
             setNewHotPepper('לא')
             setNewKetchup('כן')
             setNewMayonnaise('לא')
         }
         if(element == 'טבעוני' &&  newMealOrRegular == 'ארוחה'){
             setNewProdPrice(55)
             setNewProdType(element)
             setNewDry('לא')
             setNewElefHaihimSouce('לא')
             setNewLettuce('כן')
             setNewTomato('כן')
             setNewPurpleOnion('כן')
             setNewPickles('כן')
             setNewExtraCheese('לא')
             setNewHotPepper('לא')
             setNewKetchup('כן')
             setNewMayonnaise('לא')
         }
    }

    const valueOfDry = (element) =>{
        if(element == 'כן'){
            setNewDry(element)
            setNewElefHaihimSouce('לא')
            setNewLettuce('לא')
            setNewTomato('לא')
            setNewPurpleOnion('לא')
            setNewPickles('לא')
            setNewHotPepper('לא')
            setNewKetchup('לא')
            setNewMayonnaise('לא') 
        }    
        if(element == 'לא'){
            setNewDry(element)
            setNewElefHaihimSouce('כן')
            setNewLettuce('כן')
            setNewTomato('כן')
            setNewPurpleOnion('כן')
            setNewPickles('כן')
            setNewHotPepper('לא')
            setNewKetchup('לא')
            setNewMayonnaise('לא') 
        }
    }

    const valueOfnewExtraCheese = (element) =>{
        if(element == 'כן'){
            setNewExtraCheese(element)
            setNewExtraPayOnCheese(5)
        }
        if(element == 'לא'){
            setNewExtraCheese(element)
            setNewExtraPayOnCheese(0)
        }
    }
    

    


    return (
        <div style={{paddingLeft:'100px', backgroundColor:'#FFFFFF', display:'inline-block',width:'350px',margin:'5px', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            {/* <h3 style={{backgroundColor:'#FFFFFF'}}>הוסף הזמנה</h3> */}
            <div style={{marginRight:'35%', backgroundColor:'#FFFFFF', paddingTop:'5px'}}>
                  
                      
                      <h4 style={{backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>מה תרצה לאכול?</h4>
              
              <div className="radio">
                 <tbody>
                      <tr>
                       <td><label><input type="radio" name="newMealOrRegular" value="רגיל" checked={newMealOrRegular === 'רגיל'} onChange={(element) => valueOfnewMealOrRegular(element.target.value)} />רגיל</label></td>
                       <td><label><input type="radio" name="newMealOrRegular" value="ארוחה" checked={newMealOrRegular === 'ארוחה'} onChange={(element) => valueOfnewMealOrRegular(element.target.value)} />ארוחה</label></td>
                        <td><label><input type="radio" name="newMealOrRegular" value="צ'יפס" checked={newMealOrRegular === "צ'יפס"} onChange={(element) => valueOfnewMealOrRegular(element.target.value)} />צ'יפס</label> </td>                  
                       <td><label><input type="radio" name="newMealOrRegular" value="שתיה" checked={newMealOrRegular === 'שתיה'} onChange={(element) => valueOfnewMealOrRegular(element.target.value)} />שתיה</label></td>
                      </tr>    
                  </tbody> 
               </div>      

                      <h4 style={{backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>בחר סוג בורגר:</h4>

              <div className="radio">
                  <tbody >
                      <tr>                  
                       <td><label><input type="radio" name="SelectMeal" value="רגיל" checked={newProdType === 'רגיל'} onChange={(element) => valueOfProd(element.target.value)} />רגיל</label> </td>                  
                       <td><label><input type="radio" name="SelectMeal" value="גבינה" checked={newProdType === 'גבינה'} onChange={(element) => valueOfProd(element.target.value)} />גבינה</label></td>
                       <td><label><input type="radio" name="SelectMeal" value="צמחוני" checked={newProdType === 'צמחוני'} onChange={(element) => valueOfProd(element.target.value)} />צמחוני</label></td>
                      </tr> 
                      <br/>
                      <tr>
                       <td><label><input type="radio" name="SelectMeal" value="טבעוני" checked={newProdType === 'טבעוני'} onChange={(element) => valueOfProd(element.target.value)} />טבעוני</label></td>
                       <td><label><input type="radio" name="SelectMeal" value="רגיל כפול" checked={newProdType === "רגיל כפול"} onChange={(element) => valueOfProd(element.target.value)} />רגיל כפול</label></td>
                       <td><label><input type="radio" name="SelectMeal" value="גבינה כפול" checked={newProdType === 'גבינה כפול'} onChange={(element) => valueOfProd(element.target.value)} />גבינה כפול</label></td>
                      </tr>
                  </tbody>
                  </div>

                  <br/>                

                  <div className="radio">

                   <h4 style={{backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>מה תרצה בפנים?</h4>

                  <tbody>
                      <tr>
                       <td><p>יבש: </p></td>
                       <td><label><input type="radio" name="newDry" value="כן" checked={newDry === 'כן'} onChange={(element) => valueOfDry(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="newDry" value="לא" checked={newDry === 'לא'} onChange={(element) => valueOfDry(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>רוטב אלף האיים: </p></td>
                       <td><label><input type="radio" name="newElefHaihimSouce" value="כן" checked={newElefHaihimSouce === 'כן'} onChange={(element) => setNewElefHaihimSouce(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="newElefHaihimSouce" value="לא" checked={newElefHaihimSouce === 'לא'} onChange={(element) => setNewElefHaihimSouce(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>חסה: </p></td>
                       <td><label><input type="radio" name="newLettuce" value="כן" checked={newLettuce === 'כן'} onChange={(element) => setNewLettuce(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="newLettuce" value="לא" checked={newLettuce === 'לא'} onChange={(element) => setNewLettuce(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>עגבנייה: </p></td>
                       <td><label><input type="radio" name="newTomato" value="כן" checked={newTomato === 'כן'} onChange={(element) => setNewTomato(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="newTomato" value="לא" checked={newTomato === 'לא'} onChange={(element) => setNewTomato(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>בצל-סגול: </p></td>
                       <td><label><input type="radio" name="newPurpleOnion" value="כן" checked={newPurpleOnion === 'כן'} onChange={(element) => setNewPurpleOnion(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="newPurpleOnion" value="לא" checked={newPurpleOnion === 'לא'} onChange={(element) => setNewPurpleOnion(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>חמוצים: </p></td>
                       <td><label><input type="radio" name="newPickles" value="כן" checked={newPickles === 'כן'} onChange={(element) => setNewPickles(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="newPickles" value="לא" checked={newPickles === 'לא'} onChange={(element) => setNewPickles(element.target.value)} />לא</label></td>
                      </tr>
                   </tbody> 
                   </div>

                      <h4 style={{backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>תוספות: </h4>
  
                   <div>  
                    <tbody>
                      <tr>
                       <td><p>חלפיניו (חריף): </p></td>
                       <td><label><input type="radio" name="newHotPepper" value="כן" checked={newHotPepper === 'כן'} onChange={(element) => setNewHotPepper(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="newHotPepper" value="לא" checked={newHotPepper === 'לא'} onChange={(element) => setNewHotPepper(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>קטשופ: </p></td>
                       <td><label><input type="radio" name="newKetchup" value="כן" checked={newKetchup === 'כן'} onChange={(element) => setNewKetchup(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="newKetchup" value="לא" checked={newKetchup === 'לא'} onChange={(element) => setNewKetchup(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>מיונז: </p></td>
                       <td><label><input type="radio" name="newMayonnaise" value="כן" checked={newMayonnaise === 'כן'} onChange={(element) => setNewMayonnaise(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="newMayonnaise" value="לא" checked={newMayonnaise === 'לא'} onChange={(element) => setNewMayonnaise(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><b>תוספת גבינה (10₪): </b></td>
                       <td><label><input type="radio" name="newExtraCheese" value="כן" checked={newExtraCheese === 'כן'} onChange={(element) => valueOfnewExtraCheese(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="newExtraCheese" value="לא" checked={newExtraCheese === 'לא'} onChange={(element) => valueOfnewExtraCheese(element.target.value)} />לא</label></td>
                      </tr>                      
                    </tbody>  
                    <br/>

                    <div>    
                  
                       <tr>
                       <td><p>הערה: </p></td>
                       <label><textarea name="newNote" placeholder="הוסף הערה..." onChange={(element) => setNewNote(element.target.value)} style={{width: '150px', padding: ' 0 10px', marginRight: '10px', boxSizing: 'none'}}/></label>
                       </tr>
                       </div>               
              </div>

            <hr/>
            <tbody style={{backgroundColor:'#f74b31'}}>
                <b><u>סיכום הזמנה</u></b>
             <h6 style={{marginTop:'2px', marginRight:'50px',paddingLeft:'40px'}}>
                 <tr><td>סוג ארוחה: </td><td>{newMealOrRegular}-{newProdType}({newProdPrice}₪)</td></tr>
                 <tr><td>יבש: </td><td>{newDry}</td></tr>
                 <tr><td>אלף האיים: </td><td>{newElefHaihimSouce}</td></tr>
                 <tr><td>עגבנייה: </td><td>{newTomato}</td></tr>
                 <tr><td>בצל-סגול: </td><td>{newPurpleOnion}</td></tr>
                 <tr><td>מלפפון-חמוץ: </td><td>{newPickles}</td></tr>
                 <tr><td>חלפיניו: </td><td>{newHotPepper}</td></tr>
                 <tr><td>קטשופ: </td><td>{newKetchup}</td></tr>
                 <tr><td>מיונז: </td><td>{newMayonnaise}</td></tr>
                 <tr><td>סוג ארוחה: </td><td>{newExtraCheese}({newExtraPayOnCheese}₪)</td></tr>
                 <tr><td>הערה: </td><td>"{newNote}"</td></tr>
             </h6>
            </tbody>
            
            <hr/>

            <h3 style={{backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>סה"כ: {newProdPrice+newExtraPayOnCheese}₪ </h3>
            <hr/>

              
            <Link to='/User' onClick={(e) => confirmEditOrder()}> <button style={{marginBottom:'20px', height:'50px', backgroundColor:'#6ae236', cursor:'pointer', borderRadius:'5px'}}>ערוך הזמנה</button></Link> 

           </div>

           



        </div>
    )
}