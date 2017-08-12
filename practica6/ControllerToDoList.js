/*angular.module("AppList",[])
    .controller("ControllerList",function($scope){
         $scope.nombre='LuisGF';
    
       
        

      }).controller("Second",function($scope){
        $scope.ano= 2017;
      });*/

var app=angular.module("AppList",[]);

      app.controller("ControllerList",function($scope){
          $scope.nuevoNombre={};
          $scope.nombres= [
            {
              nombre: "Luis",
            },
            {
              nombre: "Roberto",
            }

          ];
          $scope.AgregarNombre= function(){
            $scope.nombres.push($scope.nuevoNombre);
             $scope.nuevoNombre={};
          };
            $scope.Borrar=function(){
              $scope.nombres.splice($scope.nuevoNombre,1);
              $scope.nuevoNombre={};
            }
      })


