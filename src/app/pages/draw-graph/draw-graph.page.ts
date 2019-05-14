import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

    constructor(private modalController: ModalController) { }

    goHome() {
        this.modalController.dismiss();
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.setupGraph();
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
                    { data: { source: 'j', target: 'e' } },
                    { data: { source: 'j', target: 'k' } },
                    { data: { source: 'j', target: 'g' } },
                    { data: { source: 'e', target: 'j' } },
                    { data: { source: 'e', target: 'k' } },
                    { data: { source: 'k', target: 'j' } },
                    { data: { source: 'k', target: 'e' } },
                    { data: { source: 'k', target: 'g' } },
                    { data: { source: 'g', target: 'j' } }
                ]
            }
        });
        var eh = this.cy.edgehandles();
    }

    addNode() {
        console.log(this.cy);
    }

    removeNode() {
    }

}
