function incrementScore(team) {
    var scoreElement = document.getElementById(team + 'Score');
    scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
  }
  
  function decrementScore(team) {
    var scoreElement = document.getElementById(team + 'Score');
    var score = parseInt(scoreElement.textContent);
    if (score > 0) {
      scoreElement.textContent = score - 1;
    }
  }
  
  function setScore(team) {
    var newScore = prompt('Yeni gol sayısını girin:');
    if (newScore !== null && !isNaN(newScore) && newScore !== '') {
      var scoreElement = document.getElementById(team + 'Score');
      scoreElement.textContent = parseInt(newScore);
    } else {
      alert('Geçersiz değer! Lütfen bir sayı girin.');
    }
  }
  
  function changeTeamName(team) {
    var newName = prompt('Yeni takım adını girin:');
    if (newName !== null && newName !== '') {
      var nameElement = document.getElementById(team + 'Name');
      nameElement.textContent = newName;
    }
  }
  