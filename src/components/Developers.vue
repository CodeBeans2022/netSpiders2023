<template>
    <div>
        <div class="container devCon">
            <div class="card text-center" v-for="item in this.developers" :key="item.userID">
                <div class="card-header">
                    {{ item.firstName }}
                </div>
                <div class="card-body">
                    <h1 class="card-title">{{ item.occupation }}</h1>
                    <img :src="item.userImg" alt="">
                    <router-link class="btn btn-success" :to="{name: 'singleDeveloper',  params: {id: item.userID}}">View Profile</router-link>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    computed: {
        developers() {
            return this.$store.state.products
        }
    },
    created() {
        this.$store.dispatch('fetchUsers')
    },
}
</script>

<style scoped>
.devCon {
    height: 100vh;
    overflow: scroll;
}
</style>