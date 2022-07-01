<template>
<HeaderComp />
  <h1>Hello {{ name }}!! Welcome to Home Page</h1>
  <table>
    <thead>
        <tr>
        <th >Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in restuarants" :key="item.id">
            <td>{{ item.name}}</td>
            <td>{{ item.contact}}</td>
            <td>{{ item.address}}</td>
            <td>
                <router-link :to="'/show/'+item.id">Update</router-link>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';
import HeaderComp from "./Header.vue"
export default {
    name: 'HomePage',
    data(){
        return{
            name: '',
            restuarants: [],
        }
    },
    components: {
        HeaderComp
    },
    methods: {
        async deleteRestaurant(id){
            let result = await axios.delete("http://localhost:3000/restaurants/"+id)
            if(result.status === 200) {
                alert("Restuarant deleted")
                this.loadData()
            }
        },
        async loadData(){
        const user = localStorage.getItem("user-info");

        this.name = JSON.parse(user)[0].name;
        if(!user){
            this.$router.push({name: "SignUp"})
        }
        let result = await axios.get("http://localhost:3000/restaurants")
        this.restuarants = result.data;
        }
    },

    mounted() {
        this.loadData()
    }
}
</script>
