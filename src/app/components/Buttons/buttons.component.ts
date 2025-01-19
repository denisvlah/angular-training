import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "buttons",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./Buttons.component.html",
  styleUrls: ["./Buttons.component.css"],
})
export class Buttons {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() icon: string = "";
  /** Variant props */
  @Input() color: string = "onDark";
  @Input() onlyIcon: string = "On";
  @Input() size: string = "14px";
  @Input() state: string = "Active";
  @Input() type: "Outline" | "Link" | "Primary" = "Primary";
  /** Style props */
  @Input() buttonsHeight: string | number = "";

  get buttonsStyle() {
    return {
      height: this.buttonsHeight,
    };
  }
}
