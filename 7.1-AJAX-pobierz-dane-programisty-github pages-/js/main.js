let takeUrl = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'

$('#download').on('click', function()
{
  $("<div id='dane-programisty'>").appendTo('body');

$.getJSON(takeUrl, function(data)
{
$('<p>').text(data.imie).appendTo('#dane-programisty');
$('<p>').text(data.nazwisko).appendTo('#dane-programisty');
$('<p>').text(data.zawod).appendTo('#dane-programisty');
$('<p>').text(data.firma).appendTo('#dane-programisty');
});
})