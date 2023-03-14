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
                        <div class="row">
                            <div class="col-6">
                                <div style="margin-right: 200px;">
                                <i class="fa-sharp fa-solid fa-person-running m-1 animate__animated animate__fadeInLeft" id="actIconRun"></i>
                                <i class="fa-sharp fa-solid fa-computer m-1" id="actIcon"></i>
                                </div>
                            </div>
                            <div class="col-6">
                                <i class="fa-sharp fa-solid fa-circle-check" id="commIcon" style="margin-left: 180px;"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col mt-5" id="activeProj">
                       
                        <div class="m-3" id="aProjBG" v-for="item in this.projects" :key="item.projID">
                            <img class="active-projectsImg" :src="item.projLink" alt="">
                        </div>
                    </div>

                    <div class="col">
                        <img id="devImg" :src="item.userImg" alt="">
                    </div>
                    <div class="col">
                        <img class="active-projectsImg" src="https://i.postimg.cc/TYrzrDhP/My-Bakery.png" alt="">
                        <img class="active-projectsImg" src="https://i.postimg.cc/KvWxDvkW/Grid-Calculator.png" alt="">
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

.active-projectsImg {
    height: 300px;
    width: 300px;
    object-fit: contain;
}

#activeProj {
    height: 500px;
    overflow: scroll;
    /* box-shadow: 0 8px 32px 0 rgba(42, 10, 80, 0.37); */
    /* border-radius: 20px; */
}

#aProjBG{
    padding: 5px;
    background-color: rgba(43, 144, 181, 0.136);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
}

#actIcon{
    font-size: 30px;
}

#actIconRun {
    font-size: 30px;
}

#commIcon{
    font-size: 30px;
    animation: rotate 8s ease 0s infinite forwards;
}
</style>