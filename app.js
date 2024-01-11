let i = 0;

document.getElementById('btn_tea').addEventListener('click', function () {

    if (i == 0) {
        document.getElementById('tea_list').style.display = '';
        i = 1;
    }
    else {
        document.getElementById('tea_list').style.display = 'none';
        i = 0;
    }
})
document.getElementById('btn_tea').addEventListener('click', function () {
    document.getElementById('tea_list').scrollIntoView();
})
document.getElementById('Accesorii').addEventListener('click', function () {
    document.getElementById('containerElement').insertAdjacentHTML('beforeend', '<section id="coffee_page">' +
        '<div class="container">' +
        '<div class="coffee_row row pt-5">' +
        '<div class="col-sm d-flex flex-column align-items-center">' +
        '<img class="rounded-5" src="image/espresso.jpg" alt="Espresso" width="200px" height="200px">' +
        '<h5 class="coffee_name mt-3">ESPRESSO</h5>' +
        '<p>O explozie de pură energie într-o ceașcă mică. Gustul intens și aroma bogată te trezesc și te pregătesc pentru ziua care urmează.</p>' +
        '<p style="font-family: \'Iceland\';">ml30 - 20Lei</p>' +
        '</div>' +
        '<div class="col-sm d-flex flex-column align-items-center">' +
        '<img class="rounded-5" src="image/cappuccino.jpg" alt="Cappuccino" width="200px" height="200px">' +
        '<h5 class="coffee_name mt-3">CAPPUCCINO</h5>' +
        '<p>Un dans armonios între espresso, lapte cald și spumă de lapte, încoronat cu un vârf de cacao. Este ca o îmbrățișare caldă în zilele reci de iarnă.</p>' +
        '<p style="font-family: \'Iceland\';">ml200 - 25Lei</p>' +
        '</div>' +
        '<div class="col-sm d-flex flex-column align-items-center">' +
        '<img class="rounded-5" src="image/lattecub.jpg" alt="Latte" width="200px" height="200px">' +
        '<h5 class="coffee_name mt-3">LATTE</h5>' +
        '<p>Un val de cafea delicată care se întâlnește cu laptele cald pentru un parfum rafinat, creând o băutură cremoasă și reconfortantă.</p>' +
        '<p style="font-family: \'Iceland\';">ml300 - 30Lei</p>' +
        '</div>' +
        '<div class="col-sm d-flex flex-column align-items-center">' +
        '<img class="rounded-5" src="image/americanocub.jpg" alt="Americano" width="200px" height="200px">' +
        '<h5 class="coffee_name mt-3">AMERICANO</h5>' +
        '<p>Un fluviu liniștit de apă fierbinte care se varsă peste espresso, diluându-l intensitatea și lăsând în urmă un gust curat și revigorant.</p>' +
        '<p style="font-family: \'Iceland\';">ml120 - 20Lei</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</section>');
});
document.getElementById('anturaj').addEventListener('click', function () {
    document.getElementById('containerElement').innerHTML = "";
    
})