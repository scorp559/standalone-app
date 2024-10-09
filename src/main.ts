import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import the routes from app.routes.ts

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes), provideAnimationsAsync()] // Provide the imported routes
})
  .catch(err => console.error(err));