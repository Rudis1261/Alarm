import {
  Component, OnInit, Input, Output,
  OnChanges, EventEmitter, trigger,
  state, style, animate, transition
} from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {

  @Input() id = false;
  @Input() name = '';
  @Input() description = '';
  public submitting = false;

  constructor() {}

  onSubmit(form) {
    if (this.submitting) return false;
    this.submitting = true;

    setTimeout(() => {
      this.submitting = false;
    }, 1000);
  }

  ngOnInit() {}
}
