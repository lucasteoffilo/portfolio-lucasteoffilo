import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormBuilder } from '@angular/forms';
import { ReplaySubject, takeUntil, startWith, map, scan, distinctUntilChanged, takeWhile, switchMap, Observable } from 'rxjs';
import { TRANSITION_IMAGE_SCALE, TRANSITION_TEXT } from 'src/app/ui/animations/transitions/transitions.constants';
import { UiUtilsView } from 'src/app/ui/utils/views.utils';

@Component({
  selector: 'app-my-apps',
  templateUrl: './my-apps.component.html',
  styleUrls: ['./my-apps.component.scss'],
  animations: [
    TRANSITION_TEXT,
    TRANSITION_IMAGE_SCALE
  ]
})
export class MyAppsComponent implements OnInit {


  _mApps = [

    {
      "id": "1",
      "name": "Rastreei: Tracking Plataform",
      "image": "../../../../../../../assets/img/apps/rastreei.png",
      "link": "http://sistema.rastreei.com",
      "tab": "Development",
      "caption": "Fullstack Development -",
      "primary":"#3FD67D",
      "background":"#E1E1E1"
    },
    {
      "id": "2",
      "name": "Vetcombella: Professional Portfolio",
      "image": "../../../../../../../assets/img/apps/vetcombella2.png",
      "link": "",
      "tab": "Design",
      "caption": "UX/UI Design -",
      "background":"#a6d4ed"
    }
  ];
  
  _mApps2 = [

    {
      "id": "1",
      "name": "Grupo 2E: Business Management System",
      "image": "../../../../../../../assets/img/apps/G2E.png",
      "link": "http://sistema.grupo2e.com.br/login",
      "tab": "Development",
      "caption": "Fullstack Development -",
      "primary":"#3FD67D",
      "background":"#E1E1E1"
    },
    {
      "id": "2",
      "name": "Indike.me: Referral System for Companies",
      "image": "../../../../../../../assets/img/apps/indikeme.png",
      "link": "https://indike.me",
      "tab": "Design",
      "caption": "UX/UI Design -",
      "background":"#a6d4ed"
    }
  ];
  
  _mApps3 = [

    {
      "id": "1",
      "name": "Codando club: Software Learn",
      "image": "../../../../../../../assets/img/apps/codandoclub.png",
      "link": "http://codando.club",
      "tab": "Development",
      "caption": "UX/UI Design -",
      "primary":"#3FD67D",
      "background":"#E1E1E1"
    },
    {
      "id": "2",
      "name": "Fale Flex: Voip Communication ",
      "image": "../../../../../../../assets/img/apps/faleflex.png",
      "link": "http://www.faleflex.com/",
      "tab": "Development",
      "caption": "Frontend Development -",
      "background":"#a6d4ed"
    }
  ];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  mOnceAnimated = false

  /* ********************************************************************************************
    *                anims
    */
  _mTriggerAnim?= 'false'



  _mThreshold = 0.4


  @ViewChild('animRefView') vAnimRefView?: ElementRef<HTMLElement>;

  constructor(public el: ElementRef,
    private _ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    public mediaObserver: MediaObserver,
    private scroll: ScrollDispatcher, private viewPortRuler: ViewportRuler,
    private formBuilder: FormBuilder) {



  }

  ngOnInit(): void {
  }



  ngAfterViewInit(): void {
    this.setupAnimation();
  }

  ngOnDestroy(): void {

    this.destroyed$.next(true)
    this.destroyed$.complete()
  }




  /* ***************************************************************************
   *                                  other parts
   */


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
}
