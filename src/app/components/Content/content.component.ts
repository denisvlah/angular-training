import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FormsSecondary } from "../FormsSecondary/forms-secondary.component";
import { ElementTags00D066Badge } from "../ElementTags00D066Badge/element-tags00-d066-badge.component";
@Component({
  selector: "content",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsSecondary, ElementTags00D066Badge],
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class Content {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
