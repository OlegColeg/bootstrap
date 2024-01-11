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
        document.getElementById('containerCarusel').innerHTML = "";
    document.getElementById('containerCarusel').insertAdjacentHTML('beforeend','<div id="demo" class="carousel slide" data-bs-ride="carousel">' +
      '<!-- Indicators/dots -->' +
      '<div class="carousel-indicators">' +
        '<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>' +
        '<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>' +
        '<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>' +
        '<button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>' +
        '<button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>' +
        '<button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>' +
      '</div>' +
      '<!-- The slideshow/carousel -->' +
      '<div class="carousel-inner bg-dark" style=" max-height: 500px;">' +
        '<div class="carousel-item active">' +
          '<img src="image/Accesorii (3).jpg" alt="Accesorii" class="d-block mx-auto" style="height: 500px;">' +
          '<div class="carousel-caption">' +
            '<button type="button" id="galeria" class="btn btn-dark border border-light">GALERIA</button>' +
          '</div>' +
        '</div>' +
        '<div class="carousel-item">' +
          '<img src="image/anturaj (1).jpg" alt="" class="d-block mx-auto" style="height: 500px;">' +
          '<div class="carousel-caption">' +
          '<button type="button" id="galeria" class="btn btn-dark border border-light">GALERIA</button>' +
        '</div>' +
        '</div>' +
        '<div class="carousel-item">' +
          '<img src="image/ice (1).jpg" alt="" class="d-block mx-auto" style="height: 500px;">' +
          '<div class="carousel-caption">' +
          '<button type="button" id="galeria" class="btn btn-dark border border-light">GALERIA</button>' +
        '</div>' +
        '</div>' +
        '<div class="carousel-item">' +
          '<img src="image/baristaaa (3).jpg" alt="" class="d-block mx-auto" style="height: 500px;">' +
          '<div class="carousel-caption">' +
          '<button type="button" id="galeria" class="btn btn-dark border border-light">GALERIA</button>' +
        '</div>' +
        '</div>' +
        '<div class="carousel-item">' +
          '<img src="image/clienti (2).jpg" alt="" class="d-block mx-auto" style="height: 500px;">' +
          '<div class="carousel-caption">' +
          '<button type="button" id="galeria" class="btn btn-dark border border-light">GALERIA</button>' +
        '</div>' +
        '</div>' +
        '<div class="carousel-item">' +
          '<img src="image/hot (3).jpg" alt="" class="d-block mx-auto" style="height: 500px;">' +
          '<div class="carousel-caption">' +
          '<button type="button" id="galeria" class="btn btn-dark border border-light">GALERIA</button>' +
        '</div>' +
        '</div>' +
      '</div>' +
      '<!-- Left and right controls/icons -->' +
      '<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">' +
        '<span class="carousel-control-prev-icon"></span>' +
      '</button>' +
      '<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">' +
        '<span class="carousel-control-next-icon"></span>' +
      '</button>' +
    '</div>' );
console.log('Accesorii');
document.getElementById('galeria').addEventListener('click', function () {
document.getElementById('containerCarusel').innerHTML = "";
document.getElementById('containerCarusel').insertAdjacentHTML('beforeend','<div id="demo" class="carousel slide" data-bs-ride="carousel">' +
  '<!-- Indicators/dots -->' +
  '<div class="carousel-indicators">' +
    '<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>' +
    '<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>' +
    '<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>' +
    '<button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>' +
    '<button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>' +
    '<button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>' +
  '</div>' +
  '<!-- The slideshow/carousel -->' +
  '<div class="carousel-inner bg-dark" style=" max-height: 500px;">' +
    '<div class="carousel-item active">' +
      '<img src="image/Accesorii (3).jpg" alt="Accesorii" class="d-block mx-auto" style="height: 500px;">' +
      '<div class="carousel-caption">' +
        '<button type="button" id="Accesorii" class="btn btn-dark border border-light">ACCESORII</button>' +
        '<p class="fs-5 fw-bold" style="-webkit-text-stroke: 1px black;">Stil și funcționalitate în experiența cafelei.</p>' +
      '</div>' +
    '</div>' +
    '<div class="carousel-item">' +
      '<img src="image/anturaj (1).jpg" alt="" class="d-block mx-auto" style="height: 500px;">' +
      '<div class="carousel-caption">' +
        '<button type="button" id="anturaj" class="btn btn-dark border border-light">ANTURJ</button>' +
        '<p class="fs-5 fw-bold" style="-webkit-text-stroke: 1px black;">O călătorie senzorială în lumea cafelei.</p>' +
      '</div>' +
    '</div>' +
    '<div class="carousel-item">' +
      '<img src="image/ice (1).jpg" alt="" class="d-block mx-auto" style="height: 500px;">' +
      '<div class="carousel-caption">' +
        '<button type="button" class="btn btn-dark border border-light">BĂUTURI RĂCORITOARE</button>' +
        '<p class="fs-5 fw-bold" style="-webkit-text-stroke: 1px black;">Răcorire și relaxare într-un pahar.</p>' +
      '</div>' +
    '</div>' +
    '<div class="carousel-item">' +
      '<img src="image/baristaaa (3).jpg" alt="" class="d-block mx-auto" style="height: 500px;">' +
      '<div class="carousel-caption">' +
        '<button type="button" class="btn btn-dark border border-light">ECHIPA DE BARISTA</button>' +
        '<p class="fs-5 fw-bold" style="-webkit-text-stroke: 1px black;">Artiștii care transformă cafeaua în magie. </p>' +
      '</div>' +
    '</div>' +
    '<div class="carousel-item">' +
      '<img src="image/clienti (2).jpg" alt="" class="d-block mx-auto" style="height: 500px;">' +
      '<div class="carousel-caption">' +
        '<button type="button" class="btn btn-dark border border-light">RELAȚII CLIENȚI</button>' +
        '<p class="fs-5 fw-bold" style="-webkit-text-stroke: 1px black;">Puntea de încredere între noi și clienți.</p>' +
      '</div>' +
    '</div>' +
    '<div class="carousel-item">' +
      '<img src="image/hot (3).jpg" alt="" class="d-block mx-auto" style="height: 500px;">' +
      '<div class="carousel-caption">' +
        '<button type="button" class="btn btn-dark border border-light">BĂUTURI CALDE</button>' +
        '<p class="fs-5 fw-bold" style="-webkit-text-stroke: 1px black;">Confort și liniște într-o ceașcă.</p>' +
      '</div>' +
    '</div>' +
  '</div>' +
  '<!-- Left and right controls/icons -->' +
  '<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">' +
    '<span class="carousel-control-prev-icon"></span>' +
  '</button>' +
  '<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">' +
    '<span class="carousel-control-next-icon"></span>' +
  '</button>' +
'</div>' +
'<div id="containerElement"></div>' +
'</div>' +
'<section id="coffee_page">' +
  '<div class="container');   
})
});
