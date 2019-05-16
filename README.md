# Chrome Extension template

## Installation

1.  Clone this repositiory
2.  Install the dependencies
    ```
    $ yarn
    ```
3.  Create the build folder
    ```
    $ yarn build
    ```
4.  Open a Google Chrome browser tab:
    - Click the 3 vertical dots to the right of the address bar
    - Scroll down to _More Tools_
    - On the drop down click _Extensions_ - new tab called "Extensions" should
      open
    - Make sure "Developer mode" is enabled
5.  Browse to the folder that was created after step one (usually named
    `./build`) and select "Open"
6.  The extension should now be installed, you will be able to see the icon on
    the right of the address bar

## To Run Locally

To watch for any changes use the command:

```bash
$ yarn start
```

## Tests

A suite of tests is available by running:

```bash
$ yarn test
```
