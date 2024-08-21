import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/root/app.component';
import { config } from './app/root/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
