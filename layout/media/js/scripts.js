alert(22);

alert(33);

$(document).ready(function(){
  $('.fancybox').fancybox({
    helpers		: {
      title	: {
        type : 'inside'
      }
    }
  });

  function getLoudMthfck() {
    console.log('Shut up!')
  }

});
