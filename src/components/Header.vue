<template>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Add Restaurant</a>
        <a href="#">Show Restaurants</a>
        <a href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    
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
