import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    methods = [
        {
            name: "Método Simplex",
            img: "../assets/imgs/simplex.jpg"
        },
        {
            name: "Método Hungaro",
            img: "../assets/imgs/hungaro.jpg"
        },
        {
            name: "Esquina Noroeste",
            img: "../assets/imgs/esquina_noroeste.png"
        },
        {
            name: "Ruta más corta",
            img: "../assets/imgs/ruta_corta.jpg"
        },
        {
            name: "Árbol de Expansión Mínima",
            img: "../assets/imgs/aem.jpg"
        },
        {
            name: "Ruta Crítica",
            img: "../assets/imgs/ruta_critica.jpg"
        }
    ];

    openMethod(method) {
        console.log(method);
    }

}
