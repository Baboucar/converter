<template>
    <div class="container">
     <h2>Login</h2>
     <div>
         <input type="text" v-model="email" name="" id="first" placeholder="Email">
     </div>
     <div>
         <input type="password" v-model="password" name="" id="second" placeholder="Password">

     </div>
       <button @click="login">Login</button>
    </div>
</template>

<script>
import firebase from 'firebase';
    export default {
        name:"Login",
        data(){

            return{
           email:'',
           password:''
            }

        },
        methods:{
            login: function(){
                firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
                    (user)=>{
                       this.$router.replace('updatePrice');
                    },
                    function(err){
                        alert("err"+ err.message) 
                    }
                )
                // this.$router.replace('update')
            }
        }
    }
</script>

<style >
 input{
     margin-top: 1rem;

 }
 button{
     padding:1rem;
     width: 10rem;
     margin-top:1rem;
     display: block;
     background: #1c9963;
     border:none;
     border-radius: 5px;
 }
</style>