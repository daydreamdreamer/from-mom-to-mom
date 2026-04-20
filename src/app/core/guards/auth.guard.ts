import { CanActivateFn } from "@angular/router"
import { AuthService } from "../services/auth.service"
import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { catchError, map, of } from "rxjs";

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  return authService.getProfile().pipe(
    map(user => {
      authService.setSession(user);
      return true;
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};