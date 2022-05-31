import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
  HostBinding,
} from '@angular/core';
import {
  HierarchyNode,
  IHierarchyNodeBase,
} from '../../model/hierarchy-node-base.type';

@Component({
  selector: 'pcn-hierarchy-view',
  templateUrl: './hierarchy-view.component.html',
  styleUrls: ['./hierarchy-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HierarchyViewComponent<T extends IHierarchyNodeBase> implements OnInit {
  @Input() root!: HierarchyNode<T> | undefined;
  @Input() nodeItemTemplate: TemplateRef<T> | null = null;
  @Input() groupNodeItemTemplate: TemplateRef<T> | null = null;

  public toggleLevelMaps: Map<number | string, boolean> = new Map();

  constructor() {}

  ngOnInit(): void {
    this.mapCollapsedLevels();

  }

  @HostBinding('class.level')
  public hasChildren(node: T): boolean {
    return Array.isArray(node.next?.nodes);
  }

  public get hasItemTemplate(): boolean {
    return this.nodeItemTemplate != null;
  }

  public toggleGroup(groupName: string = '') {
    this.toggleLevelMaps.set(groupName, !this.toggleLevelMaps.get(groupName));
  }

  public toggleNode(node: T) {
    this.toggleLevelMaps.set(node.id, !this.toggleLevelMaps.get(node.id));
  }

  public isGroupExpanded(groupName?: string): boolean | undefined {
    if (groupName) {
      return this.toggleLevelMaps.get(groupName);
    }
    return false;
  }

  public isNodeExpanded(node: T): boolean | undefined {
    if (node) {
      return this.toggleLevelMaps.get(node.id);
    }
    return false;
  }

  private mapCollapsedLevels() {
    this.mapGroups();
    this.mapNodes();
  }

  private mapGroups() {
    if (this.root?.group) {
      this.toggleLevelMaps.set(this.root.group, false);
    }
  }

  private mapNodes() {
    if (this.root?.nodes) {
      this.root.nodes.forEach((node) => {
        this.toggleLevelMaps.set(node.id, false);
      });
    }
  }
}
