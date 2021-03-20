$(document).ready(function() {
    $('#year').on('change', function() {
        $('.data').hide();
        $('#' + $(this).val()).fadeIn(2000);
    }).change();
});