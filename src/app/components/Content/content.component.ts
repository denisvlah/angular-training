import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FormsSecondary } from "../FormsSecondary/FormsSecondary.component";
import { ElementTags00D066Badge } from "../ElementTags00D066Badge/ElementTags00D066Badge.component";
@Component({
  selector: "content",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsSecondary, ElementTags00D066Badge],
  templateUrl: "./Content.component.html",
  styleUrls: ["./Content.component.css"],
})
export class Content {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
