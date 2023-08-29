/* //printing the word
console.log("I like pizza and ayam!");
console.log("saya suka makan");

window.alert("PERINGATAN WEB ANDA DIBLOKIR PEMERINTAH") */

/*
    bisa tidak ya saya istiqomah huhuhu. apakah belajar coding dan jadi web programmer adalah jalan yang tepat untukku? :"""??"
*/

/*let firstName = "Bintang" //strings
let age = 22; //numbers
let student = false; //booleans

age = age + 1

console. log ("Hello", firstName);
console.log("you are", age, "right?"); 
console.log ("are you a student of Mulawarman University?:", student);

document.getElementById("tes1").innerHTML = "Hello " + firstName;
document.getElementById("tes2").innerHTML = "you are " + age + " years old right?";
document.getElementById("tes3").innerHTML = "are you a student of Mulawarman University? : " + student

/* let firstusername = window.prompt("Isi nama data diri kamu di sini");
console.log(firstusername); */

letlet age = window.prompt("Berapa umur kamu?")

console.log(typeof age)
ageage = Number(aletalet
//age += 1

console.log("Wah kamu sekarang sudah", age, "tahun")
aletale
/* et username;

document.getElementById("tombolsubmit").oneclick = function(){

    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("namapanggilan").innerHTML = "hello" + username;
} */


// Type conversion = change the datatype of a value to another (strings, number, booleans)
/*
let x;
let y;
let z;

x = Number ("3.14")
y = Boolean (3.14)
z = String (3.14)

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)
*/

let a
let b
let c

document.getElementById("CalculateButton").oneclick = function(){

    a = document.getElementById("textA").value
    a = Number(a);

    b = document.getElementById("textB").value
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b, 2))

    document.getElementById("sideC").innerHTML = "side C:" + c

}

let playGame = confirm("Let's play gunting, batu, dan kertas with me!");
if (playGame) {
    let playerChoice = prompt("Pilih gunting, batu, atau kertas?");
    if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
        playerOne === "gunting" ||
        playerOne === "batu" ||
        playerOne === "kertas"
    ) {
    let computerChoice = (Math.floor(Math.random()) * 3 + 1);
    let computer = 
        computerChoice === 1
        ? "gunting"
        : computerChoice === 2
        ? "batu"
        : "kertas";

    let result =
        playerOne === computer
        ? "Seri!"
        : playerOne === "batu" && computer === "kertas"
        ? `kamu: ${playerOne}\ncomputer: ${computer}\nComputer menang!`
        : playerOne === "kertas" && computer === "gunting"
        ? `kamu: ${playerOne}\ncomputer: ${computer}\nComputer menang!`
        : `kamu: ${playerOne}\ncomputer: ${computer}\nkamu menang!`;
    
        alert(result);
        let playAgain = confirm("Ingin bermain lagi?");
        playAgain ? location.reload() : alert("Oke, terima kasih sudah bermain ya!");
    }
} else {
confirm("Okedeh, dadah");
}}