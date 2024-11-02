import { createSlice } from "@reduxjs/toolkit";
export  let transactionSlice=createSlice({
    name:"transactionSlice",
    initialState:{
   transactions:[
        {
            amount:500,
            desc:"Cash"
    
        },
        {
            amount:-40,
            desc:"Book"
    
        },
        {
            amount:-200,
            desc:"Camera"
        }
    ]
},
reducers:{
    addTransaction:(puranaData,nyaData)=>{
        puranaData.transactions.push(nyaData.payload);
    },
    deleteTransaction:(puranaData,nyaData)=>{
        const index=puranaData.transactions.findIndex((transaction)=>transaction.id===nyaData.payload)
    if(index!==-1){
        puranaData.transactions.splice(index,1)
    }
}
}
});
export let {addTransaction,deleteTransaction} = transactionSlice.actions


