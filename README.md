# K’Lionelle’s Inventory

A mobile-first grocery inventory app built with Expo and React Native.

## Run the app

```sh
npm install
npm start
```

Use the Expo Go app to scan the development QR code, or start a platform directly:

```sh
npm run android
npm run ios
```

## Firebase login and sign-out

The app uses Firebase Authentication for email/password accounts. Firebase securely
manages the credentials; the app never writes passwords to its inventory storage.
Inventory and debtor records continue to be stored locally on the device.

To enable account creation and sign-in:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Register a Web app in the project and enable **Email/Password** under
   **Authentication → Sign-in method**.
3. Copy `.env.example` to `.env.local` in the project root and replace each
   placeholder with the matching value from the Firebase Web app configuration.
4. Restart Expo with `npm run web` or `npm start`.

The `EXPO_PUBLIC_FIREBASE_*` client values identify the Firebase project and are
intended to be bundled into the app. Do not put Firebase service-account keys,
private keys, or other server credentials in an Expo client app. Until a Firebase
configuration is provided, the inventory remains usable and the Login page shows
the setup steps.

## Publish a web link

The app is configured for a static web export. After setting up Firebase as
described above (if you want login enabled), sign in to Expo and publish:

```sh
npx expo export --platform web
npx eas-cli@latest login
npx eas-cli@latest deploy
```

The deploy command prints a shareable preview URL. To publish to the production
URL, run `npx eas-cli@latest deploy --prod` after exporting again. Inventory and
debtor records are currently stored on each device and are not shared across
accounts.

## Inventory features

- Overview with item count, total units, stock value, and restock alerts
- Searchable inventory with category filters
- Add and edit products, including their names; remove out-of-stock products directly or remove any product from its edit form
- Adjust stock counts with quick increment/decrement controls
- Per-item minimum stock thresholds and cost tracking
- Inventory saved locally on the device
- Debtor accounts with dated payment history and automatically calculated balances

The starter inventory is sample data and can be replaced with the store’s current products.
