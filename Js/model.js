// XỬ LÝ MENU RESPONSIVE
function showMenu(){
    ELEMENT_OVERLAY.classList.toggle("active")
    ELEMENT_MODAL_MENU.classList.add("active")
}
function hideOverlay(){
    ELEMENT_OVERLAY.classList.remove("active")
    ELEMENT_MODAL_MENU.classList.remove("active")
    ELEMENT_MENU_SETTINGS.classList.remove("active");
    ELEMENT_SETTINGS_BTN_RED.classList.remove("active");
}
function closeMenu(){
    ELEMENT_MODAL_MENU.classList.remove("active")
    ELEMENT_OVERLAY.classList.remove("active")
}
// XỬ LÝ TAB PRODUCT
ELEMENT_BTN_TAB.forEach((tab, index) => {

    tab.onclick = function (e) {
        const product=ELEMENT_PRODUCT_TABS[index]
        document.querySelector('.btn-tab.active').classList.remove('active');
        document.querySelector('.product-tab.active').classList.remove('active');
        product.classList.add('active');
        console.log(product);
        
        this.classList.add('active');
        e.preventDefault();
    };
  });

//   XỬ LÝ MODAL SETTINGS

function showSettings() {
    ELEMENT_MENU_SETTINGS.classList.add("active");
    ELEMENT_OVERLAY.classList.toggle("active")
    ELEMENT_SETTINGS_BTN_RED.classList.add("active");
}

