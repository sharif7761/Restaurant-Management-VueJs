<template>
<HeaderComp />
    <h1>Add Restuarant Page</h1>
    <div class="input-container">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="contact" placeholder="Enter Contact Number"/>
        <input type="text" v-model="address" placeholder="Enter Address"/>
        <button v-on:click="saveRestuarant">Save</button>
    </div>
</template>

<script>
import axios from 'axios'
import HeaderComp from "./Header.vue"
export default {
    name: 'AddRestuarant',
    data(){
        return {
            name: '',
            contact: '',
            address: '',
        }
    },
    methods: {
        async saveRestuarant(){
            const result = await axios.post("http://localhost:3000/restuarants", {
                name: this.name,
                contact: this.contact,
                address: this.address
            })
            if(result.status===201){
                alert("Restuarant saved")
                this.$router.push({name: "Home"})
            }
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
