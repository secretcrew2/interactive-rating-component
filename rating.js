function thankYou(num = 0){
    const toggleState1 = document.getElementById('page1');
    const toggleState2 = document.getElementById('page2');
    if (num > 0){
        toggleState1.setAttribute('style', 'display: none !important');
        toggleState2.setAttribute('style', '');
        const rateScore = document.getElementById('rate-score');
        rateScore.innerHTML= num;
        console.log(num);
    } else {
        toggleState3 = document.getElementById('alert-mode');
        toggleState3.setAttribute('style', '');
    }
    
}
function rateAgain(){
    num = 0;
    const toggleState1 = document.getElementById('page1');
    const toggleState2 = document.getElementById('page2');
    toggleState1.setAttribute('style', '');
    toggleState2.setAttribute('style', 'display: none !important');
    toggleState3 = document.getElementById('alert-mode');
    toggleState3.setAttribute('style', 'display: none !important');
}