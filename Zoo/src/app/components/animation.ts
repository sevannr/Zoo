import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeIn =
trigger('fadeInIn', [
    state('*', style({
        opacity: 1
    })),
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30%)' }),
        animate('500ms linear')
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('500ms linear')
    ])
]);