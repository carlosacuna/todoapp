<template>
    <div>
        <h2>{{title}}</h2>
        <form>
            <div class="form-group">
                <label>Titulo</label>
                <input type="text" id="title" required v-model="form.title" class="form-control" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
                <label>Descripcion</label>
                <textarea class="form-control" v-model="form.description" id="description" rows="3"></textarea>
            </div>
            <div class="d-flex flex-row-reverse bd-highlight">
                <button  @click="deleteForm" type="button" class="btn btn-danger m-2">Eliminar</button>
                <button  @click="saveForm" type="button" class="btn btn-success m-2">
                    <span v-if="title == 'Crear nueva tarea'" >Guardar</span>
                    <span v-else>Actulizar</span>
                </button>
            </div>
        </form>  
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'


export default {
    name: "form",
    data() {
        return {
            title:false,
            form:{
                _id:null,
                title:null,
                description:null,
            }
        }
    },
    computed:{
        ...mapState(['dataForm']),
    },
    methods:{
        ...mapMutations(['showForm']),
        saveForm(){
            if(!this.form.title){
                alert("El titulo es requerido!")
                return false;
            }   
            if(this.form._id){
                this.$store.dispatch('updateTaks',this.form)
                this.showForm()
                alert("Tarea actualizada exitosamente!")
            }else{
                this.$store.dispatch('saveTaks',{...this.form, state:'Pendiente'})
                .then((resp) =>{
                     this.showForm()
                     alert("Tarea guardada exitosamente!")
                })
                .catch(err => alert("Algo salio mal"))              
                
            }
        },
        deleteForm(){
            var resp= confirm("Seguro desea eliminar la tarea?");
            if (resp == true)
            {               
                this.$store.dispatch('deleteTaks',this.form)
                this.showForm()
                return true;
            } 
        }
    },
    created(){
        if(this.dataForm._id){
            this.form = this.dataForm
            this.title = this.dataForm.headerTitle
        }else{
            this.title = this.dataForm
        }
    }
}
</script>