<template>
    <div>
        <div class="container devCon">
            <div class="card text-center" v-for="item in this.developers" :key="item.userID">
                <div class="card-header">
                    {{ item.firstName }}
                </div>
                <div class="row card-body">
                    <div class="col-12">
                        <h1 class="card-title">{{ item.occupation }}</h1>
                    </div>

                    <div class="col">
                    <div v-for="item in this.projects" :key="item.projID">
                        <img class="active-projects" :src="item.projLink" alt="">
                        <p>{{ item }}</p>
                    </div>
                    </div>

                    <div class="col">
                        <img id="devImg" :src="item.userImg" alt="">
                    </div>
                    <div class="col">
                        <img class="active-projects" src="https://i.postimg.cc/TYrzrDhP/My-Bakery.png" alt="">
                        <img class="active-projects" src="https://i.postimg.cc/KvWxDvkW/Grid-Calculator.png" alt="">
                    </div>

                    <div class="col-12">
                        <router-link class="btn btn-success"
                            :to="{ name: 'singleDeveloper', params: { id: item.userID } }">View Profile</router-link>
                    </div>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    </div>
</template>
<!-- ADD A PROJECTS TABLE -->
<!-- NESTED IMAGES ARE PROJECTS CURRENTLY BEING WORKED ON -->
<script>
export default {
    computed: {
        developers() {
            return this.$store.state.users
        },
        projects() {
            console.log(this.$store.state.activeProjects)
            return this.$store.state.activeProjects
        }
    },
    created() {
        this.$store.dispatch('fetchUsers');
        this.$store.dispatch('fetchActProjects');
    },
}
</script>

<style scoped>
.devCon {
    height: 100vh;
    overflow: scroll;
}

#devImg {
    margin-top: 50px;
    height: 500px;
    width: 300px;
    object-fit: cover;
    border-radius: 10px;
}

.active-projects {
    height: 300px;
    width: 400px;
    object-fit: contain;
}
</style>