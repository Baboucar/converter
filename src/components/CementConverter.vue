<template>
    <div>
  <h1>Welcome</h1>
 
 <h2>{{price}}</h2>
  <form  class="flex">
  <div>
       <input type="text" name="" id="" placeholder="number of bags" v-model="numberofBags">
  </div>
  <div>
       <label for="">GMD</label>
        <input type="text" name="" id="" v-model="calclatePriceInGMD" disabled>
   </div>
   <div>
       <label for="">USD</label>
        <input type="text" name="" id="" v-model=" eurotoUSD"  disabled>
   </div>
    <div>
       <label for="">POUNDS</label>
        <input type="text" name="" id=""  v-model="euroToPounds" disabled>
   </div>
    <div>
       <label for="">EURO</label>
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
                cementPrice:this.theprice,
                currentDalasis: 0,
                currentDollers:0,
                currentPounds:0,
             
        }
        },
     computed:{
            ...mapState([
             'price'
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
     },
       created:function(){
         
            this.fetchData();
            console.log("the price" + this.price)
            
            
        }
     
    }
</script>

<style scoped>
.flex{
    display: flex;
}
input{
    height: 30px;
}

</style>