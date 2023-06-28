function myFunction() {
    let form = document.getElementById("myForm");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

let nameShow = document.getElementById('nama').innerHTML;
let roleShow = document.getElementById('role').innerHTML;
let availabilityShow = document.getElementById('availability').innerHTML;
let usiaShow = document.getElementById('usia').innerHTML;
let lokasiShow = document.getElementById('lokasi').innerHTML;
let pengalamanShow = document.getElementById('pengalaman').innerHTML;
let emailShow = document.getElementById('email').innerHTML;

let nameInput = document.getElementById('inputNama');
let roleInput = document.getElementById('inputRole');
let availabilityInput = document.getElementById('inputAvailability');
let usiaInput = document.getElementById('inputUsia');
let lokasiInput = document.getElementById('inputLokasi');
let pengalamanInput = document.getElementById('inputPengalaman');
let emailInput = document.getElementById('inputEmail');

nameInput.value = nameShow;
roleInput.value = roleShow;
availabilityInput.value = availabilityShow;
usiaInput.value = usiaShow;
lokasiInput.value = lokasiShow;
pengalamanInput.value = pengalamanShow;
emailInput.value = emailShow;

function saveForm() {
    let nama = document.getElementById("nama");
    let inputNama = document.getElementById("inputNama").value;
    
    let role = document.getElementById("role");
    let inputRole = document.getElementById("inputRole").value;

    let availability = document.getElementById("availability");
    let inputAvailability = document.getElementById("inputAvailability").value;

    let usia = document.getElementById("usia");
    let inputUsia = document.getElementById("inputUsia").value;

    let lokasi = document.getElementById("lokasi");
    let inputLokasi = document.getElementById("inputLokasi").value;

    let pengalaman = document.getElementById("pengalaman");
    let inputPengalaman = document.getElementById("inputPengalaman").value;

    let email = document.getElementById("email");
    let inputEmail = document.getElementById("inputEmail").value;

    nama.innerHTML = inputNama;
    role.innerHTML = inputRole;
    availability.innerHTML = inputAvailability;
    usia.innerHTML = inputUsia;
    lokasi.innerHTML = inputLokasi;
    pengalaman.innerHTML = inputPengalaman;
    email.innerHTML = inputEmail;
}
