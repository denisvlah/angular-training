import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FormsSecondary } from "../FormsSecondary/FormsSecondary.component";
import { ElementTags } from "../ElementTags/ElementTags.component";
import { Buttons } from "../Buttons/Buttons.component";
@Component({
  selector: "frame-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsSecondary, ElementTags, Buttons],
  templateUrl: "./FrameComponent.component.html",
  styleUrls: ["./FrameComponent.component.css"],
})
export class FrameComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
