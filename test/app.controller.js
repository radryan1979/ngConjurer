(function(){
	'use strict';
	
	angular.module('app')
	.controller('ctrl', ctrl);
	
	ctrl.$inject = ['$scope','wizardServiceApi'];
	
	function ctrl($scope,wizardServiceApi){
		// Don't display the directive until we have constructed
		// the wizard.
		$scope.isReady = false;
		wizardServiceApi.createWizard("ryanswizard");
		wizardServiceApi.setCurrentStep("ryanswizard",1);
		wizardServiceApi.setWizardProperty("ryanswizard","numberOfSteps",3)
		wizardServiceApi.setWizardProperty("ryanswizard","onFinish",function(){alert("You clicked finish.");})
		wizardServiceApi.addStep("ryanswizard",1,{
				stepName:"Step One",
				stepHasChanges:false,
				canEnter:true,
				canExit:true,
				stepComplete:false,
				isFirstStep:true,
				isLastStep:false,
				stepData:{}
		});
		wizardServiceApi.addStep("ryanswizard",2,{
				stepName:"Step Two",
				stepHasChanges:false,
				canEnter:true,
				canExit:true,
				stepComplete:false,
				isFirstStep:false,
				isLastStep:false,
				stepData:{}
		});
		wizardServiceApi.addStep("ryanswizard",3,{
				stepName:"Step Three",
				stepHasChanges:false,
				canEnter:true,
				canExit:true,
				stepComplete:false,
				isFirstStep:false,
				isLastStep:true,
				stepData:{}
		});
		var mywizard = wizardServiceApi.getWizardObject("ryanswizard");
		// The wizard has been constructed, we can now show
		// the directive.
		$scope.isReady = true;
	};
})();