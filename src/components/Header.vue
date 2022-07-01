<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    methods: {
        logout(){
            localStorage.removeItem('user-info');
            this.$router.push({name: "Login"})
        }
    }
}
</script>
<style>
    .nav{
        background-color: rgb(168, 168, 220);
        overflow: hidden;
    }
    .nav a{
        padding: 20px;
        text-decoration: none;
        color: rgb(0, 0, 0);

    }
    
</style>
