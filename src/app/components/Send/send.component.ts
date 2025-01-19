import { Component, ViewEncapsulation, HostBinding, Input } from '@angular/core'

import {CommonModule} from "@angular/common";
import { Buttons }  from "../Buttons/Buttons.component";
@Component({
 selector: "send",
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports:[CommonModule,Buttons],
    templateUrl:'./Send.component.html',
 styleUrls:['./Send.component.css']
})
    export class Send  {
      @HostBinding('style.display') display = 'contents';

      constructor() {
        
      }

      
/** Value props */
;@Input()showSend :boolean = false
;@Input()subtitle :string = ''
;@Input()title :string = ''
;@Input()line :string = ''
;
/** Variant props */
;@Input()color :string = "onDark"
;@Input()state :string = "Default"
;@Input()type :"Post Field" | "Comments" = "Post Field"
;
/** Style props */
;@Input()sendHeight :string | number = ''
;@Input()sendGap :string | number = ''
;@Input()sendTransitionProperty :string | number = ''
;@Input()sendTransitionTimingFunction :string | number = ''
;@Input()sendTransitionDuration :string | number = ''
;@Input()sendBorder :string | number = ''
;@Input()sendAlignSelf :string | number = ''
;@Input()sendWidth :string | number = ''
;@Input()titleWidth :string | number = ''
;@Input()titleDisplay :string | number = ''
;@Input()titleAlignSelf :string | number = ''
;
/** Action props */
;@Input()onAccordionHeaderClick($event) :() => void = () => {}


      get sendStyle() {
                  return {
                    
                    'height': this.sendHeight,
      'gap': this.sendGap,
      'transition-property': this.sendTransitionProperty,
      'transition-timing-function': this.sendTransitionTimingFunction,
      'transition-duration': this.sendTransitionDuration,
      'border': this.sendBorder,
      'align-self': this.sendAlignSelf,
      'width': this.sendWidth
                  }
                }
              
get titleStyle() {
                  return {
                    
                    'width': this.titleWidth,
      'display': this.titleDisplay,
      'align-self': this.titleAlignSelf
                  }
                }
              
    }
    