import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GptPageComponent } from './gpt-page.component';

describe('GptPageComponent', () => {
  let component: GptPageComponent;
  let fixture: ComponentFixture<GptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GptPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
