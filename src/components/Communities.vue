<template>
    <div class="container">
        <div class="row w-100">
        <div class="col-5 mx-auto" v-for="item in this.communities" :key="item.commID">
            <router-link class="btn btn-success" id="community-link" :to="{name:'singleCommunity', params: {id: item.commID}}">{{ item.commName }}</router-link>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        computed: {
            communities() {
                return this.$store.state.communities
            }
        },
        created() {
            this.$store.dispatch('fetchCommunities')
        },
    }
</script>

<style scoped>
#community-link{
    height: 100px;
    width: 200px;
    margin: 50px;
}
</style>