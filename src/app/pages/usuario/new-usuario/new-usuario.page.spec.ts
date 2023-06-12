import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewUsuarioPage } from './new-usuario.page';

describe('NewUsuarioPage', () => {
  let component: NewUsuarioPage;
  let fixture: ComponentFixture<NewUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
