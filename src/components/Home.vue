<template>
<HeaderComp />
    <h1>Hello {{ name }}!! Welcome to Home Page</h1>
</template>

<script>
import HeaderComp from "./Header.vue"
export default {
    name: 'HomePage',
    data(){
        return{
            name: ''
        }
    },
    components: {
        HeaderComp
    },
    mounted() {
        const user = localStorage.getItem("user-info");
        console.log(JSON.parse(user)[0].name);
        this.name = JSON.parse(user)[0].name;
        if(!user){
            this.$router.push({name: "SignUp"})
        }
    }
}
</script>
