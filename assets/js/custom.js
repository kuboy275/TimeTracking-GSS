$(document).ready(function() {

    $('#year').on('change', function() {
        $('.data').hide();
        $('#' + $(this).val()).fadeIn(2000);
    }).change();
    $('#listyear').on('change', function() {
        $('.listyear').hide();
        $('#' + $(this).val()).fadeIn(2000);
    }).change();
    $('#name').on('change', function() {
        $('.listname').hide();
        $('#' + $(this).val()).fadeIn(2000);
    }).change();

    $('.delete-item').on('click', function(e) {
        e.preventDefault();
        Swal.fire({
            icon: 'question',
            title: 'Bạn muốn xóa item này',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Xóa thành công!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'error')
            }
        })
    })



});