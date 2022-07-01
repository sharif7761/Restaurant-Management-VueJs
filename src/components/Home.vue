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
    async mounted() {
        const user = localStorage.getItem("user-info");
        
        this.name = JSON.parse(user)[0].name;
        if(!user){
            this.$router.push({name: "SignUp"})
        }
        let result = await axios.get("http://localhost:3000/restuarants")
        this.restuarants = result.data;
    }
}
</script>
