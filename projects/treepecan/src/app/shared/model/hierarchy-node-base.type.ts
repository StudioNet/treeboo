export interface IHierarchyNodeBase {
  id: number;
  title: string;
  next?: HierarchyNode<IHierarchyNodeBase>; // TODO: Should be promise | observable in order to support lazy loading.
}

export type HierarchyNode<T extends IHierarchyNodeBase> = {
  nodes: ReadonlyArray<T>,
  group?: string
};

// const arr: HierarchyNode<IHierarchyNodeBase> = {
//   nodes: [],
//   group: 'level 0'
// };
// arr.nodes[0].id;
