import React from 'react'

export default function HistoryUserOrder(props) {

    // console.log(props.user.history.length)
   const sumAllOrdersPrices = (props.user.history.reduce((a, b) => a+b.sumPrices,0))
//    const sumAllOrdersNumber = (props.user.history.orders.length)



    return (
        <div style={{padding:'1px',paddingBottom:'15px',border:'solid 2px black', backgroundColor:'#FCE8AB', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 3px 10px 0 rgba(0, 0, 0, 0.19)', marginBottom:'10px',width:'450px',marginTop:'15px',marginRight:'auto', marginLeft:'auto'}}>
            <h3 style={{marginBottom:'10px'}}><u>היסטוריית ההזמנות</u></h3>
                                <div style={{paddingBottom:'3px',border:'solid 2px black', backgroundColor:'#FFFFFF', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 3px 10px 0 rgba(0, 0, 0, 0.19)', marginBottom:'10px',width:'400px',marginRight:'auto', marginLeft:'auto'}}>
                                <u> סה"כ הזמנות:</u> {props.user.history.length}| <u>סה"כ מנות:</u> {}| <u>סה"כ שולם:</u> {sumAllOrdersPrices}₪
                                </div>
            <h5> {props.user.history.map( (e, id) => {
                
                            return <div key={id} style={{padding:'1px',border:'solid 2px black', backgroundColor:'#FFFFFF', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 3px 10px 0 rgba(0, 0, 0, 0.19)', marginBottom:'10px',width:'350px',marginRight:'auto', marginLeft:'auto'}}>
                                <table>
                                    <tr style={{backgroundColor:'#a09c90'}}>
                                        <td>{id}. </td>
                                        <td>תאריך</td>
                                        <td>מספר הזמנה</td>
                                        <td>סכום הזמנה</td>
                                        <td>הזמנה</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td style={{border:'solid 0.5px black'}}>{e.date}</td>
                                        <td style={{border:'solid 0.5px black'}}>{e.orderNumber}</td>      
                                        <td style={{border:'solid 0.5px black'}}>{e.sumPrices}₪</td>
                                        <td> {props.user.history[id].orders.map((e,idOrders) => {
                                            return <div style={{border:'solid 0.5px black'}}>
                                            {idOrders+1}. {e.mealOrRegular}-{e.prodType}
                                                </div>
                                        
                                        })}</td>
                                    </tr>
                                    
                                </table>
                                </div>
            })}
            </h5>
            <button onClick={() => props.setShowOrderHistory(false)} style={{ height:'30px', backgroundColor:'#f74b31', cursor:'pointer', borderRadius:'5px'}}>סגור</button>
        </div>
    )
}
