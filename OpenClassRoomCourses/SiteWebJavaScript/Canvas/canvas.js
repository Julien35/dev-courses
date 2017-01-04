(function() {

  var canvas = document.querySelector('#canvas');
  var context = canvas.getContext('2d');

  // Tracer un rectangle de 50 sur 80 pixels
  // rectangle plein
  // context.fillStyle = "gold";
  // context.fillRect(50, 35, 50, 80);
  //ou vide
  context.lineWidth = "5";
  context.strokeStyle = "gold";
  context.strokeRect(50, 35, 50, 80);

  context.fillStyle = "rgba(23, 145, 167, 0.5)";
  context.fillRect(40, 25, 40, 40);

  context.clearRect(45, 40, 30, 10);

  // Les chemins simples
  context.strokeStyle = "rgb(23, 145, 167)";
  context.beginPath();
  context.moveTo(20, 20); // 1er point
  context.lineTo(130, 20); // 2e point
  context.lineTo(130, 50); // 3e
  context.lineTo(75, 130); // 4e
  context.lineTo(20, 50); // 5e
  context.closePath(); // On relie le 5e au 1er
  context.stroke();

  // Les arcs
  context.beginPath(); // Le cercle extérieur
  context.arc(75, 75, 50, 0, Math.PI * 2); // Ici le calcul est simplifié
  context.stroke();

  context.beginPath(); // La bouche, un arc de cercle
  context.arc(75, 75, 40, 0, Math.PI); // Ici aussi
  context.fill();

  context.beginPath(); // L'œil gauche
  context.arc(55, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
  context.stroke();

  context.beginPath(); // L'œil droit
  context.arc(95, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
  context.stroke();

  context.beginPath(); // La bouche, un arc de cercle
  context.arc(75, 75, 40, 0, Math.PI);
  context.fill();

  context.beginPath(); // Le cercle extérieur
  context.arc(75, 75, 50, 0, Math.PI * 2);

  context.moveTo(41, 58); // L'œil gauche
  context.arc(55, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);

  context.moveTo(81, 58); // L'œil droit
  context.arc(95, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
  context.stroke();


  //Image
  var zozor = new Image();
  zozor.src = 'zozor.png'; // Image de 80x80 pixels

  context.drawImage(zozor, 35, 35);


})();
