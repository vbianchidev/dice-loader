import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponenteComponent } from './logo-componente.component';

describe('LogoComponenteComponent', () => {
  let component: LogoComponenteComponent;
  let fixture: ComponentFixture<LogoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
