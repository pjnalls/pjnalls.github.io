import { transition, query, group, animate, trigger, style } from "@angular/animations";

export function routerTransition() {
    return fadeInAnimation();
}

function fadeInAnimation() {
    return trigger('routerTransition', [
        transition('HomePage <=> BioPage', [    
          query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, opacity: 1 })),
          group([ 
            query(':enter', [
              style({ opacity:0 }),
              animate('333ms', style({ opacity:1 }))
            ]),
            query(':leave', [
              style({ opacity:1 }),
              animate('333ms', style({ opacity:0 }))]),
          ])
        ])
      ])
}
