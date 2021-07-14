import {
  transition,
  trigger,
  query,
  style,
  animate,
  stagger,
  keyframes,
  group,
} from '@angular/animations';

const styling = {
  position: 'fixed', 
  width: 'calc(100% - 90px)'
}

if(window.innerWidth >= 650) {
  styling.width = 'calc(100% - 90px)'
} else {
  styling.width = '100%'
}


export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter, :leave', style(styling), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        stagger('300ms', [
          animate(
            '500ms ease-out',
            keyframes([
              style({
                clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
              }),
              style({
                clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
              }),
            ])
          ),
        ]),
        { optional: true }
      ),
      query(
        ':leave',
        stagger('300ms', [
          animate(
            '500ms ease-out',
            keyframes([
              style({
                clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
              }),
              style({
                clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
              }),
            ])
          ),
        ]),
        { optional: true }
      ),
    ]),
  ]),
]);
