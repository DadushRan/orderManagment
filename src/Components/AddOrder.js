import React, { useState } from 'react';

export default function AddOrder(props) {

    const [mealOrRegular,setMealOrRegular] = useState('רגיל');  
    const [prodType,setProdType] = useState('רגיל');
    const [prodPrice,setProdPrice] = useState(30);
    const [note, setNote] =useState('');
    
    const [dry,setDry] = useState('לא');
    const [elefHaihimSouce,setElefHaihimSouce] = useState('כן');
    const [lettuce,setLettuce] = useState('כן');
    const [tomato,setTomato] = useState('כן');
    const [purpleOnion,setPurpleOnion] = useState('כן');
    const [pickles,setPickles] = useState('כן');
    
    const [extraCheese,setExtraCheese] = useState('לא');
    const [extraPayOnCheese,setExtraPayOnCheese] = useState(0);

    const [hotPepper,setHotPepper] = useState('לא');
    const [ketchup,setKetchup] = useState('לא');
    const [mayonnaise,setMayonnaise] = useState('לא');

    const confirmNewOrder = (e) => {
        if((mealOrRegular === "צ'יפס" || mealOrRegular === 'שתיה') && prodType === ''){
            props.addNewOrder({mealOrRegular, prodType, prodPrice, note, dry, elefHaihimSouce, lettuce, tomato, purpleOnion, pickles, hotPepper, ketchup, mayonnaise,extraCheese, extraPayOnCheese})
        }
        else if(prodType === '' && (mealOrRegular === 'רגיל' || mealOrRegular === 'ארוחה')){
            alert('בחר סוג בורגר')
        }
        else{
            props.addNewOrder({mealOrRegular, prodType, prodPrice, note, dry, elefHaihimSouce, lettuce, tomato, purpleOnion, pickles, hotPepper, ketchup, mayonnaise,extraCheese, extraPayOnCheese})
        }
    }


    const valueOfMealOrRegular = (element) =>{
        
            if(element === 'רגיל'){
                setProdPrice(30)
                setMealOrRegular(element)
                setDry('לא')
                setElefHaihimSouce('כן')
                setLettuce('כן')
                setTomato('כן')
                setPurpleOnion('כן')
                setPickles('כן')
                setHotPepper('לא')
                setKetchup('לא')
                setMayonnaise('לא') 
                setExtraCheese('לא')
                setExtraPayOnCheese(0)   
            }
            if(element === 'רגיל' && prodType === ''){
                setProdType('רגיל')
            }
            if(element === 'רגיל' &&  prodType === 'רגיל'){
                setProdPrice(30)
                setMealOrRegular(element)
            }
            if(element === 'רגיל' &&  prodType === 'רגיל כפול' ){
                setProdPrice(45)
                setMealOrRegular(element)
            }
            if(element === 'רגיל' &&  prodType === 'גבינה כפול' ){
                setProdPrice(50)
                setMealOrRegular(element)
            }
            if(element === 'רגיל' &&  (prodType === 'גבינה' || prodType === 'צמחוני' || prodType === 'טבעוני')){
                setProdPrice(35)
                setMealOrRegular(element)
            }
            if(element === 'ארוחה'){
                setProdPrice(50)
                setMealOrRegular(element)
                setDry('לא')
                setElefHaihimSouce('כן')
                setLettuce('כן')
                setTomato('כן')
                setPurpleOnion('כן')
                setPickles('כן')
                setHotPepper('לא')
                setKetchup('לא')
                setMayonnaise('לא') 
                setExtraCheese('לא')
                setExtraPayOnCheese(0)   
            }
            if(element === 'ארוחה' &&  prodType === ''){
                setProdType('רגיל')
            }
            if(element === 'ארוחה' &&  prodType === 'רגיל'){
                setProdPrice(50)
                setMealOrRegular(element)
            }
            if(element === 'ארוחה' &&  (prodType === 'גבינה' || prodType === 'צמחוני' || prodType === 'טבעוני')){
                setProdPrice(55)
                setMealOrRegular(element)
            }
            if(element === 'ארוחה' &&  prodType === 'גבינה כפול' ){
                setProdPrice(70)
                setMealOrRegular(element)
            }
            if(element === 'ארוחה' &&  prodType === 'רגיל כפול' ){
                setProdPrice(65)
                setMealOrRegular(element)
            }
            if(element === "צ'יפס"){
                setProdPrice(15)
                setMealOrRegular(element)
                setProdType('')
                setDry('כן')
                setElefHaihimSouce('לא')
                setLettuce('לא')
                setTomato('לא')
                setPurpleOnion('לא')
                setPickles('לא')
                setHotPepper('לא')
                setKetchup('לא')
                setMayonnaise('לא') 
                setExtraCheese('לא')
                setExtraPayOnCheese(0)              
            }
            if(element === 'שתיה'){
                setProdPrice(10)
                setMealOrRegular(element)
                setProdType('')
                setDry('כן')
                setElefHaihimSouce('לא')
                setLettuce('לא')
                setTomato('לא')
                setPurpleOnion('לא')
                setPickles('לא')
                setHotPepper('לא')
                setKetchup('לא')
                setMayonnaise('לא') 
                setExtraCheese('לא')
                setExtraPayOnCheese(0) 
            }
        }

    
    const valueOfProd = (element) =>{

         if(element === 'רגיל' &&  mealOrRegular === 'רגיל'){
             setProdPrice(30)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('כן')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setHotPepper('לא')
             setKetchup('לא')
             setMayonnaise('לא')
         }
         if(element === 'רגיל כפול' &&  mealOrRegular === 'רגיל'){
             setProdPrice(45)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('כן')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setHotPepper('לא')
             setKetchup('לא')
             setMayonnaise('לא')
         }
         if(element === 'רגיל' &&  mealOrRegular === 'ארוחה'){
             setProdPrice(50)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('כן')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setHotPepper('לא')
             setKetchup('לא')
             setMayonnaise('לא')
         }
         if(element === 'רגיל כפול' &&  mealOrRegular === 'ארוחה'){
             setProdPrice(65)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('כן')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setHotPepper('לא')
             setKetchup('לא')
             setMayonnaise('לא')
         }
         if(element === 'גבינה' &&  mealOrRegular === 'רגיל'){
             setProdPrice(35)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('כן')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setHotPepper('לא')
             setKetchup('לא')
             setMayonnaise('לא')
         }
         if(element === 'גבינה כפול' &&  mealOrRegular === 'רגיל'){
             setProdPrice(50)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('כן')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setHotPepper('לא')
             setKetchup('לא')
             setMayonnaise('לא')
         }
         if(element === 'גבינה' &&  mealOrRegular === 'ארוחה'){
             setProdPrice(55)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('כן')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setHotPepper('לא')
             setKetchup('לא')
             setMayonnaise('לא')
         }
         if(element === 'גבינה כפול' &&  mealOrRegular === 'ארוחה'){
             setProdPrice(70)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('כן')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setHotPepper('לא')
             setKetchup('לא')
             setMayonnaise('לא')
         }
         if(element === 'צמחוני' &&  mealOrRegular === 'רגיל'){
             setProdPrice(35)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('כן')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setExtraCheese('לא')
             setHotPepper('לא')
             setKetchup('לא')
             setMayonnaise('לא')
         }
         if(element === 'צמחוני' &&  mealOrRegular === 'ארוחה'){
             setProdPrice(55)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('כן')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setExtraCheese('לא')
             setHotPepper('לא')
             setKetchup('לא')
             setMayonnaise('לא')
         }
         if(element === 'טבעוני' &&  mealOrRegular === 'רגיל'){
             setProdPrice(35)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('לא')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setExtraCheese('לא')
             setHotPepper('לא')
             setKetchup('כן')
             setMayonnaise('לא')
         }
         if(element === 'טבעוני' &&  mealOrRegular === 'ארוחה'){
             setProdPrice(55)
             setProdType(element)
             setDry('לא')
             setElefHaihimSouce('לא')
             setLettuce('כן')
             setTomato('כן')
             setPurpleOnion('כן')
             setPickles('כן')
             setExtraCheese('לא')
             setHotPepper('לא')
             setKetchup('כן')
             setMayonnaise('לא')
         }
    }

    const valueOfDry = (element) =>{
        if(element === 'כן'){
            setDry(element)
            setElefHaihimSouce('לא')
            setLettuce('לא')
            setTomato('לא')
            setPurpleOnion('לא')
            setPickles('לא')
            setHotPepper('לא')
            setKetchup('לא')
            setMayonnaise('לא') 
        }    
        if(element === 'לא'){
            setDry(element)
            setElefHaihimSouce('כן')
            setLettuce('כן')
            setTomato('כן')
            setPurpleOnion('כן')
            setPickles('כן')
            setHotPepper('לא')
            setKetchup('לא')
            setMayonnaise('לא') 
        }
    }


    const valueOfExtraCheese = (element) =>{
        if(element === 'כן'){
            setExtraCheese(element)
            setExtraPayOnCheese(5)
        }
        if(element === 'לא'){
            setExtraCheese(element)
            setExtraPayOnCheese(0)
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
                       <td><label><input type="radio" name="mealOrRegular" value="רגיל" checked={mealOrRegular === 'רגיל'} onChange={(element) => valueOfMealOrRegular(element.target.value)} />רגיל</label></td>
                       <td><label><input type="radio" name="mealOrRegular" value="ארוחה" checked={mealOrRegular === 'ארוחה'} onChange={(element) => valueOfMealOrRegular(element.target.value)} />ארוחה</label></td>
                        <td><label><input type="radio" name="mealOrRegular" value="צ'יפס" checked={mealOrRegular === "צ'יפס"} onChange={(element) => valueOfMealOrRegular(element.target.value)} />צ'יפס</label> </td>                  
                       <td><label><input type="radio" name="mealOrRegular" value="שתיה" checked={mealOrRegular === 'שתיה'} onChange={(element) => valueOfMealOrRegular(element.target.value)} />שתיה</label></td>
                      </tr>    
                  </tbody> 
               </div>      

                      <h4 style={{backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>בחר סוג בורגר:</h4>

              <div className="radio">
                  <tbody >
                      <tr>                  
                       <td><label><input type="radio" name="SelectMeal" value="רגיל" checked={prodType === 'רגיל'} onChange={(element) => valueOfProd(element.target.value)} />רגיל</label> </td>                  
                       <td><label><input type="radio" name="SelectMeal" value="גבינה" checked={prodType === 'גבינה'} onChange={(element) => valueOfProd(element.target.value)} />גבינה</label></td>
                       <td><label><input type="radio" name="SelectMeal" value="צמחוני" checked={prodType === 'צמחוני'} onChange={(element) => valueOfProd(element.target.value)} />צמחוני</label></td>
                      </tr> 
                      <br/>
                      <tr>
                       <td><label><input type="radio" name="SelectMeal" value="טבעוני" checked={prodType === 'טבעוני'} onChange={(element) => valueOfProd(element.target.value)} />טבעוני</label></td>
                       <td><label><input type="radio" name="SelectMeal" value="רגיל כפול" checked={prodType === "רגיל כפול"} onChange={(element) => valueOfProd(element.target.value)} />רגיל כפול</label></td>
                       <td><label><input type="radio" name="SelectMeal" value="גבינה כפול" checked={prodType === 'גבינה כפול'} onChange={(element) => valueOfProd(element.target.value)} />גבינה כפול</label></td>
                      </tr>
                  </tbody>
                  </div>

                  <br/>                

                  <div className="radio">

                   <h4 style={{backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>מה תרצה בפנים?</h4>

                  <tbody>
                      <tr>
                       <td><p>יבש: </p></td>
                       <td><label><input type="radio" name="dry" value="כן" checked={dry === 'כן'} onChange={(element) => valueOfDry(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="dry" value="לא" checked={dry === 'לא'} onChange={(element) => valueOfDry(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>רוטב אלף האיים: </p></td>
                       <td><label><input type="radio" name="elefHaihimSouce" value="כן" checked={elefHaihimSouce === 'כן'} onChange={(element) => setElefHaihimSouce(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="elefHaihimSouce" value="לא" checked={elefHaihimSouce === 'לא'} onChange={(element) => setElefHaihimSouce(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>חסה: </p></td>
                       <td><label><input type="radio" name="lettuce" value="כן" checked={lettuce === 'כן'} onChange={(element) => setLettuce(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="lettuce" value="לא" checked={lettuce === 'לא'} onChange={(element) => setLettuce(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>עגבנייה: </p></td>
                       <td><label><input type="radio" name="tomato" value="כן" checked={tomato === 'כן'} onChange={(element) => setTomato(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="tomato" value="לא" checked={tomato === 'לא'} onChange={(element) => setTomato(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>בצל-סגול: </p></td>
                       <td><label><input type="radio" name="purpleOnion" value="כן" checked={purpleOnion === 'כן'} onChange={(element) => setPurpleOnion(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="purpleOnion" value="לא" checked={purpleOnion === 'לא'} onChange={(element) => setPurpleOnion(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>חמוצים: </p></td>
                       <td><label><input type="radio" name="pickles" value="כן" checked={pickles === 'כן'} onChange={(element) => setPickles(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="pickles" value="לא" checked={pickles === 'לא'} onChange={(element) => setPickles(element.target.value)} />לא</label></td>
                      </tr>
                   </tbody> 
                   </div>

                      <h4 style={{backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>תוספות: </h4>
  
                   <div>  
                    <tbody>
                      <tr>
                       <td><p>חלפיניו (חריף): </p></td>
                       <td><label><input type="radio" name="hotPepper" value="כן" checked={hotPepper === 'כן'} onChange={(element) => setHotPepper(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="hotPepper" value="לא" checked={hotPepper === 'לא'} onChange={(element) => setHotPepper(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>קטשופ: </p></td>
                       <td><label><input type="radio" name="ketchup" value="כן" checked={ketchup === 'כן'} onChange={(element) => setKetchup(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="ketchup" value="לא" checked={ketchup === 'לא'} onChange={(element) => setKetchup(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><p>מיונז: </p></td>
                       <td><label><input type="radio" name="mayonnaise" value="כן" checked={mayonnaise === 'כן'} onChange={(element) => setMayonnaise(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="mayonnaise" value="לא" checked={mayonnaise === 'לא'} onChange={(element) => setMayonnaise(element.target.value)} />לא</label></td>
                      </tr>
                      <tr>
                       <td><b>תוספת גבינה (10₪): </b></td>
                       <td><label><input type="radio" name="extraCheese" value="כן" checked={extraCheese === 'כן'} onChange={(element) => valueOfExtraCheese(element.target.value)} />כן</label> </td>                  
                       <td><label><input type="radio" name="extraCheese" value="לא" checked={extraCheese === 'לא'} onChange={(element) => valueOfExtraCheese(element.target.value)} />לא</label></td>
                      </tr>                      
                    </tbody>  
                    <br/>

                    <div>    
                  
                       <tr>
                       <td><p>הערה: </p></td>
                       <label><textarea name="note" placeholder="הוסף הערה..." onChange={(element) => setNote(element.target.value)} style={{width: '150px', padding: ' 0 10px', marginRight: '10px', boxSizing: 'none'}}/></label>
                       </tr>
                       </div>               
              </div>

            <hr/>
            <tbody style={{backgroundColor:'#f74b31'}}>
                <b><u>סיכום הזמנה</u></b>
             <h6 style={{marginTop:'2px', marginRight:'50px',paddingLeft:'40px'}}>
                 <tr><td>סוג ארוחה: </td><td>{mealOrRegular}-{prodType}({prodPrice}₪)</td></tr>
                 <tr><td>יבש: </td><td>{dry}</td></tr>
                 <tr><td>אלף האיים: </td><td>{elefHaihimSouce}</td></tr>
                 <tr><td>עגבנייה: </td><td>{tomato}</td></tr>
                 <tr><td>בצל-סגול: </td><td>{purpleOnion}</td></tr>
                 <tr><td>מלפפון-חמוץ: </td><td>{pickles}</td></tr>
                 <tr><td>חלפיניו: </td><td>{hotPepper}</td></tr>
                 <tr><td>קטשופ: </td><td>{ketchup}</td></tr>
                 <tr><td>מיונז: </td><td>{mayonnaise}</td></tr>
                 <tr><td>סוג ארוחה: </td><td>{extraCheese}({extraPayOnCheese}₪)</td></tr>
                 <tr><td>הערה: </td><td>"{note}"</td></tr>
             </h6>
            </tbody>
            
            <hr/>

            <h3 style={{backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>סה"כ: {prodPrice+extraPayOnCheese}₪ </h3>
            <hr/>

              
            <button onClick={(e) => confirmNewOrder([e])} style={{marginBottom:'20px', height:'50px', backgroundColor:'#6ae236', cursor:'pointer', borderRadius:'5px'}}>הוסף להזמנות שלי</button>
            <button onClick={(e) => props.setShowAddOrder(false)} style={{marginRight:'15px', height:'50px', backgroundColor:'#f74b31', cursor:'pointer', borderRadius:'5px'}}>בטל</button>

           </div>

           



        </div>
    )
}
