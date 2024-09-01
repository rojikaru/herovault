import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { ImagineComponent } from './pages/heroes/imagine/imagine.component';
import { SingleViewComponent } from './pages/heroes/single-view/single-view.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { CreateHeroComponent } from './pages/heroes/create-hero/create-hero.component';
import { UpdateHeroComponent } from './pages/heroes/update-hero/update-hero.component';

export const routes: Routes = [
    // Home
    {
        path: '',
        component: HomeComponent,
    },

    // Explore
    {
        path: 'explore',
        component: ExploreComponent,
        canActivate: [AuthGuard],
    },

    // AI-Driven Character Creation
    {
        path: 'imagine',
        component: ImagineComponent,
        canActivate: [AuthGuard],
    },

    // Heroes
    {
        path: 'heroes',
        redirectTo: 'explore',
        pathMatch: 'full',
    },
    {
        path: 'hero/:id',
        component: SingleViewComponent,
    },
    {
        path: 'heroes/create',
        component: CreateHeroComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'hero/update/:id',
        component: UpdateHeroComponent,
        canActivate: [AuthGuard],
    },

    // User Profiles
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

    // 404
    {
        path: '**',
        component: NotFoundComponent
    },
];
