var app = angular.module('myApp');
app.controller('MainStoreController', function($scope){
	$scope.product = [
		{
        	name : "iphone7",
			model : "apple",
			year : "2016",
			price : 500,
			producer : "FPT",
			available : 5   
    	},
		{
			name : "galaxy s7",
			model : "samsung",
			year : "2016",
			price : 500,
			producer : "FPT",
			available : 1     
		}
		];
		$scope.increaseItemCount = function(product) {
    		product.available++;
			product.price 
  		};
		
		$scope.decreaseItemCount = function(product) {
    		if (product.available > 0) {
      			product.available--;
   			}
  		};
		
		$scope.remove = function(item) { 
  		var index = $scope.product.indexOf(item);
  		$scope.product.splice(index, 1);     
		};
		this.addText = function(text) {
		      if (text) {
		        var obj = {
		          	name : text.name,
					model : text.model,
					year : text.year,
					price : text.price,
					producer : text.producer,
					available : text.available    
		        };
		        $scope.product.push(obj);
				 console.log(this.product);
		      }
		}
});