<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{data.title}}</h5>
            <p class="card-text">{{data.description}}</p>
            <a href="#" @click="edit()" class="btn btn-primary m-2">Actualizar</a>
            <a href="#" @click="completed()" v-if="data.state == 'Pendiente'" class="btn btn-success m-2">Completada</a>
        </div>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
    name: 'Task',
    props:['data'],
    methods:{
        ...mapMutations(['showForm']),
        edit(){
            let item = {...this.data, headerTitle: `Editar tarea: ${this.data.title}`}
            this.showForm(item) 
        },
        completed(){
            let item = this.data
            item.state = 'Completada'
            this.$store.dispatch('updateTaks',item)
        }
    },
    
}
</script>