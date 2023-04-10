const button = document.querySelector('#btn');
const input = document.querySelector('#guess');
const answer = Math.floor(Math.random() * 20) + 1;

button.addEventListener('click', play);
input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13)
    play();
})


function play(){
    const userNumber = document.querySelector('#guess').value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Enter a number from 1 to 20!',
        })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Enter a number!',
        })
    }

    else {
        if (userNumber < answer) {
            Swal.fire('Try a bigger number!')
        }
        else if (userNumber > answer) {
            Swal.fire('Try a smaller number!')
        }
        else {
            Swal.fire({
                title: 'Victory!',
                imageUrl: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmV0dGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Custom image',
            })
        }
    }
    input.value = '';
}