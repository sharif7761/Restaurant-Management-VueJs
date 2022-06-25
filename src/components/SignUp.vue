<template>
    <h1>Sign Up</h1>
    <div class="register-container">
        <input type="text"  v-model="name" placeholder="Enter Name"/>
        <input type="email" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Register</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'SignUp',
    data(){
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signUp(){
            const result = await axios.post("http://localhost:3000/users",{
                name: this.name,
                email: this.email,
                password: this.password
            })

            if(result.status===201){
                alert("Sign Up is done")
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
        }
    }
}
</script>
<style scoped>
    .register-container input, button{
        display: block;
    }
</style>
