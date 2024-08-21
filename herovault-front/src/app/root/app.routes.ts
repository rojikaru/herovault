import { Routes, UrlSegment } from '@angular/router';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },

    // TODO: Future feature of user profiles with @username routing
    /* {
        matcher: (url) => {
            if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
                return {
                    consumed: url,
                    posParams: {
                        username: new UrlSegment(url[0].path.slice(1), {})
                    }
                };
            }
            return null;
        },
        component: ProfileComponent,
    }, */
    {
        path: '**',
        component: NotFoundComponent
    },
];
