import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { AuthService } from "@auth0/auth0-angular";

export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    private async isAuthenticated(): Promise<boolean> {
        return await firstValueFrom(this.authService.isAuthenticated$);
    }

    async canActivate(): Promise<boolean> {
        const loggedIn = await this.isAuthenticated();
        if (loggedIn) {
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    }

    async canActivateChild(): Promise<boolean> {
        return this.canActivate();
    }
}
