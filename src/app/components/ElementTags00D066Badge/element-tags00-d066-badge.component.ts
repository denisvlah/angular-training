import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "element-tags00d066badge",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./element-tags00-d066-badge.component.html",
  styleUrls: ["./element-tags00-d066-badge.component.css"],
})
export class ElementTags00D066Badge {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() type: "Settings" | "Chat" | "Search" | "My page" = "Settings";
  /** Style props */
  @Input() elementTags00D066BadgeFlexDirection: string | number = "";
  @Input() elementTags00D066BadgeAlignItems: string | number = "";
  @Input() elementTags00D066BadgeJustifyContent: string | number = "";
  @Input() elementTags00D066BadgePadding: string | number = "";
  @Input() bgTop: string | number = "";
  @Input() bgRight: string | number = "";
  @Input() bgBottom: string | number = "";
  @Input() bgLeft: string | number = "";
  @Input() bgMargin: string | number = "";
  @Input() bgBackgroundColor: string | number = "";
  @Input() numberPosition: string | number = "";
  @Input() numberTop: string | number = "";
  @Input() numberLeft: string | number = "";
  @Input() numberHeight: string | number = "";
  @Input() numberWidth: string | number = "";
  @Input() numberDisplay: string | number = "";

  get elementTags00D066BadgeStyle() {
    return {
      "flex-direction": this.elementTags00D066BadgeFlexDirection,
      "align-items": this.elementTags00D066BadgeAlignItems,
      "justify-content": this.elementTags00D066BadgeJustifyContent,
      padding: this.elementTags00D066BadgePadding,
    };
  }

  get bgStyle() {
    return {
      top: this.bgTop,
      right: this.bgRight,
      bottom: this.bgBottom,
      left: this.bgLeft,
      margin: this.bgMargin,
      "background-color": this.bgBackgroundColor,
    };
  }

  get numberStyle() {
    return {
      position: this.numberPosition,
      top: this.numberTop,
      left: this.numberLeft,
      height: this.numberHeight,
      width: this.numberWidth,
      display: this.numberDisplay,
    };
  }
}
