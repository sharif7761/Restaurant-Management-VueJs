<template>
<HeaderComp />
    <h1>Show Restaurant Page</h1>
    <div class="input-container">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name"/>
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact Number"/>
        <input type="text" v-model="restaurant.address" placeholder="Enter Address"/>
        <button v-on:click="updateRestaurant">Update</button>
    </div>
</template>

<script>
import HeaderComp from "./Header.vue"
import axios from 'axios'
export default {
    name: 'ShowRestuarant',
    data(){
        return {
            restaurant : {
                name: '',
                contact: '',
                address: '',
            }
        }
    },
    methods: {
        async updateRestaurant(){
            const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id, {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            })
            if(result.status===200){
                alert("Restaurant Updted")
                this.$router.push({name: "Home"})
            }
        }
    }, 

    components: {
        HeaderComp
    },
    async mounted() {
        const user = localStorage.getItem("user-info");
        if(!user){
            this.$router.push({name: "SignUp"})
        }
        
        const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id)
        this.restaurant = result.data  
    }
}
</script>
