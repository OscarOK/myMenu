import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import cytoscape from 'cytoscape';
import edgehandles from 'cytoscape-edgehandles';
cytoscape.use(edgehandles);

@Component({
    selector: 'app-draw-graph',
    templateUrl: './draw-graph.page.html',
    styleUrls: ['./draw-graph.page.scss'],
})
export class DrawGraphPage implements OnInit {
    cy;

    constructor(private modalController: ModalController, public toastController: ToastController) { }

    goHome() {
        this.modalController.dismiss();
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.setupGraph();
    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 1000
        });
        toast.present();
    }

    setupGraph() {
        this.cy = cytoscape({
            container: document.getElementById('cy'),

            layout: {
                name: 'grid',
                rows: 2,
                cols: 2
            },

            style: [
                {
                    selector: 'node[name]',
                    style: {
                        'content': 'data(name)'
                    }
                },

                {
                    selector: 'edge',
                    style: {
                        'label': 'data(label)',
                        'curve-style': 'bezier',
                        'target-arrow-shape': 'triangle'
                    }
                },

                // some style for the extension

                {
                    selector: '.eh-handle',
                    style: {
                        'background-color': 'red',
                        'width': 12,
                        'height': 12,
                        'shape': 'ellipse',
                        'overlay-opacity': 0,
                        'border-width': 12, // makes the handle easier to hit
                        'border-opacity': 0
                    }
                },

                {
                    selector: '.eh-hover',
                    style: {
                        'background-color': 'red'
                    }
                },

                {
                    selector: '.eh-source',
                    style: {
                        'border-width': 2,
                        'border-color': 'red'
                    }
                },

                {
                    selector: '.eh-target',
                    style: {
                        'border-width': 2,
                        'border-color': 'red'
                    }
                },

                {
                    selector: '.eh-preview, .eh-ghost-edge',
                    style: {
                        'background-color': 'red',
                        'line-color': 'red',
                        'target-arrow-color': 'red',
                        'source-arrow-color': 'red'
                    }
                },

                {
                    selector: '.eh-ghost-edge.eh-preview-active',
                    style: {
                        'opacity': 0
                    }
                }
            ],

            elements: {
                nodes: [
                    { data: { id: 'j', name: 'Jerry' } },
                    { data: { id: 'e', name: 'Elaine' } },
                    { data: { id: 'k', name: 'Kramer' } },
                    { data: { id: 'g', name: 'George' } }
                ],
                edges: [
                    { data: { source: 'j', target: 'e', label:15 } },
                    { data: { source: 'j', target: 'k', label: 'DEMO1' } },
                    { data: { source: 'j', target: 'g', label: 'DEMO2' } },
                    { data: { source: 'e', target: 'j', label: 'demo2' } }
                ]
            }
        });

        let trigger = {
            complete: function( sourceNode, targetNode, addedEles ){
                // TODO OPEN POPUP
            }
        };

        var eh = this.cy.edgehandles(trigger);
    }

    addNode() {
        // TODO OPEN MODAL
        console.log(this.cy);

    }

    removeNode() {
        let noneSelectedMsg = "Please select a node or edge.";
        let deletedMsg = "Element removed successfully.";
        let element = this.cy.$(':selected');

        if (element.length == 0) {
            this.presentToast(noneSelectedMsg);
        } else {
            element.remove();
            this.presentToast(deletedMsg);
        }
    }

}
