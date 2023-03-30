/* $(document).ready(() => {
	$('.element2').keyup(function () {
		$('#elementValue').html($(this).val());
	});

	let form2 = $('#form2');

	form2.prepend('<input type="text" id="lastname" name="lastname" class="element" value="" />');
	form2.prepend('<label for="lastname">Lastname :</label>');
});
 */
//-Adaptez le script afin que la valeur de n'importe quel élément .element ajouté dynamiquement ou non soit affichée dans #elementValue lorsqu'elle est modifiée.

$(() => {
	let form2 = $('#form2');

	form2.on('keyup', '.element2', () => {
		$('#elementValue').html($(this).val());
	});

	form2.prepend('<input type="text" id="lastname" name="lastname" class="element" value="" />');
	form2.prepend('<label for="lastname">Lastname :</label>');
});
