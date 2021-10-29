<template>

  <section class="src-componentes-respuesta">
    <div class="jumbotron">
    <h2>Respuestas</h2>
    <br>

    <div class="table-responsive">
      <table class="table table-dark">        
       <tr v-for="(pregunta,index) in preguntas" :key="index">
      <td>{{pregunta.numero}}</td>
      <td>{{pregunta.respuestas}}</td>
      </tr>
         </table>
        </div>
    </div>        
  </section>   
</template>

<script>
  export default  {
    name: 'src-componentes-respuesta',
    props: [],
    mounted () {
    },
    data () {
      return {
        preguntas : [
{ numero: 1, respuestas: ['a','e'] },
{ numero: 2, respuestas: ['c'] },
{ numero: 3, respuestas: ['e'] }
]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-respuesta {
  }
</style>
