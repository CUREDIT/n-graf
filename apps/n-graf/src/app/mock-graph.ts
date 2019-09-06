import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export class MockGraph {

  static links: Edge[] = [
    {
      id: 'a',
      source: 'first',
      target: 'second',
      label: 'is parent of'
    },
    {
      id: 'b',
      source: 'first',
      target: 'third',
      label: 'custom label'
    },
    {
      id: 'z',
      source: 'last',
      target: 'second',
      label: 'last label'
    },
    {
      id: 'c',
      source: 'last',
      target: 'third',
      label: 'custom label'
    },
    {
      id: 'orab',
      source: 'orphan-a',
      target: 'orphan-b',
      label: 'orphan-a-b'
    },
    {
      id: 'orac',
      source: 'orphan-a',
      target: 'orphan-c',
      label: 'orphan-a-c'
    },
    {
      id: 'orbc',
      source: 'orphan-b',
      target: 'orphan-c',
      label: 'orphan-b-c'
    },
    {
      id: 'orcd',
      source: 'orc',
      target: 'ord',
      label: 'orcd'
    },
    {
      id: 'orde',
      source: 'ord',
      target: 'ore',
      label: 'orde'
    },
    {
      id: 'oref',
      source: 'ore',
      target: 'orf',
      label: 'oref'
    }

  ];

  static nodes: Node[] = [
    {
      id: 'first',
      label: 'Alpha'
    },
    {
      id: 'second',
      label: 'Beta'
    },
    {
      id: 'third',
      label: 'Chi'
    },
    {
      id: 'last',
      label: 'Zeta'
    },
    {
      id: 'orphan-a',
      label: 'ora'
    },
    {
      id: 'orphan-b',
      label: 'orb'
    },
    {
      id: 'orphan-c',
      label: 'orc'
    },
    {
      id: 'orc',
      label: 'orc 1'
    },
    {
      id: 'ord',
      label: 'ord'
    },
    {
      id: 'ore',
      label: 'ore'
    },
    {
      id: 'orf',
      label: 'orf'
    }
  ];

  static clusters: ClusterNode[] = [
    {
      id: 'cluster0',
      label: 'clusterNode',
      childNodeIds: ['orphan-a', 'orphan-b', 'last', 'ord', 'ore']
    },
    {
      id: 'cluster1',
      label: 'clusterNode1',
      childNodeIds: ['orphan-c', 'first', 'ord', 'ore']
    }
  ];

}
