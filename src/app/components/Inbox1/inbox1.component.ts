import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "inbox1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./inbox1.component.html",
  styleUrls: ["./inbox1.component.css"],
})
export class Inbox1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() color: string = "onDark";
  @Input() state: string = "Resting";
  @Input() type: string = "Text";
}
