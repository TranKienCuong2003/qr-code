const qrText=document.getElementById('qr_text');
const sizes=document.getElementById('sizes');
const generate=document.getElementById('generate');
const download=document.getElementById('download');
const qrcodebox=document.querySelector('.body-qr');

let size = sizes.value;
generate.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});
sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
});

download.addEventListener('click',()=>{
    let img=document.querySelector('.body-qr img');
    if(img !== null){
        let imgAtrr=img.getAttribute('src');
        download.setAttribute("href",imgAtrr);
    }
});

function isEmptyInput(){
    qrText.value.length>0?generateQRCode():alert('Vui lòng nhập văn bản hoặc URL để tạo QR Code');
}

function generateQRCode(){
    qrcodebox.innerHTML = "";
    new QRCode(qrcodebox, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}