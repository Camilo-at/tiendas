document.addEventListener("DOMContentLoaded", () => {
    const storesAll = document.querySelectorAll(".store-girbaud-one");
    const imagenSede = document.querySelector(".imagen-sedes");

    storesAll.forEach(store => {
        store.addEventListener("click", () => {
            storesAll.forEach(storeOne => {
                storeOne.classList.remove("active");
            });
            
            store.classList.add("active");
            if(store.id == 1) {
                imagenSede.src = "./assets/oviedo.webp"
            }else if(store.id == 2) {
                imagenSede.src = "./assets/multiplaza.webp"
            }
            else if(store.id == 3) {
                imagenSede.src = "./assets/MFG-Fabricato.webp"
            }
            else if(store.id == 4) {
                imagenSede.src = "./assets/bucaramanga.webp"
            }
        });
    });
});



