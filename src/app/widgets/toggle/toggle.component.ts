import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  @Input() isEnabled: boolean;
  @Input() index: number;
  @Output() onToggle: EventEmitter<object> = new EventEmitter<object>();

  constructor() {}

  toggle() {
    this.isEnabled = !this.isEnabled;
    this.onToggle.emit({
      index: this.index,
      state: this.isEnabled
    });
  }
}
