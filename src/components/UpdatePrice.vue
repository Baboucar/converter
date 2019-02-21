<template>
    <div>
        
   <h1>Component to Update Price</h1>
   <h2>{{price}}</h2>
  <div id="nav">
            <button @click="logout">Back To Conversion</button>
      
    </div> 
    <router-view/> 
        <h2 v-if="seen">Price Updated !</h2>
    <form @submit.prevent ="changePrice">
          <input type="text" name="" id="" v-model="price">
    </form>

    </div>
</template>


<script>
import firebase from 'firebase';
import {mapState, mapMutations} from 'vuex';
    export default {
        data(){
            return{
                price:' ',
                seen: false
            }
        },
        methods:{
            ...mapMutations([
                'CHANGE_PRICE'
            ]),
            changePrice:function(){
                this.CHANGE_PRICE(this.price);
                this.seen = true;


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