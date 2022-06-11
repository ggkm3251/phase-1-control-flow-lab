function scuberGreetingForFeet(distance){
  // Write your code here!
  let client;
  if (distance <= 400) {
    return 'This one is on me!';
  }else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.';
  }else {
    return 'No can do.';
  }
}
let client1 = 199;
let client2 = 2001;
let client3 = 2501;

function ternaryCheckCity(city){
  // Write your code here!
  return ((city==='NYC') ? 'Ok, sounds good.' : 'No go.');
}
let message1 = 'Ok, sounds good.'
let message2 = 'No go.'


function switchOnCharmFromTip(gift){
  // Write your code here!
  switch (gift) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
}
}