<template>
    <div>       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Todo App</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">                   
                    <li class="nav-item" v-if="token">
                        <a class="nav-link" @click="logout" href="#">
                            <router-link class="nav-link" to="/login">Cerrar sesion</router-link>
                        </a>
                    </li>
                </ul>              
            </div>
        </nav>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
    name: 'Header',
    computed:{
        ...mapState(['token']),
    },
    methods:{
        ...mapMutations(['logout'])
    },
}
</script>