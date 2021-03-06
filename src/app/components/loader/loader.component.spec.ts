import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {LoaderComponent} from './loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoaderService} from '../../services/loader.service';
import {of} from 'rxjs';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let view: any;
  const fakeLoaderState = {
    loaderState: of({show: true})
  };

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ],
      imports: [MatProgressSpinnerModule],
      providers: [
        [{provide: LoaderService, useValue: fakeLoaderState}]
    ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    view = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loaderState in Oninit', () => {
    expect(component.show).toEqual(true);
  });
  /*it('test angular professor code', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(view.querySelector('.loader-container').content).toBe(undefined);
  }));

  it('test angular professor code2', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(view.querySelector('.loader-container').content).not.toBe(undefined);
  }));

  it('should be empty when show == false', fakeAsync(() => {
    const loaderService = TestBed.inject(LoaderService);
    spyOn(loaderService, 'loaderState').and.returnValue(of({show: false}));
    fixture.detectChanges();
    tick();
    expect(view.querySelector('.loader-container').content).toBe(undefined);
    expect(view.querySelector('mat-progress-spinner').hidden).toBe(true);
    expect(loaderService.loaderState).toHaveBeenCalled();
  }));

  it('should display spinBar when show == true', fakeAsync(() => {
    const loaderService = TestBed.inject(LoaderService);
    const functionSpy = spyOn(loaderService, 'loaderState').and.returnValue(of({show: true}));
    fixture.detectChanges();
    tick();
    expect(view.querySelector('.loader-container').content).not.toBe(undefined);
    expect(view.querySelector('mat-progress-spinner').hidden).toBe(false);
    expect(loaderService.loaderState).toHaveBeenCalled();
  }));*/
});
