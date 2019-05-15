import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DrawGraphPage } from "../pages/draw-graph/draw-graph.page"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public modalController: ModalController) {}

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
            img: "../assets/imgs/aem.jpg",
            page: DrawGraphPage
        },
        {
            name: "Ruta Crítica",
            img: "../assets/imgs/ruta_critica.jpg",
            page: DrawGraphPage
        }
    ];

    openMethod(method) {
        console.log(method);
        this.presentModal(method.page);
    }

    async presentModal(page) {
        const modal = await this.modalController.create({
            component: page
        });

        await modal.present();
    }
}
