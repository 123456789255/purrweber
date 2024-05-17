const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const header = document.querySelector('#header');
const link = document.querySelector('#link');
const links = document.querySelectorAll('.link');
const body = document.body;
const modal = document.querySelector("#cookieModal");
const acceptButton = document.querySelector("#acceptCookies");
const declineButton = document.querySelector("#declineCookies");
const closeModalButton = document.querySelector("#close_modal");
var phoneInput = document.getElementById('phone');

hamb.addEventListener("click", function(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    header.classList.toggle("popup_open");
});

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        popup.classList.remove("open");
        hamb.classList.remove("active");
        body.classList.remove("noscroll");
        header.classList.remove("popup_open");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    modal.style.display = "block";
    acceptButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
    declineButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
});

var openModalLinks = document.getElementsByClassName("openModal");
for (var i = 0; i < openModalLinks.length; i++) {
    openModalLinks[i].onclick = function() {
        var modalId = this.getAttribute("data-modal-id");
        document.getElementById(modalId).style.display = "block";
        disableBodyScroll();
    }
}

var closeModalSpans = document.querySelectorAll('.close_modal');
for (var i = 0; i < closeModalSpans.length; i++) {
    closeModalSpans[i].onclick = function() {
        var modalId = this.getAttribute("data-modal-id");
        document.getElementById(modalId).style.display = "none";
        enableBodyScroll();
    }
}

var closeModalSpans = document.querySelectorAll('.closeModal');
for (var i = 0; i < closeModalSpans.length; i++) {
    closeModalSpans[i].onclick = function() {
        var modalId = this.getAttribute("data-modal-id");
        document.getElementById(modalId).style.display = "none";
        enableBodyScroll();
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        enableBodyScroll();
    }
}

phoneInput.addEventListener('input', function(event) {
    var formattedNumber = event.target.value.replace(/\D/g, '');
    var x = formattedNumber.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    event.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '');
});

function submitForm() {
    document.getElementById('success-message').style.display = 'flex';
    document.querySelector('.modal-body form').style.display = 'none';
    return false;
}

document.getElementById('close-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('myModal1').style.display = 'none';
});