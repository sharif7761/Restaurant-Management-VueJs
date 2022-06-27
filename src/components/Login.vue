<template>
    <h1>Login Page</h1>
    <div class="login-container">
        <input type="email" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Login</button>
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
        async signUp(){
            const result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                password: this.password
            })

            if(result.status===201){
                alert("Login is done")
                localStorage.setItem("user-info", JSON.stringify(result.data))
                 this.$router.push({name: "Home"})
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
<style scoped>
    .login-container input, button{
        display: block;
    }
</style>
