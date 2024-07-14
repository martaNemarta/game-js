const button = document.querySelector("#btn");
const input = document.querySelector("#guess");
const answer = Math.floor(Math.random() * 56 + 8);

input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        play();
    }
})
button.addEventListener("click", play);
function play() {
    const userN = document.querySelector("#guess").value;
    if (userN < 7 || userN > 56) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Type a number from 7 to 56!'
        })
    }
    else if (isNaN(userN)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Type a number!'
        })
    }
    else if(userN > answer) {
        Swal.fire(' type smaller number', 
        "the PC is winning rn");
    }
    else if(userN < answer) {
        Swal.fire(' type bigger number', 
        "the PC is winning rn");
    }
    else {
        Swal.fire({
            title: `Congrats you've won!!`,
            imageUrl: 'https://images.unsplash.com/photo-1594066521341-330a79387ec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'wictory',
        })
    }
}
