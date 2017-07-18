$(document).ready(function() {

	const maxRandom = 120;
	const minRandom = 19;
	const maxCrystal = 12;
	const minCrystal = 1;
	//const numberOfCrystals = 4;

	var currentUserScore;
	var randomlyGeneratedNum;

	var crystalOneVal;
	var crystalTwoVal;
	var crystalThreeVal;
	var crystalFourVal;

	var wins;
	var losses;


	initializeGame();
	initializeWins();
	initializeLosses();

	//Game rules
	function getRandomNum() {
		return Math.floor(Math.random()*(maxRandom-minRandom+1)+minRandom);
	}

	function initializeUserScore() {
		return 0;
	}

	function initializeWins() {
		wins = 0;
	}

	function initializeLosses() {
		losses = 0;
	}

	function generateRandomCrystalNum() {
		return Math.floor(Math.random()*(maxCrystal-minCrystal+1)+minCrystal);
	}

	function addToCurrentUserScore(num) {
		currentUserScore += num;
	}

	function userWon() {
		return currentUserScore === randomlyGeneratedNum;
	}

	function userLost() {
		return currentUserScore > randomlyGeneratedNum;
	}

	function userClickedCrystalOne() {
		addToCurrentUserScore(crystalOneVal);
		bindCurrentScoreToDom();
	}

	function userClickedCrystalTwo() {
		addToCurrentUserScore(crystalTwoVal);
		bindCurrentScoreToDom();
	}

	function userClickedCrystalThree() {
		addToCurrentUserScore(crystalThreeVal);
		bindCurrentScoreToDom();
	}

	function userClickedCrystalFour() {
		addToCurrentUserScore(crystalFourVal);
		bindCurrentScoreToDom();
	}

	function isGameOver() {
		if (userWon()) {
			wins++;
			bindWinsToDom();
			initializeGame();
		}

		if (userLost()) {
			losses++;
			bindLossesToDom();
			initializeGame();
		}
	}
	//end game rules

	//game initialization
	function initializeGame() {
		crystalOneVal = generateRandomCrystalNum();
		crystalTwoVal = generateRandomCrystalNum();
		crystalThreeVal = generateRandomCrystalNum();
		crystalFourVal = generateRandomCrystalNum();

		currentUserScore = initializeUserScore();

		randomlyGeneratedNum = getRandomNum();

		bindRandomNumberToDom();
		bindCurrentScoreToDom();
	}
	//end game initialization

	//bind variables to DOM
	function bindRandomNumberToDom() {
		$('#randomNumber').text(randomlyGeneratedNum);
	}

	function bindCurrentScoreToDom() {
		$('#currentScore').text(currentUserScore);
	}

	function bindWinsToDom() {
		$('#wins').text(wins);
	}

	function bindLossesToDom() {
		$('#losses').text(losses);
	}


	//events
	$('#crystal1').on('click', function() {
		userClickedCrystalOne();
		isGameOver();
	});

	$('#crystal2').on('click', function() {
		userClickedCrystalTwo();
		isGameOver();
	});

	$('#crystal3').on('click', function() {
		userClickedCrystalThree();
		isGameOver();
	});

	$('#crystal4').on('click', function() {
		userClickedCrystalFour();
		isGameOver();
	});
});