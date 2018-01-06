import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3LeafletComponent } from './d3-leaflet.component';

describe('D3LeafletComponent', () => {
  let component: D3LeafletComponent;
  let fixture: ComponentFixture<D3LeafletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3LeafletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3LeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
