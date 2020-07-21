# 5NaNs
5NaNs, exactly as it sounds when you try to pronounce it, is a React application that can used for managing your finances, and ensuring that all your numbers are right and on point, and you don't end up with **NaNs** in your hands <br>(which have **5** fingers (hopefully). Coincidence? No. Clever pun).

5NaNs requires users to login using their Google accounts, and provides a platform using which users can add, edit, remove, and track their expenses, with ease.<br>
Users' expense related data is securely stored on a Realtime Firebase Database.

## Environment Variables
The environment variables required are primarily Firebase related. <br>
Two *.env* files might be required (depending upon your requirements).
*   *.env.development* : Must contain environment variables pertaining to the application's actual Firebase Realtime DB
*   *.env.test* : Must contain environment variables pertaining to the application's test suite's testing Firebase Realtime DB

The *.env* files must be located in the root of the directory.<br>
sample_env.env is a sample .env file (of no consequence) that serves the purpose of outlining what the above mentioned *.env* files should look like, and where they should be located.

## Build

*   **Development**:
    Run ```npm run build:dev``` for a development level build.

*   **Production**:
    Run ```npm run build:prod``` for a production level build.<br>
The built assets will be observable at public/dist.

## Serving the assets

To serve the directory up, run `npm run dev-serve`.<br>
This command is recommended to be run while developing, since any changes made are immediately reflected.

## Testing

To run the test suites created, run `npm test`.<br>
Snapshot testing, as well as custom test suites have been designed; for every component, function, and functionality.
