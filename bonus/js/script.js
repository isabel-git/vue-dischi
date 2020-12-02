// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.

const apiMusic = "https://flynn.boolean.careers/exercises/api/array/music"

var app = new Vue({
  el: '#app',
  data: {
    selectedDisk: "All",
    album: []
  },
  mounted: function () {
    axios.get(apiMusic)
      .then(risposta => {

        this.album = risposta.data.response;
        console.log(this.album);
      });

  },
  methods: {

    ricerca: function (disk) { // filtro per genere
      if (this.selectedDisk === "All") {
        return this.album
      } else {
        return disk.genre.includes(this.selectedDisk);
      }
    }
  }

});