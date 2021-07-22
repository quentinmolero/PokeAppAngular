import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoaderService} from '../../services/loader.service';
import {Loader} from '../../services/types/loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  show = false;

  private subscription: Subscription | undefined;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: Loader) => {
        this.show = state.show;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
