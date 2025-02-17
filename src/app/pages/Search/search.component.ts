import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FrameComponent } from "../../components/FrameComponent/frame-component.component";
import { NavigationSidebar } from "../../components/NavigationSidebar/navigation-sidebar.component";
@Component({
  selector: "search",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FrameComponent, NavigationSidebar],
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class Search {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
