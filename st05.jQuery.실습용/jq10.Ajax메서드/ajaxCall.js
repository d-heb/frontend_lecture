/**
 * Created by 1class-04 on 2016-12-17.
 */

var $loadImage = '<img src=\"loading.gif\">';

var _ajax = {
    errorMessage: function (xhr, textStatus, error) {
        var msg = '';
        msg += "code:" + xhr.status + "\n";
        msg += "message:" + xhr.responseText + "\n";
        msg += "status:" + textStatus + "\n";
        msg += "error : " + error + "\n";
        alert(msg);
        console.log(msg);
    },
    callData: function (context, _url, path, _param, _type) {
        console.log( _url + '/' +path +_param);
        $.ajax({
            url: _url + '/' +path +_param,
            data: null, // 사용하는 경우에는 { data1:'test1', data2:'test2' }
            type: 'get', // get, post
            timeout: 10000,
            dataType: _type, // text, html, xml, json, jsonp, script
            beforeSend: function () {
                context.html($loadImage);
            }
        }).done(function (data, textStatus, xhr) {
            switch (_type) {
                case 'json':
                    var $data = _ajax.bindJsonData(data, context);

                    break;
                case 'xml':
                    var text = _ajax.bindXMLData(data);
                    console.log(text);
                    context.html(text);
                    break;
                default:
                    context.html(data);
                    break;
            }
        }).fail(function (xhr, textStatus, error) {
            var msg = '<p> 데이터 가져오기를 실패하였습니다. </p>';
            context.html(msg);
            _ajax.errorMessage(xhr, textStatus, error);
        }).always(function (data, textStatus, xhr) {
            context.find('img').remove();
        });
        return false;
    },
    bindJsonData: function (data, context) {
        var $data='';

        for (var d in data) {
            var $newRow = $("<tr />");
            var $no = $('<td/>').text(data[d].no);
            var $title =  $('<td/>').text(data[d].title);
            var $writer = $('<td/>').text(data[d].writer);
            var $content= $('<td/>').text(data[d].content);
            myApp.count = data[d].no;
            $newRow.append($no);
            $newRow.append($title);
            $newRow.append($writer);
            $newRow.append($content);
            context.append($newRow);
        }
        return $data;
    },
    bindXMLData: function (data) {
        var thead = '<tr>' +
            '<th>id</th>' +
            '<th>name</th>' +
            '<th>price</th>' +
            '<th>description</th>' + '</tr>';

        var xml = $(data).find('item');
        var tbody = '';
        for (var x in xml) {
            tbody += '<tr>' +
                '<td>' + $(xml[x]).attr('id') + '</td>' +
                '<td>' + $(xml[x]).attr('name') + '</td>' +
                '<td>' + $(xml[x]).children('price').text() + '</td>' +
                '<td>' + $(xml[x]).children('description').text() + '</td>' + '</tr>';
        }
        return thead + tbody;
    },
    getData3: function () {
        console.log('getData3');

    },
    getData4: function () {
        console.log('getData4');

    }
}


