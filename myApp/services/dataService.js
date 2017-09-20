(function(){
    'use strict'
    angular.module('app')
        .service('dataService', function($q){
            
      
      
            this.getTableData = getTableData;
            this.saveData = saveData;
            this.DeleteData = DeleteData;
     
     

            var tableData = [{id : 1, name : 'anvi', city : 'ranchi' , state : 'jsr'},
                            {id : 2, name : 'anup', city : 'pune' , state : 'MH'},
                            {id : 3, name : 'pinkey', city : 'ranchi' , state : 'jsr'},
                            {id : 4, name : 'jaya', city : 'jamshedpur' , state : 'jsr'}
                            ];

                   function getTableData(){
                       return $q.when(tableData);
                   }


               function saveData(data){
                   data.id = tableData.length +1;
                    tableData.push(data);
               } 

               function DeleteData(id){
                   for(var i = 0; i<tableData.length; i++){
                       if(tableData[i].id === id){
                           tableData.splice(i,1);
                       }
                   }
               }

        })
})()