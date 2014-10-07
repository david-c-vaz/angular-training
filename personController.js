function personController($scope){
		function Student(rollNumber,firstName,lastName){
			this.rollNumber=rollNumber;
			this.firstName=firstName;
			this.lastName=lastName;
			this.fullName=function(){
				return this.firstName+" "+this.lastName;
			}
		}
		$scope.students=[];
	   	$scope.students.push(new Student(1001,"Ken","Peters"));
	   	$scope.students.push(new Student(1002,"Samuel","Swares"));
	   	$scope.students.push(new Student(1003,"Jim","Carry"));
	   	$scope.displayAllStudents=function(){
	   		return $scope.students.reduce(function (prev,cur,index){
	   			return prev+(index>0 ? ", "+cur.fullName() : cur.fullName());
	   		},"This following student are registered in our class : ");
	   	};
	}