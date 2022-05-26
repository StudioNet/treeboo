export interface IHierarchyNodeBase {
  id: number;
  title: string;
  children: IHierarchyNodeBase[];
}

export type HierarchyNodeArray<T extends IHierarchyNodeBase> = ReadonlyArray<T>;

// const arr: HierarchyNodeArray<IHierarchyNodeBase> = [];
// arr[0].id;
