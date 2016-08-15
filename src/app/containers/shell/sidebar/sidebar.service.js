class Node {
  constructor({
    displayName,
    children=[],
    link='#',
  }) {
    this.displayName = displayName
    this.children = [].concat(children)
    this.link = link
  }
}

export function getSidebarNodes() {
  const nodes = [
    new Node({
      displayName: 'Data Structures',
      link: 'data_structures',
      children: [
        new Node({
          displayName: 'Stack',
          link: 'stack',
        }),
        new Node({
          displayName: 'Queue',
          link: 'queue',
        }),
      ],
    }),
    new Node({
      displayName: 'Algorithms',
      children: [
        new Node({
          displayName: 'Sorting',
          children: [
            new Node({
              displayName: 'Insertion',
            }),
            new Node({
              displayName: 'Selection',
            }),
          ],
        }),
      ],
    }),
  ]

  return nodes
}
