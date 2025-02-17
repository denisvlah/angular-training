import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "buttons12px-icon-label",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./buttons12px-icon-label.component.html",
  styleUrls: ["./buttons12px-icon-label.component.css"],
})
export class Buttons12pxIconLabel {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() icon: string = "";
  @Input() lable: string = "";
  /** Variant props */
  @Input() color: string = "onDark";
  @Input() type: string = "Post";
  /** Style props */
  @Input() iconColor: string | number = "";
  @Input() iconBackground: string | number = "";
  @Input() iconWebkitBackgroundClip: string | number = "";
  @Input() iconWebkitTextFillColor: string | number = "";
  @Input() lableColor: string | number = "";
  @Input() lableBackground: string | number = "";
  @Input() lableWebkitBackgroundClip: string | number = "";
  @Input() lableWebkitTextFillColor: string | number = "";

  get iconStyle() {
    return {
      color: this.iconColor,
      background: this.iconBackground,
      "webkit-background-clip": this.iconWebkitBackgroundClip,
      "webkit-text-fill-color": this.iconWebkitTextFillColor,
    };
  }

  get lableStyle() {
    return {
      color: this.lableColor,
      background: this.lableBackground,
      "webkit-background-clip": this.lableWebkitBackgroundClip,
      "webkit-text-fill-color": this.lableWebkitTextFillColor,
    };
  }
}
