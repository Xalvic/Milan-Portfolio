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

export const slideInAnimation = trigger('routeAnimations', [
  // transition('Contact => *', [
  //   query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
  //     optional: true,
  //   }),
  //   group([
  //     query(
  //       ':enter',
  //       [
  //         style({ transform: 'translateX(-100%)' }),
  //         animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
  //       ],
  //       { optional: true }
  //     ),
  //     query(
  //       ':leave',
  //       [
  //         style({ transform: 'translateX(0%)' }),
  //         animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' })),
  //       ],
  //       { optional: true }
  //     ),
  //   ]),
  // ]),

  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
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
              // style({ opacity: 1, transform: 'translateY(0 px)', offset: 1 }),
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
              // style({
              //   transform: 'translateX(0%)',
              // }),
              // style({
              //   transform: 'translateX(-100%)',
              // }),
              // style({ opacity: 1, transform: 'translateY(0 px)', offset: 1 }),
            ])
          ),
        ]),
        { optional: true }
      ),
    ]),
  ]),
]);
