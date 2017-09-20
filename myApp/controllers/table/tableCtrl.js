(function () {
    'use strict';
    angular.module('app')
        .controller('tableCtrl', function (configService, dataService) {
            var vm = this;

            vm.address = [];
            

            configService.getTableConfig().then(function (response) {
                vm.address = response;
            })

            dataService.getTableData().then(function(response){
                vm.addData = response;
            })

            vm.remove =  function(id){
            dataService.DeleteData(id);
            }
        })

        //  function save(){
        //     vm.grid = true;
        // }

        //     function  forward(){
        //     vm.grid = false;
        // }
})()