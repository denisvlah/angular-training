import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FormsSecondary } from "../FormsSecondary/forms-secondary.component";
import { ElementTags } from "../ElementTags/element-tags.component";
import { Buttons } from "../Buttons/buttons.component";
@Component({
  selector: "frame-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsSecondary, ElementTags, Buttons],
  templateUrl: "./frame-component.component.html",
  styleUrls: ["./frame-component.component.css"],
})
export class FrameComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
