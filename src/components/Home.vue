<template>
    <div class="container mx-auto">
        <h1 class="home-heading">Welcome To netSpiders</h1>
        <router-link class="btn btn-success" to="/login">Login</router-link>
        <router-link class="btn btn-success" to="/register">Sign Up</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
    margin-top: 300px;
}

.btn{
    margin: 10px;
}

.home-heading{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 70px;
}
</style>