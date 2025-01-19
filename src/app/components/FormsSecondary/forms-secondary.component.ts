import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "forms-secondary",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./FormsSecondary.component.html",
  styleUrls: ["./FormsSecondary.component.css"],
})
export class FormsSecondary {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() fieldTitle: string = "";
  @Input() placeholder: string = "";
  @Input() icon: string = "";
  /** Variant props */
  @Input() color: string = "onDark";
  @Input() component: string = "Input";
  @Input() size: string = "14 px";
  @Input() state: "Default" | "Active" = "Counter";
  @Input() type: string = "Primary";
  /** Style props */
  @Input() formsSecondaryAlignSelf: string | number = "";
  @Input() formsSecondaryHeight: string | number = "";
  @Input() placeholderHeight: string | number = "";
  @Input() placeholderDisplay: string | number = "";

  get formsSecondaryStyle() {
    return {
      "align-self": this.formsSecondaryAlignSelf,
      height: this.formsSecondaryHeight,
    };
  }

  get placeholderStyle() {
    return {
      height: this.placeholderHeight,
      display: this.placeholderDisplay,
    };
  }
}
