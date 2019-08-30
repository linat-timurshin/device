let device = navigator.userAgent;
document.querySelector('#out').innerHTML = device;
console.log(device);

if(device.match('iPhone') || device.match('Android') || device.match('iPad')) {
    alert ('mobile');
}

else {
    alert('Desktop');
};