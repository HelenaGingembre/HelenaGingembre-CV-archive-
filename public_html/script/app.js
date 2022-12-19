$(function() {
    // Получаем данные формы.
    var form = $('#ajax-contact');

    // Получаем сообщения из div
    var formMessages = $('#form-messages');

    // Устанавливаем прослушиватель для контактной формы.
    $(form).submit(function(event) {
        // Блокируем отправку данных формы в браузере.
        event.preventDefault();

        // Сериализуем данные формы.
        var formData = $(form).serialize();
    // Отправка данных формы с помощью AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function(response) {
                // Удостовериваемся в том, что div formMessages содержит класс 'success'.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Задаем текст сообщения.
                $(formMessages).text(response);

                // Очищаем форму.
                $('#name').val('');
                $('#email').val('');
                $('#msg').val('');
            })
            .fail(function(data) {
                // Удостовериваемся, что div formMessages содержит класс 'error'.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Устанавливаем текст сообщения.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occurred and your message could not be sent. Write about the error e.izotova@ukr.net');
                }
            });

    });

});