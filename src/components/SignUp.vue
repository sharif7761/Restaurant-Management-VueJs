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
        signUp(){
            console.log(this.name);
        }
    }
}
</script>
<style scoped>
    .register-container input, button{
        display: block;
    }
</style>
