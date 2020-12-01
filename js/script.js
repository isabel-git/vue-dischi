// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.

const apiMusic = "https://flynn.boolean.careers/exercises/api/array/music"

var app = new Vue({
  el: '#app',
  data: {
    album: [{

    }]

  },
  mounted: function () {
    axios.get(apiMusic)
      .then(risposta => {

        this.album = risposta.data.response;
        console.log(risposta.data.response);
      });

  }

});