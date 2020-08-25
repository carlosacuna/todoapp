<template>
    <div class="container">
        <div class="row justify-content-md-center mt-5">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">                        
                        <h4 class="card-title mb-4 mt-1">Ingreso</h4>                       
                        <hr>
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <input name="email" class="form-control" placeholder="Correo electronico" required type="email" v-model="email" >
                            </div>
                            <div class="form-group">
                                <input  name="password" class="form-control" placeholder="******" type="password" required v-model="password" >
                            </div>                                    
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success btn-block"> Ingresar  </button>
                                    </div>
                                </div>                                                                 
                            </div>
                        </form>
                         <div class="row">                          
                                <router-link class="btn btn-primary btn-block" to="/register">Crear usuario</router-link>                                                                                    
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
    password: "",
    error: false
  }),
  methods: {
    login() {
        let email = this.email 
        let password = this.password
        this.$store.dispatch('login', { email, password })
            .then(() => this.$router.push('/'))
            .catch(err => alert("El usuario no existe"))
    }
  }
};
</script>