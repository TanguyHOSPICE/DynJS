//Affichez progressivement et lentement les différents titres et masquez progressivement les éléments de la classe .content.

$(() => {
	$('h1, h2').fadeIn('slow');
	$('.content').fadeOut('slow');
});
