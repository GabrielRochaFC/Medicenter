function mudaEstadoMenu() {
    let nav = document.getElementsByClassName('header__nav');
    console.log(nav[0])

    nav[0].classList.toggle("header__nav--desativado");
}