<template>
    <div class="card">
        <h5 class="card-header">{{nameCard}}</h5>
        <div class="card-body" >
            <div class="row" v-for="item of items" :key="item._id">
                 <div class="col">             
                    <Task :data="item" />
                 </div>                             
            </div>
        </div>        
    </div>
</template>

<script>

import Task from '@/components/Task.vue'

export default {
    name: "List",
    props:['nameCard','items'],
    components:{
        Task
    }
    
}
</script>