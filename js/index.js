// Iteration 1: Names and Input

const hacker1 = "Clement";
const hacker2 = "Dummy";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

// Iteration 2: Conditionals

if (hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
} else if (hacker1Length < hacker2Length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
} else {console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);}

// Iteration 3: Loops

// 3.1

let hacker1Space = "";

for (let i=0; i<hacker1Length; i++){
  hacker1Space += " " + hacker1[i].toUpperCase(); 
}
console.log(hacker1Space)

// 3.2 

let hacker1Reverse =""; 
for (let i=hacker1Length-1; i>=0; i--){
  hacker1Reverse += hacker1[i]; 
}
console.log(hacker1Reverse)

// 3.3 

if (hacker1 < hacker2){
    console.log("The driver's name goes first.")
} 
else if (hacker1 > hacker2){
  "Yo, the navigator goes first definitely.";
} else {
  console.log("What?! You both have the same name?");
}


// BONUS

var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula urna lorem, vitae hendrerit risus lacinia in. Vivamus sodales lobortis nulla, vitae faucibus massa vulputate sed. Donec eleifend lorem at felis tincidunt, non lacinia ex ornare. Duis facilisis porta varius. Phasellus lobortis arcu ac lacus interdum, eu varius purus molestie. Aenean id mi a mauris maximus elementum. Duis eget pellentesque magna, et vehicula ipsum. Cras volutpat finibus leo blandit feugiat. Quisque sit amet congue lectus, nec malesuada tellus. Etiam interdum nulla eget nisl viverra, quis auctor felis sodales. Ut massa lorem, varius in leo et, lacinia rutrum neque. Nullam rhoncus mattis ante, non tempus quam lobortis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Vivamus egestas dolor lacinia urna elementum lacinia. Morbi non vestibulum metus, eu laoreet orci. Proin in metus vestibulum, viverra erat ut, mattis enim. Duis tempus euismod sapien, vel congue ipsum semper a. Praesent fermentum viverra elit non lobortis. Sed venenatis dolor posuere lacus faucibus facilisis. Nunc iaculis facilisis enim, vel rutrum tellus porta sed. Sed scelerisque purus vel sagittis porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vel lacinia sem. In non libero quis magna commodo vestibulum at a erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas tellus lorem. In interdum, ex non tincidunt accumsan, lacus quam ornare dolor, et tincidunt massa nisl sit amet elit. Pellentesque malesuada vel dui vitae lobortis.

Fusce molestie ipsum vel aliquam lacinia. Nulla posuere non turpis in fermentum. Cras iaculis, nulla vitae tincidunt convallis, arcu magna facilisis nisi, ut tempus erat nulla sit amet augue. Aliquam cursus, augue vel lobortis mattis, ligula lacus lacinia ipsum, nec sodales est neque id est. Morbi nibh leo, porttitor sed dictum non, fringilla non odio. Aenean leo ligula, molestie eu leo ac, tempus viverra felis. Maecenas ex mauris, imperdiet vitae tempus a, tincidunt sed augue. Nullam malesuada ullamcorper nisi ornare sagittis. Nullam justo ipsum, vehicula at dapibus consequat, commodo sed felis. Curabitur et finibus neque, vitae vulputate nunc. Donec facilisis commodo justo vel hendrerit. In hac habitasse platea dictumst.`;

var words=0; 

for (i=0; i<lorem.length; i++){
  if (lorem[i] === " "){
    words += 1; 
  } 
}
console.log(`There are ${words} words in these 3 paragraphs`);

// Counting occurences of ET; 

var etCount=0; 

for (i=0; i<lorem.length; i++){
  if ((lorem[i] === "e") && (lorem[i+1] ==="t")){
    etCount += 1; 
  } 
}
console.log(`There are ${etCount} 'et' in these 3 paragraphs`);

// BONUS 2 - PALINDROME 

var phraseToCheck = "mooom"
var length = phraseToCheck.length
var palindrome = true; 

for (i=0; i<(length/2); i++){
   if (phraseToCheck[i] === phraseToCheck.charAt(length-i-1)) {
   continue;
   } else (palindrome = false);
 }

if (palindrome === true){
  console.log("it's a palindrome, lol")
} else { console.log("it's not a palindrome!")}