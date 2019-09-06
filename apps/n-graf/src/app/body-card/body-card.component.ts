import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';
import { MockGraph } from '../mock-graph';

@Component({
  selector: 'n-graf-body-card',
  templateUrl: './body-card.component.html',
  styleUrls: ['./body-card.component.scss']
})
export class BodyCardComponent implements OnInit, AfterViewInit, OnDestroy {

  links: Edge[];
  nodes: Node[];
  clusters: ClusterNode[];

  center$: Subject<boolean> = new Subject<boolean>();
  zoomToFit$: Subject<boolean> = new Subject<boolean>();

  clearZoomTimeout: number;

  constructor() { }

  ngOnInit() {
    this.links = MockGraph.links;
    this.clusters = MockGraph.clusters;
    this.nodes = MockGraph.nodes;
  }

  ngAfterViewInit(): void {
    this.centerZoom();
    this.clearZoomTimeout = window.setTimeout( () => this.centerZoom(), 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.clearZoomTimeout);
  }

  centerZoom() {
    this.centerGraph();
    this.zoomToFit();
  }

  nodeClicked(node: Node) {
    console.log(`${node.id} was clicked`, node);
  }

  centerGraph() {
    this.center$.next(true);
  }

  zoomToFit() {
    this.zoomToFit$.next(true);
  }


}
