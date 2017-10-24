import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMainInfoComponent } from './character-main-info.component';

describe('CharacterMainInfoComponent', () => {
  let component: CharacterMainInfoComponent;
  let fixture: ComponentFixture<CharacterMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterMainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
