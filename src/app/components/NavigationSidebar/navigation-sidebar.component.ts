import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { ElementTags00D066Badge } from "../ElementTags00D066Badge/ElementTags00D066Badge.component";
@Component({
  selector: "navigation-sidebar",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, ElementTags00D066Badge],
  templateUrl: "./NavigationSidebar.component.html",
  styleUrls: ["./NavigationSidebar.component.css"],
})
export class NavigationSidebar {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() home: string = "";
  @Input() chat: string = "";
  @Input() search: string = "";
  @Input() settings: string = "";
  /** Variant props */
  @Input() type: "Settings" | "Chat" | "Search" | "My page" = "Settings";
  /** Style props */
  @Input() navigationSidebarPosition: string | number = "";
  @Input() navigationSidebarHeight: string | number = "";
  @Input() navigationSidebarWidth: string | number = "";
  @Input() navigationSidebarTop: string | number = "";
  @Input() navigationSidebarRight: string | number = "";
  @Input() navigationSidebarBottom: string | number = "";
  @Input() navigationSidebarLeft: string | number = "";

  get navigationSidebarStyle() {
    return {
      position: this.navigationSidebarPosition,
      height: this.navigationSidebarHeight,
      width: this.navigationSidebarWidth,
      top: this.navigationSidebarTop,
      right: this.navigationSidebarRight,
      bottom: this.navigationSidebarBottom,
      left: this.navigationSidebarLeft,
    };
  }
}
