# XClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Environment Variables

This project requires the following Firebase environment variables to be set:

- `FIREBASE_API_KEY` - Your Firebase API key
- `FIREBASE_AUTH_DOMAIN` - Your Firebase auth domain (project-id.firebaseapp.com)
- `FIREBASE_DATABASE_URL` - Your Firebase Realtime Database URL
- `FIREBASE_PROJECT_ID` - Your Firebase project ID
- `FIREBASE_STORAGE_BUCKET` - Your Firebase storage bucket
- `FIREBASE_MESSAGING_SENDER_ID` - Your Firebase messaging sender ID
- `FIREBASE_APP_ID` - Your Firebase app ID

### Local Development
Create a `.env` file in the root directory with the above variables.

### Vercel Deployment
Set these environment variables in your Vercel project settings:
1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each variable with the exact names listed above
4. Make sure to set them for Production, Preview, and Development environments

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
