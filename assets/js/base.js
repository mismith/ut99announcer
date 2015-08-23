angular.module('ut99announcer', [])
	
	.run(function(){
		// remove 300ms click delay on touch devices
		FastClick.attach(document.body);
	})
	
	.controller('AppCtrl', ["$scope", function($scope){
		$scope.sounds = [
			[
				{$id: 'doublekill',   name: 'Double Kill'},
				{$id: 'triplekill',   name: 'Triple Kill'},
				{$id: 'multikill',    name: 'Multi Kill'},
				{$id: 'megakill',     name: 'Mega Kill'},
				{$id: 'ultrakill',    name: 'Ultra Kill'},
				{$id: 'monsterkill',  name: 'Monster Kill'},
			],
			[
				{$id: 'headshot',     name: 'Headshot'},
				{$id: 'killingspree', name: 'Killing Spree'},
				{$id: 'rampage',      name: 'Rampage'},
				{$id: 'dominating',   name: 'Dominating'},
				{$id: 'unstoppable',  name: 'Unstoppable'},
				{$id: 'godlike',      name: 'Godlike'},
			],
			[
				{$id: 'prepare',      name: 'Prepare for battle'},
				{$id: 'firstblood',   name: 'First Blood'},
				{$id: 'takenlead',    name: 'Taken the lead'},
				{$id: 'lostlead',     name: 'Lost the lead'},
				{$id: 'lostmatch',    name: 'You have lost the match'},
				{$id: 'winner',       name: 'Congratulations, you\'re the winner'},
			],
			[
				{$id: 'cd1',          name: '1'},
				{$id: 'cd2',          name: '2'},
				{$id: 'cd3',          name: '3'},
				{$id: 'cd4',          name: '4'},
				{$id: 'cd5',          name: '5'},
				{$id: 'cd6',          name: '6'},
				{$id: 'cd7',          name: '7'},
				{$id: 'cd8',          name: '8'},
				{$id: 'cd9',          name: '9'},
				{$id: 'cd10',         name: '10'},
			],
			[
				{$id: 'assist',       name: 'Assist'},
				{$id: 'capture',      name: 'Capture'},
				{$id: 'proceed',      name: 'You may proceed'},
				{$id: 'failed',       name: 'You have failed to proceed'},
				{$id: 'lastplace',    name: 'Last place'},
				{$id: 'cd1min',       name: '1 minute remaining'},
				{$id: 'cd30sec',      name: '30 seconds left'},
				{$id: 'cd3min',       name: '3 minutes remaining'},
				{$id: 'cd5min',       name: '5 minutes remaining'},
			],
		];
		angular.forEach($scope.sounds, function (sound) {
			angular.forEach(sound, function (clip) {
				clip.$audio = new Audio('assets/audio/' + clip.$id + '.wav');
				clip.$audio.preload = 'auto';
			});
		});
		$scope.play = function (clip) {
			clip.$audio = clip.$audio || new Audio('assets/audio/' + clip.$id + '.wav');
			clip.$audio.play();
		};
	}]);