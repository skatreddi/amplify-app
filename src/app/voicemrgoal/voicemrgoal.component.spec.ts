import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicemrgoalComponent } from './voicemrgoal.component';

describe('VoicemrgoalComponent', () => {
  let component: VoicemrgoalComponent;
  let fixture: ComponentFixture<VoicemrgoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicemrgoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicemrgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
