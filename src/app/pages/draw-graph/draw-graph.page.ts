import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-draw-graph',
  templateUrl: './draw-graph.page.html',
  styleUrls: ['./draw-graph.page.scss'],
})
export class DrawGraphPage implements OnInit {

  constructor(private modalController: ModalController) { }

  goHome() {
      this.modalController.dismiss();
  }

  ngOnInit() {
  }

  addNode() {
  }

  deleteNode() {
  }

}
