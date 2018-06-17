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

  @Input() number = false;
  @Input() name = '';
  @Input() description = '';
  @Input() enabled = false;
  @Input() state = 'open';
  @Output() onSave: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() onDelete: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() onClose: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  public submitting = false;

  constructor() {}

  onSubmit(form) {
    if (this.submitting || form.invalid) return false;
    this.submitting = true;
    this.onSave.emit(this.zone());
    setTimeout(() => {
      this.submitting = false;
    }, 1000);
  }

  delete(form) {
    if (form.invalid) return false;
    this.onDelete.emit(this.zone());
  }

  close() {
    this.onClose.emit(true);
  }

  zone() {
    return {
      name: this.name,
      description: this.description,
      enabled: this.enabled,
      number: this.number,
      state: this.state
    }
  }

  toggle(event) {
    this.enabled = !this.enabled;
  }

  ngOnInit() {}
}
