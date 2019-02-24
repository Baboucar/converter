<template>
    <div class="container">
  <h1>Welcome</h1>
 
 <h2> {{cementPrice}}</h2>
 
  <form  class="flex">
      
 <div >
     <label class="label" >Select Cement Type</label>

          <select  @change="onChange($event)" v-model="test">
              <option :value="price" >Regular</option>
              <option  :value="secondPrice" >Second Option</option>
              <option :value="thirdPrice" >Third Option</option>
          </select>
      </div>
  <div class="form-group">
          <label class="label" for="">BAGS</label>
       <input type="text" name="" id="" placeholder="number of bags" v-model="numberofBags">
  </div>

  <div  class="form-group">
       <label class="label" for="">GMD</label>
        <input type="text" name="" id="" v-model="calclatePriceInGMD" disabled>
   </div>

   <div  class="form-group">
       <label class="label" for="">USD</label>
        <input type="text" name="" id="" v-model=" eurotoUSD"  disabled>
   </div>

    <div  class="form-group">
       <label  class= "label" for="">POUNDS</label>
        <input type="text" name="" id=""  v-model="euroToPounds" disabled>
   </div>

    <div  class="form-group">
       <label class="label" for="">EURO</label>
        <input type="text" name="" id="" v-model="euroToGMD" disabled>
      
   </div>
   
   
   </form>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import axios from 'axios';
    export default {
        data(){
        return{
             numberofBags: 0,
                rate: [],
                cementPrice:0,
                currentDalasis: 0,
                currentDollers:0,
                currentPounds:0,
                test: ''
             
        }
        },
     computed:{
            ...mapState([
             'price',
              'secondPrice',
              'thirdPrice'
            ]) ,

        calclatePriceInGMD(){
       return this.numberofBags * this.price;
    },
     euroToGMD(){
            return  ((this.numberofBags * this.price)/this.currentDalasis).toFixed(2);
        },

         euroToPounds(){
           return ((this.numberofBags * this.price)/ (this.currentPounds * 30)).toFixed(2);
        },
        eurotoUSD(){
            return ((this.numberofBags * this.price)/(this.currentDollers * 15)).toFixed(2);
        },
     },
     methods:{
           fetchData: function() {
      axios
        .get("http://data.fixer.io/api/latest?access_key=329688837ae51630153c71e68426afb7")
        .then(response => {
          this.rate = response.data;
          this.currentDalasis = this.rate.rates.GMD;
          this.currentDollers = this.rate.rates.USD;
          this.currentPounds = this.rate.rates.GBP;

          console.log("euro to dollers" + this.rate.rates.GBP )
        })
        .catch();
    },
     onChange(event){
         this.cementPrice = event.target.value
     }
     },
       created:function(){
         
            this.fetchData();
            console.log("the price" + this.price)
            
            
        }
     
    }
</script>

<style >

body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


input{
    width:100%;
    border-radius: 5px;
    border:none;
    border:2px solid #eee;
    font-size: 1rem;

}
.label{
 display: block;
 padding:.5rem;
 font-weight: bold;
}

.container{
    width: 80%;
    margin: 0 auto;
}

@media(min-width:720px){
    .flex{
    display: flex;
    justify-content: space-between;
    margin-top: 10rem;
}
}
input,select{
    height: 40px;
    font-size: 1rem;
}


</style>