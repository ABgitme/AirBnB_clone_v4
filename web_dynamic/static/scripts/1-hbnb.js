$(document).ready(function () {
    $('input[type=checkbox]').change(function () {
      const myListName = [];
      const myId = [];
      $('input[type=checkbox]:checked').each(function () {
        myListName.push($(this).attr('data-name'));
        myId.push($(this).attr('data-id'));
      });
      if (myListName.length === 0) {
        $('.amenities h4').html('&nbsp;');
      } else {
        $('.amenities h4').text(myListName.join(', '));
      }
      console.log(myId);
    });
  });