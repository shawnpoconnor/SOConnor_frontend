$('#boxes div').on('click', function(e) {
  e.stopPropagation();
  alert($(this).text());
});