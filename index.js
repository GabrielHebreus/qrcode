const container =document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
genereteBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

genereteBtn.addEventListener('click', () => {
    let qrvalue = qrInput.value;
    if (!qrvalue){
        alert('Insira uma url ou texto para gerar um Qr Code')
        return;
    }
    genereteBtn.innerText ="Gerando um Qr Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    qrImg.addEventListener('load', () => {
        genereteBtn.innerText ="Gerar Qr Code";
        container.classList.add('active');
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
    };
});




