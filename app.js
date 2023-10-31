document.addEventListener("DOMContentLoaded", () => {
    const storesAll = document.querySelectorAll(".store-girbaud-one");
    const imagenSede = document.querySelector(".imagen-sedes");
    const filter = document.querySelector("#filtro");

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


    /*****filtro */
    filter.addEventListener("change", () => {
        const citySelect = filter.value;
        let cityLength = 0;
        let fisrtStore = null;
        

        storesAll.forEach(store => {
            
            if(citySelect === "todos") {
                store.style.display = "block"
                cityLength ++;
                if(cityLength === 1) {
                    fisrtStore = store
                }
            }else {
                const storeCity = store.getAttribute("data-city");
                
                if(citySelect === storeCity) {
                    store.style.display = "block";
                    cityLength++
                    if(!fisrtStore) {
                        fisrtStore = store;
                        store.classList.add("active");


                        const storesGirbaudImg = document.querySelector(".stores-girbaud-img img");
                        if(store.id == 1) {
                            storesGirbaudImg .src = "./assets/oviedo.webp"
                        }else if(store.id == 2) {
                            storesGirbaudImg .src = "./assets/multiplaza.webp"
                        }
                        else if(store.id == 3) {
                            storesGirbaudImg .src = "./assets/MFG-Fabricato.webp"
                        }
                        else if(store.id == 4) {
                            storesGirbaudImg .src = "./assets/bucaramanga.webp"
                        }
                    }
                }else {
                    store.style.display = "none";
                    store.classList.remove("active");
                }
                
            }
        })
        
    })
});

