import { HierarchyNode, IHierarchyNodeBase } from "../../shared/model/hierarchy-node-base.type";
import { faker } from '@faker-js/faker';
import { IDbTreeHierarchyNode } from "../../db-tree/model/db-tree-hierarchy-node.interface";

export type TitleGenerator = (name?: string) => string;
export type ChildrenGenerator<T extends IHierarchyNodeBase> = (size: number) => HierarchyNode<T>;

function wrapNode(id: number, title: string, children?: HierarchyNode<IHierarchyNodeBase>): IHierarchyNodeBase {
  return {
    id,
    title,
    next: children
  };
}

function wrapDbNode(id: number, title: string, iconUrlClass: string, children?: HierarchyNode<IDbTreeHierarchyNode>): IDbTreeHierarchyNode {
  return {
    id,
    title,
    iconUrlClass,
    next: children
  };
}

function generateId() {
  return faker.datatype.number({min: 1, max: 999999});
}

function generateConnectionName(dbName?: string): string {
  if (dbName)
    return `${dbName} - ${faker.helpers.arrayElement(['test', 'dev', 'stage'])}`;
  else
    return `${faker.database.engine()} - ${faker.helpers.arrayElement(['test', 'dev', 'stage'])}`;
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
       return createNodes(3, generateConnectionName, createDatabases, 'Connections', 'connection');
}

export function createDatabases<T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number)
    : HierarchyNode<T | IHierarchyNodeBase> {
      return createNodes(3, generateDatabaseName, createSchemas, 'Databases', 'database');
}

export function createSchemas<T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number)
    : HierarchyNode<T | IHierarchyNodeBase> {
      return createNodes(5, generateSchemaName, createTables, 'Schemas', 'schema');
}

export function createTables<T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number)
    : HierarchyNode<T | IHierarchyNodeBase> {
    return createNodes(10, generateTableName, createColumns, 'Tables', 'table');
}

export function createColumns<T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number)
    : HierarchyNode<T | IHierarchyNodeBase> {
     return createNodes(10, generateColumnName, undefined, 'Columns', 'column');
}

export function createNodes
    <T extends IHierarchyNodeBase | IHierarchyNodeBase>(size: number,
      generateTitle: TitleGenerator,
      generateChildren?: ChildrenGenerator<T>,
      groupName: string = 'Root', iconClass: string = '') : HierarchyNode<T | IHierarchyNodeBase> {
      let readOnlyNodes: HierarchyNode<IHierarchyNodeBase>;
      let nodes: IHierarchyNodeBase[] = [];
      for (let i = 0; i < size; i++) {
          const id = generateId();
          const title = generateTitle();
          let children;
          if (generateChildren) {
            children = generateChildren(size);
          }
          nodes.push(wrapDbNode(id, title, iconClass, children as unknown as HierarchyNode<IDbTreeHierarchyNode>));
      }
      readOnlyNodes = {nodes: [...nodes], group: groupName};
      return readOnlyNodes;
}


