<template>
    <div class="container">
        
   <h1>Component to Update Price</h1>
   <h2>{{price}}</h2>
    <h2>{{secondPrice}}</h2>
    <h2>{{thirdPrice}}</h2>
  <div id="nav">
            <button @click="logout">Back To Conversion</button>
      
    </div> 
    <router-view/> 
        <h2 v-if="seen">Price Updated !</h2>
 

        <div>
            <label for="">Regular Price</label>
              <input type="text" name="" id="" v-model="price">
              <button @click="changePrice">Update</button>
       
        </div>

        <div>
            <label for="">Seond Price</label>
            <input type="text" v-model="secondPrice" >
             <button @click="changeSecondPrice">Update</button>
        </div>

        <div>
            <label for="">Third Price</label>
            <input type="text" v-model="thirdPrice" >
            <button @click="changeThirdPrice" >Update</button>
        </div>

   

    </div>
</template>


<script>
import firebase from 'firebase';
import {mapState, mapMutations} from 'vuex';
    export default {
        data(){
            return{
                price:0,
                secondPrice:0,
                thirdPrice: 0,
                seen: false
            }
        },
        methods:{
            ...mapMutations([
                'CHANGE_PRICE',
                'CHANGE_SECONDPRICE',
                'CHANGE_THIRDPRICE'
            ]),
            changePrice:function(){
                this.CHANGE_PRICE(this.price);
                this.seen = true;


            },
            changeSecondPrice:function(){
               this.CHANGE_SECONDPRICE(this.secondPrice);
               this.seen = true;
            },
            changeThirdPrice:function(){
                this.CHANGE_THIRDPRICE(this.thirdPrice);
                this.seen  = true;
            },
             logout:function(){
               firebase.auth().signOut().then(()=>{
                   this.$router.replace('/');
               }) 
            },
        }
    }
</script>

<style scoped>

</style>