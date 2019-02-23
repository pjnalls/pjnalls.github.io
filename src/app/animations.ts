import { transition, query, group, animate, trigger, style } from "@angular/animations";

export function fadeInAnimation() {
  return trigger('routerTransition', [
      transition('* => *', [    
        query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, opacity: 1 }), { optional: true }),
        group([ 
          query(':enter', [
            style({ opacity: 0, top: 225 }),
            animate('500ms', style({ opacity: 1, top: 120 }))            
          ], { optional: true }),
          query(':leave', [
            style({ opacity: 1, top: 120 }),
            animate('500ms', style({ opacity: 0, top: 250 }))
          ], { optional: true }),
        ])
      ]),
    ])
}

export function routerTransition() {
    return fadeInAnimation();
}
