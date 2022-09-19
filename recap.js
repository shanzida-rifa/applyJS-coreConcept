//1.variable
var myName = 'Khan';

// math operation:+,-,/,*;
// shorthand : ++,--,*=,/=

//2.Array
var friends = ['Abul', 'babul', 'dabul'];
var mythirdfriend = friends[2];
console.log(mythirdfriend);
friends[3] = 'dambool';
console.log(friends);

//3. conditionals
//>,<,>=,<=,==,===,!=,!==
if (friends.length < 2) {
    console.log('gorib!');
}

// 4.loop
var number = 0;
while (number <= 6) {
    console.log(number);
    number++;
}
for (var i = 0; i < 10; i++) {

}
// 5.function
function isMoonUp(time) {
    if (time > 7) {
        return true;
    }
}
isMoonUp();

// 6. object
var jantus = {
    height: 60,
    romanticism: 'heavy',
    bapr_taka: 'borolox'
}
