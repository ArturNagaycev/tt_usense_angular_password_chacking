# Application to test password strength

To see:

- the preview of this project - follow [DEMO link](https://arturnagaycev.github.io/tt_usense_angular_password_chacking/)

## Technologies:
- **Angular** (ReactiveFormsModule, FormControl),
- **JavaScript**,
- **Typescript**,
- **HTML**,
- **CSS**,

## App description:
You input password, then:

 - If the field is empty, all sections of bar above are gray;
 - If the field has less than 8 characters, all sections are red;
 - If the password is easy (Only letters || only digits || only symbols) - the first section is red the rest are gray;
 - If the password is medium (Combination of letters-symbols/letters-digits/digits-symbols) - the first two sections are yellow the last one is gray;
 - If the password is strong (Has letters, symbols and numbers) - all sections are green;


## How to launch app locally:
1. Fork the repository
2. Clone the repository
3. Open the project in IDE
3. Open the terminal in IDE
4. Run ```npm i```
5. Run ```ng serve```
6. Then you can see the app at http://localhost:4200/ or follow the link that appears in the terminal
