import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalDbTreeComponent } from './relational-db-tree.component';

describe('RelationalDbTreeComponent', () => {
  let component: RelationalDbTreeComponent;
  let fixture: ComponentFixture<RelationalDbTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationalDbTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationalDbTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
