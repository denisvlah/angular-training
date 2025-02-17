import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { Buttons } from "../Buttons/buttons.component";
import { Buttons12pxIconLabel } from "../Buttons12pxIconLabel/buttons12px-icon-label.component";
import { Send } from "../Send/send.component";
@Component({
  selector: "post",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, Buttons, Buttons12pxIconLabel, Send],
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class Post {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() showPostOpen: boolean = false;
  @Input() name1: string = "";
  @Input() img02: string = "";
  @Input() img01: string = "";
  @Input() showContent: boolean = false;
  @Input() showSend: boolean = false;
  /** Variant props */
  @Input() color: string = "onDark";
  @Input() type: string = "Post";
  /** Style props */
  @Input() postOpenGap: string | number = "";
  @Input() postOpenHeight: string | number = "";
  @Input() contentAlignSelf: string | number = "";
  @Input() contentWidth: string | number = "";

  onAccordionHeaderClick(event: Event) {
    const element = event.target as HTMLElement;

    const accItem: HTMLElement = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector(
      "[data-acc-content]"
    ) as HTMLElement;
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling ||
      (accItem?.parentElement?.nextElementSibling as HTMLElement);
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      (accItem?.parentElement?.previousElementSibling as HTMLElement);
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      (siblingContainerAccItem?.querySelector(
        "[data-acc-item]"
      ) as HTMLElement) || siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const accordion__open = "accordion__open";
    const accordion__close = "accordion__close";

    if (isOpen) {
      accContent?.classList.remove(accordion__open);
      accContent?.classList.add(accordion__close);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent = siblingAccItem?.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      setTimeout(() => {
        siblingAccContent?.classList.remove(accordion__close);
        siblingAccContent?.classList.add(accordion__open);
      }, 1);
    }
  }
  get postOpenStyle() {
    return {
      gap: this.postOpenGap,
      height: this.postOpenHeight,
    };
  }

  get contentStyle() {
    return {
      "align-self": this.contentAlignSelf,
      width: this.contentWidth,
    };
  }
}
