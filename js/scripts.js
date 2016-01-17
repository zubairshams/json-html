$(document).ready(function() {
    $('.convert').click(function() {
        $('#data').empty();

        try {
            var data = $('#resume-json').val();

            if (typeof data === 'string') {
                data = JSON.parse(data);
            }
        } catch (err) {
            alert('Please enter valid json.');
            return false;
        }

        $.each(data, jsonToHtml);
    })
});

function jsonToHtml(key, value) {
    if (typeof value === 'object' && value !== null) {
        $.each(value, jsonToHtml);
    } else {
        var html = '<b>' + titleize(key) + '</b>' + " : " + value + "<br/>";
        $('#data').append(html);
    }
}

function titleize(s) {
    s = s.toString().replace(/_/g, ' ').toLowerCase();

    return s.replace(/(^|\s)[a-z]/g, function(f) {
        return f.toUpperCase()
    });
}
