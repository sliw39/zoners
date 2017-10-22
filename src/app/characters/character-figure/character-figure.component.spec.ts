import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFigureComponent } from './character-figure.component';

describe('CharacterFigureComponent', () => {
  let component: CharacterFigureComponent;
  let fixture: ComponentFixture<CharacterFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
