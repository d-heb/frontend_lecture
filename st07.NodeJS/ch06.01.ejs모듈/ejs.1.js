var $ejs = require('ejs');
var $fs  = require('fs');

var fileName = __dirname + '/ejsPage.htm';

var drinks = [
    { name: 'Bloody Mary', drunkness: 3  },
    { name: 'Martini'    , drunkness: 5  },
    { name: 'Scotch'     , drunkness: 10 }
];
var title = "Any code of your.";
var name  = "RintIanTta.";


// async file read
$fs.readFile(fileName, 'utf8', function(error, data) {

    data = $ejs.render(data, {
        drinks : drinks,
        title  : title,
        name   : name
    });

    console.log(data);

    $fs.writeFile('outasync.txt', data, 'utf8', function(err) {
        if (err) {
            throw err;
        }
    });
});


// sync file read
try {

    var data = $fs.readFileSync(fileName, 'utf-8');

    data = $ejs.render(data, {
        drinks : drinks,
        title  : title,
        name   : name
    });

    console.log(data);

    $fs.writeFileSync('outsync.txt', data, 'utf8');
} catch (err) {
    console.log(err);
}
