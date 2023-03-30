//-Lorsqu'un utilisateur saisit un commentaire, faites en sorte que la valeur de la zone de texte se retrouve dupliquée dans le paragraphe #commentValue au fil de la saisie de l'utilisateur.
//-Vous pourriez utiliser la fonction keyup

$(() => {
	$('#comment').keyup(() => {
		$('#commentValue').text($('#comment').val());
	});
});
//OU
$(document).ready(() => {
	$('#comment').keyup(function () {
		$('#commentValue').html($(this).val());
	});
});
