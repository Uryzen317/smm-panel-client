import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { AuthState } from "../types/auth.type";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: [],
})
export class HeaderComponent {
  authState!: AuthState;
  headerState: boolean = false; // open : true, close : false
  headerItems: { name: string; link: string; svg: string }[] = [
    {
      name: "Account",
      link: "/panel/account",
      svg: "M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm260 321H220q-24.75 0-42.375-17.625T160 836v-34q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v34q0 24.75-17.625 42.375T740 896Zm-520-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z",
    },
    {
      name: "Services",
      link: "/panel/services",
      svg: "m388 976-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535L80 456l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669 346l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592 850l-20 126H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410 576q0-29 20.5-49.5T480 506q29 0 49.5 20.5T550 576q0 29-20.5 49.5T480 646Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715 576q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538 348l-14-112h-88l-14 112q-34 7-63.5 24T306 414l-106-46-40 72 94 69q-4 17-6.5 33.5T245 576q0 17 2.5 33.5T254 643l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z",
    },
    {
      name: "Orders",
      link: "/panel/orders",
      svg: "M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm120-106q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm162 328h184q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T646 710H462q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T462 770Zm0-164h184q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T646 546H462q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T462 606Zm0-164h184q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T646 382H462q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T462 442ZM180 876V276v600Z",
    },
    {
      name: "Charge",
      link: "/panel/charge",
      svg: "M453 610v136q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T513 746V610h137q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T650 550H513V406q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T453 406v144H310q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T310 610h143Zm27.266 366q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z",
    },
    {
      name: "Support",
      link: "/panel/support",
      svg: "M440 936v-60h340V572q0-58-25-111.5T688 366q-42-41-96-65.5T480 276q-58 0-112 24.5T272 366q-42 41-67 94.5T180 572v244h-20q-33 0-56.5-23.5T80 736v-80q0-23 11-40.5t29-28.5l3-53q9-73 41.5-132t81-100q48.5-41 109-63.5T480 216q66 0 126.5 22.5t108.5 64q48 41.5 80.5 100T837 533l3 52q18 9 29 26.5t11 38.5v92q0 22-11 39t-29 26v69q0 24.75-17.625 42.375T780 936H440Zm-80-290q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.625T390 616q0 12-8.625 21T360 646Zm240 0q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.625T630 616q0 12-8.625 21T600 646Zm-359-52q-4-59 16.5-107t55-81.5Q347 372 392 354t90-18q91 0 153 57.5T711 537q-94-1-165.5-50.5T435 358q-16 81-67.5 143.5T241 594Z",
    },
    {
      name: "Feed",
      link: "/panel/feed",
      svg: "M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h462l198 198v462q0 24-18 42t-42 18H180Zm0-60h600V447H639q-12.75 0-21.375-8.625T609 417V276H180v600Zm129-111h342q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T651 705H309q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T309 765Zm0-318h141q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T450 387H309q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T309 447Zm0 159h342q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T651 546H309q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T309 606ZM180 276v171-171 600-600Z",
    },
    {
      name: "FAQ",
      link: "/panel/faq",
      svg: "M484.028 809Q500 809 511 797.972q11-11.028 11-27T510.972 744q-11.028-11-27-11T457 744.028q-11 11.028-11 27T457.028 798q11.028 11 27 11Zm-3.762 167q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Zm2.767-180Q513 396 536 414.5q23 18.5 23 47.196 0 26.304-15.648 45.733Q527.705 526.857 508 544q-23 19-40 42.385-17 23.384-17 52.615 0 11 8.4 17.5T479 663q12 0 19.875-8T509 635q3-21 16-38t30.231-30.784Q580 546 596 519t16-58.614Q612 410 574.5 376.5 537 343 485.548 343 450 343 417 358t-54 44q-7 10-6.5 21.5t9.469 18.5q11.416 8 23.646 5 12.231-3 20.385-14 12.75-17.903 31.875-27.452Q461 396 482.767 396Z",
    },
  ];

  constructor(public authServie: AuthService) {
    this.authServie.authState.subscribe((value) => (this.authState = value));
  }
}
