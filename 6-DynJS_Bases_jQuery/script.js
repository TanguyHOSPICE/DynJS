// 1-Supprimez le paragraphe #introduction
/* 2-Ajoutez deux nouveaux éléments à la liste #goals :
      -Un élément "Objectif 0" en début de liste
      -Un élément "Objectif 5" en fin de liste
*/
/* $(document).ready(() => {
	$('#introduction').remove();
	$('#goals').prepend('<li>Objectif 0</li>');
	$('#goals').append('<li>Objectif 5</li>');
}); */
//OU
$(document).ready(() => {
	$('#introduction').remove();

	let list = $('#goals');
	list.prepend('<li>Objectif 0</li>').append('<li>Objectif 5</li>');
});
