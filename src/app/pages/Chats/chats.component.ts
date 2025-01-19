import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { NavigationSidebar } from "../../components/NavigationSidebar/NavigationSidebar.component";
import { Content } from "../../components/Content/Content.component";
import { Buttons } from "../../components/Buttons/Buttons.component";
import { ElementTags000000OnDa } from "../../components/ElementTags000000OnDa/ElementTags000000OnDa.component";
import { Inbox } from "../../components/Inbox/Inbox.component";
import { Inbox1 } from "../../components/Inbox1/Inbox1.component";
import { Send } from "../../components/Send/Send.component";
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
  templateUrl: "./Chats.component.html",
  styleUrls: ["./Chats.component.css"],
})
export class Chats {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
