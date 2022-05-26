import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IHierarchyNodeBase } from '../../model/hierarchy-node-base.type';

import { HierarchyViewComponent } from './hierarchy-view.component';

describe('HierarchyViewComponent', () => {
  let component: HierarchyViewComponent<IHierarchyNodeBase>;
  let fixture: ComponentFixture<HierarchyViewComponent<IHierarchyNodeBase>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
