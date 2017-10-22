import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterWoundComponent } from './character-wound.component';

describe('CharacterWoundComponent', () => {
  let component: CharacterWoundComponent;
  let fixture: ComponentFixture<CharacterWoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterWoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterWoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
