<template>
<HeaderComp />
    <h1>Add Restuarant Page</h1>
</template>

<script>
import HeaderComp from "./Header.vue"
export default {
    name: 'AddRestuarant',
    components: {
        HeaderComp
    },
    mounted() {
        const user = localStorage.getItem("user-info");
        if(!user){
            this.$router.push({name: "SignUp"})
        }
    }
}
</script>
