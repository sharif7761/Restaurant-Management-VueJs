<template>
    <h1>Login Page</h1>
    <div class="input-container">
        <input type="email" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="login">Login</button>
        <router-link to="/sign-up">Sign Up</router-link>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'LogIn',
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async login(){
            const result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            
            if(result.status===200 && result.data.length>0){
                alert("Login is done")
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name: "Home"})
            } else {
                alert("Wrong credentials")
            }
        }
    },
    mounted() {
        const user = localStorage.getItem("user-info");
        if(user){
            this.$router.push({name: "Home"})
        }
    }
}
</script>
<style>
    .input-container input, button{
        display: block;
    }
</style>
