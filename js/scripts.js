var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    searchInput:'',
    yellowBug: true,
    powerSweater: true,
    surfsUp: true,
    hipster: true,
    chillaxing: true
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    clicker: function (event) {
      targetId = event.currentTarget.id;
      alert(targetId);
    },
    searcher: function(){

    }
  }
})

//time clock
const clockTime = document.getElementById('clockTime');
const clockDate = document.getElementById('clockDate');
setInterval(() => {
  const now = moment();
  const times = now.format('LT');
  const date = now.format('dddd, MMMM D')
  clockTime.textContent = times;
  clockDate.textContent = date;
}, 1000);

//Search box
function hide_divs(search) {
    let userSearch = search.toLowerCase();
    $('.backer[id*="'+userSearch+'"]').show(); // show the ones that match
}

$(document).ready(function() {
    $("#searchInput").keyup(function() {
        $(".backer").hide();
        var search = $.trim(this.value);
        if(search == ''){
          $(".backer").show();
        }
        hide_divs(search);
    });
});
