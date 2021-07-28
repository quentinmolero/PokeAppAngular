import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponent } from './custom.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormBuilder} from '@angular/forms';
import {BattleService} from '../../services/battle.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('CustomComponent', () => {
  let component: CustomComponent;
  let fixture: ComponentFixture<CustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomComponent ],
      imports: [MatInputModule, MatFormFieldModule, MatIconModule],
      providers: [FormBuilder, BattleService, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
