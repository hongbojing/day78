angular
    .module('myApp',[])
    .controller('myController', myController);

myController.$inject = ['$http'];
function myController($http){
    var vm = this;
    vm.resultsArray = [];
    vm.days = ['M', 'T', 'W', 'R', 'F', 'S'];
    vm.periods = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    vm.data = [
        {day:['M', 'T', 'W', 'R', 'F', 'S'], period:[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
    ];

    $http.get('/20158.json').success(function (results) {
        vm.resultsArray = results.sections;
        return vm.resultsArray;
    });
    console.log(vm.resultsArray);
}