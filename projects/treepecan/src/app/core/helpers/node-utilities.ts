import { HierarchyNode, IHierarchyNodeBase } from "../../shared/model/hierarchy-node-base.type";
import { faker } from '@faker-js/faker';

export type TitleGenerator = (name?: string) => string;
export type ChildrenGenerator = (size: number) => HierarchyNode<IHierarchyNodeBase>;

function wrapNode(id: number, title: string, children?: HierarchyNode<IHierarchyNodeBase>): IHierarchyNodeBase {
  return {
    id,
    title,
    next: children
  };
}

function generateId() {
  return faker.datatype.number({min: 1, max: 999999});
}

function generateConnectionName(dbName: string): string {
  return `${dbName} - ${faker.helpers.arrayElement(['test', 'dev', 'stage'])}`;
}

function generateDatabaseName(): string {
  return `${faker.word.noun(8)}_${faker.word.noun(6)}`;
}

function generateSchemaName(): string {
  return `shema_${faker.word.noun(5)}_${faker.word.noun(5)}`;
}

function generateTableName(): string {
  return `tbl_${faker.word.noun(8)}_${faker.word.noun(5)}`;
}

function generateColumnName(): string {
  return faker.database.column();
}

export function createConnections<T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number, dbName: string = 'MySQL')
    : HierarchyNode<T | IHierarchyNodeBase> {
        let connections: HierarchyNode<IHierarchyNodeBase>;
        let nodes: IHierarchyNodeBase[] = [];
        for (let i = 0; i < size; i++) {
            const id = generateId()
            const title = generateConnectionName(dbName);
            const children = createDatabases(3);
            nodes.push(wrapNode(id, title, children));
        }
        connections = {nodes: [...nodes], group: 'Connections'};
        return connections;
}

export function createDatabases<T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number)
    : HierarchyNode<T | IHierarchyNodeBase> {
      let connections: HierarchyNode<IHierarchyNodeBase>;
      let nodes: IHierarchyNodeBase[] = [];
      for (let i = 0; i < size; i++) {
          const id = generateId();
          const title = generateDatabaseName();
          const children = createSchemas(2);
          nodes.push(wrapNode(id, title, children));
      }
      connections = {nodes: [...nodes], group: 'Databases'};
      return connections;
}

export function createSchemas<T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number)
    : HierarchyNode<T | IHierarchyNodeBase> {
      let connections: HierarchyNode<IHierarchyNodeBase>;
      let nodes: IHierarchyNodeBase[] = [];
      for (let i = 0; i < size; i++) {
          const id = generateId();
          const title = generateSchemaName();
          const children = createTables(15);
          nodes.push(wrapNode(id, title, children));
      }
      connections = {nodes: [...nodes], group: 'Schemas'};
      return connections;
}

export function createTables<T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number)
    : HierarchyNode<T | IHierarchyNodeBase> {
      let connections: HierarchyNode<IHierarchyNodeBase>;
      let nodes: IHierarchyNodeBase[] = [];
      for (let i = 0; i < size; i++) {
          const id = generateId();
          const title = generateTableName();
          const children = createColumns(5);
          nodes.push(wrapNode(id, title, children));
      }
      connections = {nodes: [...nodes], group: 'Tables'};
      return connections;
}

export function createColumns<T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number)
    : HierarchyNode<T | IHierarchyNodeBase> {
      let connections: HierarchyNode<IHierarchyNodeBase>;
      let nodes: IHierarchyNodeBase[] = [];
      for (let i = 0; i < size; i++) {
          const id = generateId();
          const title = generateColumnName();
          nodes.push(wrapNode(id, title));
      }
      connections = {nodes: [...nodes], group: 'Columns'};
      return connections;
}

export function createNodes
    <T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number,
      generateTitle: TitleGenerator,
      generateChildren?: ChildrenGenerator,
      groupName: string = 'Root') : HierarchyNode<T | IHierarchyNodeBase> {
      let readOnlyNodes: HierarchyNode<IHierarchyNodeBase>;
      let nodes: IHierarchyNodeBase[] = [];
      for (let i = 0; i < size; i++) {
          const id = generateId();
          const title = generateTitle();
          let children;
          if (generateChildren) {
            children = generateChildren(size);
          }
          nodes.push(wrapNode(id, title, children));
      }
      readOnlyNodes = {nodes: [...nodes], group: groupName};
      return readOnlyNodes;
}


