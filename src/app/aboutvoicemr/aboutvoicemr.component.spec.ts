import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVoiceMRComponent } from './aboutvoicemr.component';

describe('AboutVoiceMRComponent', () => {
  let component: AboutVoiceMRComponent;
  let fixture: ComponentFixture<AboutVoiceMRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVoiceMRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVoiceMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
