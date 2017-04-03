'use strict'; // Mode strict du JavaScript

var phrases = [
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "Aenean commodo ligula eget dolor. Aenean massa.",
  "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  "Nulla consequat massa quis enim.",
  "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
  "Nullam dictum felis eu pede mollis pretium.",
  "Integer tincidunt. Cras dapibus.",
  "Vivamus elementum semper nisi.",
  "Aenean vulputate eleifend tellus.",
  "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
  "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
  "Phasellus viverra nulla ut metus varius laoreet.",
  "Quisque rutrum. Aenean imperdiet.",
  "Etiam ultricies nisi vel augue.",
  "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "Aenean commodo ligula eget dolor. Aenean massa.",
  "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
  "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  "Nulla consequat massa quis enim.",
  "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
  "Nullam dictum felis eu pede mollis pretium.",
  "Integer tincidunt. Cras dapibus.",
  "Vivamus elementum semper nisi.",
  "Aenean vulputate eleifend tellus.",
  "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
  "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
  "Phasellus viverra nulla ut metus varius laoreet.",
  "Quisque rutrum. Aenean imperdiet.",
  "Etiam ultricies nisi vel augue.",
  "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ipsuminus max.",
  "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
  "Maecenas nec odio et ante tincidunt tempus.",
  "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
  "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
  "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
];

console.log(phrases);
console.log(phrases.length);

// récupère une référence dom de la balise body
var body = document.getElementsByTagName("body")[0];

var blockquotei = [];
var n = phrases.length;
var total = 0;

// boucle pour créer les éléments blockquote
for (var i = 0; i < n; i++) {

  var phrase = phrases[i];
  var text = document.createTextNode(phrase + " " + phrase.length);
  blockquotei[i] = document.createElement("blockquote");
  blockquotei[i].appendChild(text);
  body.appendChild(blockquotei[i]);
  total = total + phrase.length;
}


var totalElement = document.createElement("p");
totalElement.appendChild(document.createTextNode(total));
body.appendChild(totalElement);

var nbvirgules = 0;
var splitted;

for (var i = 0; i < phrases.length; i++) {
  splitted = phrases[i].split(',');
  console.log(splitted);
  nbvirgules += splitted.length - 1;
}
alert(nbvirgules);
