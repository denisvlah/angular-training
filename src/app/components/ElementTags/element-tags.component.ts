import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "element-tags",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./ElementTags.component.html",
  styleUrls: ["./ElementTags.component.css"],
})
export class ElementTags {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() showElementTags: boolean = false;
  @Input() tag: string = "";
  /** Variant props */
  @Input() color: string = "onDark";
  @Input() type: string = "Seccess";
  /** Style props */
  @Input() iconHeight: string | number = "";
  @Input() iconWidth: string | number = "";
  @Input() iconDisplay: string | number = "";
  @Input() tagTextDecoration: string | number = "";
  @Input() tagHeight: string | number = "";
  @Input() tagWidth: string | number = "";
  @Input() tagDisplay: string | number = "";

  get icon1Style() {
    return {
      height: this.iconHeight,
      width: this.iconWidth,
      display: this.iconDisplay,
    };
  }

  get tagStyle() {
    return {
      "text-decoration": this.tagTextDecoration,
      height: this.tagHeight,
      width: this.tagWidth,
      display: this.tagDisplay,
    };
  }
}
