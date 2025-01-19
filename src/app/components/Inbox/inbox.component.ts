import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "inbox",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Inbox.component.html",
  styleUrls: ["./Inbox.component.css"],
})
export class Inbox {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() time: string = "";
  @Input() txt: string = "";
  /** Variant props */
  @Input() color: string = "onDark";
  @Input() state: string = "Active";
  @Input() type: string = "Text user";
}
