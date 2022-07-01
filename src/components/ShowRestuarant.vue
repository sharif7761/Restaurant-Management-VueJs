<template>
<HeaderComp />
    <h1>Show Restuarant Page</h1>
    <div class="input-container">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="contact" placeholder="Enter Contact Number"/>
        <input type="text" v-model="address" placeholder="Enter Address"/>
        <button v-on:click="saveRestuarant">Update</button>
    </div>
</template>

<script>
import HeaderComp from "./Header.vue"
export default {
    name: 'ShowRestuarant',
    data(){
        return {
            name: '',
            contact: '',
            address: '',
        }
    },
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
