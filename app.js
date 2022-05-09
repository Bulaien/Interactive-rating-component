let firstCard = document.getElementById('con1');
let secondCard = document.getElementById('con2');
let ratingGiven = document.getElementById('rating-given').value

function changeState() {
document.getElementById('con1').style.display='none';
document.getElementById('con2').style.display='flex';


}

function calcRating() {

}

function rateGiven(stars){
    document.getElementById('rating-given').innerHTML=`You selected ${stars} out of 5 stars`
}

console.log(rateGiven)