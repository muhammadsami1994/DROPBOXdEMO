angular
    .module('inputIconDemo', ['ngMaterial'])
    .controller('DemoCtrl', function($scope) {
        var client = new Dropbox.Client({ key: 'nvhm0a8vj61h0tz' });

        client.authenticate(function () {

            client.writeFile('hello.txt', 'Hello, World!', function () {

                alert('File written!');

            });
        });


    }
);