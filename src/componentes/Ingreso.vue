    <template>

      <section class="src-componentes-ingreso">
      <div class="jumbotron">
      <h2>Ingreso de Gastos</h2>
      <hr>


        <vue-form :state="formstate" @submit.prevent="enviar()">
    
        <validate tag="div">
          <label for="nombre">Nombre</label> 
          <input type="text" id="nombre" v-model="formData.nombre" required name="nombre" autocomplete="off" class="form-control" :minlength="nombreMinLength" :maxlength="nombreMaxLength" />
    
          <field-messages name="nombre" show="$dirty">        
            <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
            
          <div slot="no-espacios" class="alert alert-danger mt-1">
            No se permiten espacios intermedios
          </div>
          <div slot="minlength" class="alert alert-danger mt-1">
            Requiere mínimo {{nombreMinLength}} caracteres
          </div>         
          
          </field-messages>
        </validate>
    <br>
        <validate tag="div">
          <label for="descripcion">Descripcion</label> 
          <input type="text" id="descripcion" v-model="formData.descripcion" required name="descripcion" autocomplete="off" class="form-control" />
    
          <field-messages name="descripcion" show="$dirty">        
            <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
          </field-messages>
        </validate>

        <br>
        <validate tag="div">
          <label for="importe">Importe</label> 
          <input type="number" id="importe" v-model.number="formData.importe" required name="importe" autocomplete="off" class="form-control" />
    
          <field-messages name="importe" show="$dirty">        
            <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
          </field-messages>
        </validate>
    
        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
      </vue-form>
      <br>
      <hr>

        <h2>Detalles</h2>
        <br>

        <div v-if="gastos.length" class="table-responsive">
        <table class="table table-dark">
        <tr>
           <th>Nombre</th>
           <th>Descripcion</th> 
           <th>Importe</th> 
           <th>Fecha</th>    
        </tr>

        <tr v-for="(gasto,index) in gastos" :key="index">
        <td>{{gasto.nombre}}</td>
        <td>{{gasto.descripcion}}</td>
        <td>{{gasto.importe}}</td>       
        <td>{{gasto.fecha}}</td>                     
        </tr>

        <div :style="{color : cambiarColor(total).color}"> 
        <th>TOTAL{{total}}</th>
        </div>
        

       

        </table>
        </div>
        <h3 v-else class="alert alert-info"> No hay importes ingresados</h3>

      </div>
      </section>

    </template>

<script>

  export default  {
    name: 'src-componentes-ingreso',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate : {},
        formData : this.getInitialData(),
        gastos : [],
        total : 0,
        nombreMinLength: 3,
        nombreMaxLength: 15
      }
    },
    methods: {
      getInitialData() {
        
        return {
          nombre : null,
          descripcion: null,
          importe : null,         
          fecha : null
       }
       },
       enviar() {
        let gasto = {...this.formData}
        gasto.fecha = new Date().toLocaleString()  

       console.log(gasto)
       this.gastos.push(gasto)

       this.formData = this.getInitialData()

       this.total = this.total + gasto.importe


       this.formstate._reset()       
       },
       cambiarColor(total) {  
         let dif = total       
         let color = 'green'
         if(dif >= 1000 && dif <= 5000) color = 'purple'
         if(dif > 5000) color = 'orange'
        return {          
          color
          }
    },
     calcularTotal(gasto) {
         let dif = dif + gasto.importe
        return {
          valor: dif
          }
     }
    },
    computed: {
     
      }
  }


</script>

<style scoped lang="css">
  
  .jumbotron{
    background-color: blueviolet;
    color: white;
  }
  .hr{
    background-color: #eee;
  }
</style>
