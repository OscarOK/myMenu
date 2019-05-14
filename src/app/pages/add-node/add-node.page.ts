import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-add-node',
    templateUrl: './add-node.page.html',
    styleUrls: ['./add-node.page.scss'],
})
export class AddNodePage implements OnInit {

    nodeName: string;
    nodeWeight: string;

    constructor(private modalController: ModalController, private toastController: ToastController) { }

    ngOnInit() {
    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 1000
        });
        toast.present();
    }

    close() {
        this.modalController.dismiss(null, undefined);
    }

    sendNodeInfo() {
        let addNodeNameMsg = "Please add the name of the node";
        let addNodeWeight = "Please add the weight of the node";

        if (this.nodeName == undefined || this.nodeName.trimLeft().trimRight() == "") {
            this.presentToast(addNodeNameMsg);
        } else if (this.nodeWeight == undefined) {
            this.presentToast(addNodeWeight);
        } else {
            const data = {
                id: this.nodeName.trimLeft().trimRight(),
                name: this.nodeName,
                data: { weight: +this.nodeWeight },
                position: { x: 0, y: 0 }
            };

            this.modalController.dismiss(data);
        }

    }

}
