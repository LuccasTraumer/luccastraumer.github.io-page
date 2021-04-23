import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-template',
  templateUrl: './button-template.component.html',
  styleUrls: ['./button-template.component.scss']
})
export class ButtonTemplateComponent implements OnInit {

  @Input()
  redirectLink?: string;

  @Input()
  insideText: string;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    if (this.redirectLink !== null || this.redirectLink !== undefined || this.redirectLink.match('#'))
      this.onClickScroll(this.redirectLink);
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
