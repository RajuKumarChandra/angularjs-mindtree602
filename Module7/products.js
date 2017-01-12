angular.module("exampleApp", [])
.constant("baseUrl","http://gturnquist-quoters.cfapps.io/api")
.controller("defaultCtrl",function ($scope,$http,baseUrl) {

    $scope.displayMode = "list";
    $scope.currentProduct = null;


	$scope.listProducts = function() {
		$http.get(baseUrl).success(function(data){
			$scope.products = data;
			console.log(data[1].type);
		});
		
    }

	$scope.createProduct = function(product){
		$http.post(baseUrl,product).success(function(newProduct){
			$scope.products.push(product);
			$scope.displayMode = "list";
		});
		
	}

	$scope.updateProduct = function(product){
		for(var i = 0; i < $scope.products.length; i++){
			if ( $scope.products[i].id == product.id ){
				$scope.products[i] = product;
				break;
			}
		}
	}
	$scope.editOrCreateProduct = function(product){
		$scope.currentProduct = product ? angular.copy(product) : {};
		$scope.displayMode = "edit";
	}

	$scope.saveEdit = function(product){
		if (angular.isDefined(product.id)){
			$scope.updateProduct(product);
		}else{
			$scope.createProduct(product);
		}
	}

    $scope.listProducts();

});