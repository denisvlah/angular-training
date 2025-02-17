import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { NavigationSidebar } from "../../components/NavigationSidebar/navigation-sidebar.component";
import { Content } from "../../components/Content/content.component";
import { Buttons } from "../../components/Buttons/buttons.component";
import { ElementTags000000OnDa } from "../../components/ElementTags000000OnDa/element-tags000000-on-da.component";
import { Inbox } from "../../components/Inbox/inbox.component";
import { Inbox1 } from "../../components/Inbox1/inbox1.component";
import { Send } from "../../components/Send/send.component";
@Component({
  selector: "chats",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NavigationSidebar,
    Content,
    Buttons,
    ElementTags000000OnDa,
    Inbox,
    Inbox1,
    Send,
  ],
  templateUrl: "./chats.component.html",
  styleUrls: ["./chats.component.css"],
})
export class Chats {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
