import 'bootstrap';
import 'icheck';
import 'chosen-js';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js';
import 'bootstrap-material-design';

$(document).ready(function () {
    $('body').bootstrapMaterialDesign();
    $('.datepicker').datepicker({
        language: 'fr',
        format: 'dd/mm/yyyy',
        immediateUpdates: 'true',
        startView: 'years',
        defaultViewDate: '-18y',
        endDate: '0d'
    });
});

$('input.icheck').iCheck({
    checkboxClass: 'icheckbox_classic',
    radioClass: 'iradio_classic',
    increaseArea: '20%' // optional
});

$('input.icheck-choice').iCheck({
    checkboxClass: 'icheckbox_choice',
    radioClass: 'iradio_choice',
    increaseArea: '20%'
});

if ($('input#clubMember').is(':checked')) {
    $('.club-collapse').collapse('show');
}

$('input.icheck-choice').on('ifChecked', function (event) {
    const $currentTarget = $(event.currentTarget);
    $('.forfait-container').addClass('not-selected');
    $currentTarget.parents('.forfait-container').removeClass('not-selected');
});

$('input#clubMember').on('ifChecked', function (event) {
    $('.club-collapse').collapse('show');
});

$('input#clubMember').on('ifUnchecked', function (event) {
    $('.club-collapse').collapse('hide');
});

$('.chosen-select').chosen({
    width: '100%',
    no_results_text: 'Aucun résultat pour '
});
