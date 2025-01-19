import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FrameComponent } from "../../components/FrameComponent/FrameComponent.component";
import { NavigationSidebar } from "../../components/NavigationSidebar/NavigationSidebar.component";
@Component({
  selector: "search",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FrameComponent, NavigationSidebar],
  templateUrl: "./Search.component.html",
  styleUrls: ["./Search.component.css"],
})
export class Search {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
