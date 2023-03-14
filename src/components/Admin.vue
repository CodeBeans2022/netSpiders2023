<template>
    <!-- 13 Tables -->
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <table class="table is-striped is-bordered mt-2 is-fullwidth">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Gender</th>
                                <th>Cell Number</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Occupation</th>
                                <th>Img</th>
                                <th>Join Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in this.users" :key="item.userID">
                                <td>{{ item.userID }}</td>
                                <td>{{ item.firstName }}</td>
                                <td>{{ item.lastName }}</td>
                                <td>{{ item.gender }}</td>
                                <td>{{ item.cellNumber }}</td>
                                <td>{{ item.emailAdd }}</td>
                                <td>{{ item.userRole }}</td>
                                <td>{{ item.occupation }}</td>
                                <td><img :src="item.userImg" alt=""></td>
                                <td>{{ item.joinDate }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    created() {
        this.$store.dispatch('fetchUsers')
    }
}
</script>

<style scoped></style>