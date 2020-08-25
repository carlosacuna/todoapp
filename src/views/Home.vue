<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-row-reverse bd-highlight">
          <button v-if="!dataForm" @click="showForm('Crear nueva tarea')" class="btn btn-success">Nueva tarea</button>
          <button v-else @click="showForm()" class="btn btn-primary">Volver</button>
        </div>
      </div>
      <div class="col-12" v-if="dataForm">
        <Form />
      </div>
    </div>
    <div class="row" v-if="!dataForm">
     <div class="col-4 mb-2">
       <List nameCard="Tareas pendientes" :items="orderArray.pending" />
     </div>   
     <div class="col-4">
       <List nameCard="Tareas completadas" :items="orderArray.completed" />
     </div>      
    </div>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import List from '@/components/List.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  computed:{
    ...mapState(['tasks','dataForm']),
    orderArray(){
      let data = []
      data['pending'] = this.tasks.filter(item => item.state == 'Pendiente');
      data['completed'] = this.tasks.filter(item => item.state == 'Completada');
      return data
    }
  },
  methods:{
    ...mapMutations(['showForm'])
  },
  components:{
    List,
    Form
  },
  created(){
     this.$store.dispatch('getTaks')
  }
}
</script>
