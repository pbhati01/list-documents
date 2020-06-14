## list-documents

This application inclueds following features:

* The Documents list page includes filter and sorting functionality
* This only shows documents with the format .pdf and .docx.
* Acceptable date format: dd-mm-yyyy
* User can Filter by date (from date - to date)
* User is able to sort by name and date (default by date, latest first).
* Document list fetched from here:[document list](https://frontend.apply.crosslend.dev/documents.json)
* User details fetched from here:[user info](https://frontend.apply.crosslend.dev/user/info.json)
* Layout is responsive (mobile, table, desktop).

## Steps to setup application in local
* Go to Root directory of application and execute following commands:
    ```sh
    $ cd list-documents
    $ list-documents/web> npm install
    $ list-documents/web> npm start
    ```

## Leftover part of assignment
* from date and todate format is not similar
* user profile icon is not similar to shown in wireframe.

## Challenges faced
* Api links not supportive due to CORS, hence downloaded the data in json and used that in api file.


### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.