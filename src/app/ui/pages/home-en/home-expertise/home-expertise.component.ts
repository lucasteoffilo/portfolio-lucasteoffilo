import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ReplaySubject, takeUntil, startWith, map, scan, distinctUntilChanged, takeWhile, switchMap, Observable } from 'rxjs';
import { TRANSITION_IMAGE_SCALE, TRANSITION_TEXT } from 'src/app/ui/animations/transitions/transitions.constants';
import { UiUtilsView } from 'src/app/ui/utils/views.utils';

@Component({
  selector: 'app-home-expertise',
  templateUrl: './home-expertise.component.html',
  styleUrls: ['./home-expertise.component.scss'],
  animations: [
    TRANSITION_TEXT,
    TRANSITION_IMAGE_SCALE
  ]
})
export class HomeExpertiseComponent implements OnInit {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  mOnceAnimated = false

  /* ********************************************************************************************
    *                anims
    */
  _mTriggerAnim?= 'false'

  _mTriggerImage?= 'false'


  _mThreshold = 0.2


  @ViewChild('animRefView') vAnimRefView?: ElementRef<HTMLElement>;

  constructor(public el: ElementRef,
    private _ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    public mediaObserver: MediaObserver,
    private scroll: ScrollDispatcher, private viewPortRuler: ViewportRuler) { }

  ngOnInit(): void {
  }



  ngAfterViewInit(): void {
    this.setupAnimation();
  }

  ngOnDestroy(): void {

    this.destroyed$.next(true)
    this.destroyed$.complete()
  }


  public setupAnimation() {
    if (!this.vAnimRefView) return;

    // console.info("home products setupAnimation: " )
    this.scroll.ancestorScrolled(this.vAnimRefView, 100).pipe(
      // Makes sure to dispose on destroy
      takeUntil(this.destroyed$),
      startWith(0),
      map(() => {
        if (this.vAnimRefView != null) {
          var visibility = UiUtilsView.getVisibility(this.vAnimRefView, this.viewPortRuler)
          // console.log("product app-item UiUtilsView visibility: ", visibility)
          return visibility;
        }
        return 0;

      }),
      scan<number, boolean>((acc: number | boolean, val: number) => (val >= this._mThreshold || (acc ? val > 0 : false))),
      // Distincts the resulting triggers 
      distinctUntilChanged(),
      // Stop taking the first on trigger when aosOnce is set
      takeWhile(trigger => {
        // console.info("app-item  !trigger || !this.mOnceAnimated",
        //   !trigger || !this.mOnceAnimated)

        return !trigger || !this.mOnceAnimated
      }, true),
      switchMap(trigger => new Observable<number | boolean>(observer => this._ngZone.run(() => observer.next(trigger))))
    ).subscribe(val => {


      // console.log("home-item setupAnimation ancestorScrolled: ", val)

      if (this.mOnceAnimated) {
        return;
      }

      if (val) {
        // console.log("HomeProductsComponent setupAnimation setupAnimation ancestorScrolled: ", val)

        this.mOnceAnimated = true
        this._mTriggerAnim = 'true'
        this.cdr.detectChanges()
      }
      // if (this.vImageArea != null) {
      //   var visibility = UiUtilsView.getVisibility(this.vImageArea, this.viewPortRuler)
      //   console.log("UiUtilsView visibility: ", visibility)
      // }
    }

    )
  }

  _mTools = [

    // design
    {
      "id": "5131",
      "name": "Figma",
      "logo": "assets/img/tools/figma.svg",
      "link": "https://www.figma.com/",
      "tab": "design"
    },
    {
      "id": "5131",
      "name": "Adobe XD",
      "logo": "assets/img/tools/xd.png",
      "link": "https://www.adobe.com/products/xd.html",
      "tab": "design"
    },

    {
      "id": "5132",
      "name": "Adobe Photoshop",
      "logo": "assets/img/tools/ps.png",
      "link": "https://www.adobe.com/products/photoshop.html",
      "tab": "design"
    },
    {
      "id": "5133",
      "name": "Adobe Illustrator",
      "logo": "assets/img/tools/ai.svg",
      "link": "https://www.adobe.com/products/illustrator.html",
      "tab": "design"
    },
    {
      "id": "8108",
      "name": "Sass",
      "logo": "assets/img/tools/sass.png",
      "link": "https://sass-lang.com/",
      "tab": "web"
    },
    {
      "id": "8104",
      "name": "Ngrx",
      "logo": "assets/img/tools/ngrx.svg",
      "link": "https://ngrx.io/",
      "tab": "web"
    },
    {
      "id": "8101",
      "name": "Angular",
      "logo": "assets/img/tools/angular.png",
      "link": "https://angular.io/",
      "tab": "web",
      "color": "#FF4369"
    },

    {
      "id": "7121",
      "name": "Express",
      "logo": "assets/img/tools/express.png",
      "link": "https://expressjs.com/",
      "tab": "back-end"
    },
    {
      "id": "7126",
      "name": "NodeJs",
      "logo": "assets/img/tools/nodejs.png",
      "link": "https://nodejs.org/en/",
      "tab": "back-end"
    },
    // nest
    // php
    // python
    // socket.io
    // mysql
    // AWS
    {
      "id": "8108",
      "name": "NestJS",
      "logo": "assets/img/tools/nest.png",
      "link": "https://nestjs.com/",
      "tab": "back-end",
      "color": "#9c1734"
    },
    {
      "id": "8108",
      "name": "PHP",
      "logo": "assets/img/tools/php.png",
      "link": "https://php.net/",
      "tab": "back-end"
    },
    {
      "id": "8108",
      "name": "Python",
      "logo": "assets/img/tools/python.png",
      "link": "https://python.org/",
      "tab": "back-end"
    },
    {
      "id": "8108",
      "name": "Socket.io",
      "logo": "assets/img/tools/socketio.png",
      "link": "https://socket.io/",
      "tab": "back-end"
    },

    {
      "id": "8108",
      "name": "AWS",
      "logo": "assets/img/tools/aws.png",
      "link": "https://aws.amazon.com/",
      "tab": "cloud",
      "color": "#996100"
    },


  ]

}
