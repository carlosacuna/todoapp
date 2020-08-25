<template>
    <div class="container">
        <div class="row justify-content-md-center mt-5">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">                        
                        <h4 class="card-title mb-4 mt-1">Nuevo usuario</h4>                       
                        <hr>
                        <form @submit.prevent="register">
                            <div class="form-group">
                                <input name="email" class="form-control" placeholder="Correo electronico" required type="email" v-model="email" >
                            </div>
                            <div class="form-group">
                                <input name="name" class="form-control" placeholder="Nombre de usuario" required type="text" v-model="name" >
                            </div>
                            <div class="form-group">
                                <input class="form-control" name="password" placeholder="******" type="password" required v-model="password" >
                            </div>                                    
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success btn-block"> Crear  </button>
                                    </div>
                                </div>                                                                 
                            </div>
                        </form>
                        <div class="row">
                            <div class="col-md-12">                                
                                    <router-link class="btn btn-primary btn-block" to="/login">Iniciar sesion</router-link>
                            </div>                                                                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    name: "",
    password: "",
    error: false
  }),
  methods: {
    register() {
        let email = this.email 
        let name = this.name 
        let password = this.password
        this.$store.dispatch('register', { email, password, name })
            .then(() => {
                this.$router.push('/login')
                alert("Usuario registrado exitosamente. Ya puede iniciar sesion.")
            })
            .catch(err => alert("Algo salio mal."))
    }
  }
};
</script>