# Play A Game 

**Developer: Gustaaf Milzink**

[Live website](https://g-milzink.github.io/CI_PP2_GS/)

![Mockup image](docs/amiresponsive.webp)

## Table of Content
  - [Project Goals](#project-goals)
    - [User Goals](#user-goals)
    - [Site Owner Goals](#site-owner-goals)
  - [User Experience](#user-experience)
    - [Target Audience](#target-audience)
    - [User Requirements and Expectations](#user-requirements-and-expectations)
  - [User Stories](#user-stories)
    - [Site User](#site-user)
    - [Site Owner](#site-owner)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Fonts](#fonts)
    - [Structure](#structure)
    - [Wireframes](#wireframes)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Libraries & Tools](#frameworks-libraries--tools)
  - [Features](#features)
  - [Validation](#validation)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [JavaScript Validation](#javascript-validation)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
  - [Testing](#testing)
    - [Performing tests on various devices](#performing-tests-on-various-devices)
    - [Browser compatibility](#browser-compatibility)
    - [Testing user stories](#testing-user-stories)
  - [Bugs](#bugs)
  - [Deployment](#deployment)
  - [Credits](#credits)
  - [Acknowledgements](#acknowledgements)

## Project Goals

The goal of this project was to create a website where the user can play a few simple games to pas time.

### Site Owner Goals

- Provide fully responsive and accessible website.
- Provide several easily understood games to choose from.
- Apply visually appealing design.
- Provide an intuitive way to navigate the website.

## User Experience

### Target Audience

- Anyone who wants to have fun playing a game with easily understood mechanics.

### User Requirements and Expectations

- Intuitive navigation.
- Easily understood game mechanics.
- Clean presentation that aides users understanding of game mechanics.
- Links that work as expected.
- Website needs to function on any device.
- A way to contact the developer to give feedback.

## User Stories

### Site User

1. I want to choose between several games.
2. I want to easily understand the rules of the different games.
3. I want clear feedback when I win or lose a game.
4. I want to be able to play the games on any device.
5. I want to be able to get in touch with the developer.
6. I want confirmation that I filled out the contact form correctly.

### Site Owner

7. I want the user to be able to choose between Rock Paper Scissors, A quiz and a Hangman game.
8. I want user to easily understand the different games.
9. I want my game to be fully responsive
10. I want the user to not have to use the back button when they receive a 404 error.
11. I want user to be able to send me a message and provide feedback.

## Design

### Colour Scheme

The colour scheme consists of mostly neutral colours the Dark grey background providing clear contrast for the lighter text colour.
- Yellow and white are used to show when an element has been clicked.
- Red and green are used to provide clear recognizable feedback to the user about the different win/lose states of the games.
- Minor variations of the basic gray tints are used to provide feedback on the keyboard for the Guillotine game.

<img src="docs/colours.webp">

### Font

The 'Roboto' font is used to display all the main content across the site. It was chosen for readabillity and aesthetics. A simple straightforward font that works well with the colour scheme.

### Structure

The websites main structure has been kept simple and clear without any unnecesary elements to avoid clutter and improve accesibillity.

- The site consist of the following five pages:
  - Welcome screen pointing users to the game selection in the header and the contact link in the footer.
  - A page containing the 'Rock Paper Scissors' game.
  - A page containing the 'Quizit' game.
  - A Page containg the 'Guillotine' (hangman) game.
  - A page containing a contact form.
  - A custom 404 page.

### Wireframes
<details><summary>Index</summary>
<img src="docs/wireframes/index.webp">
</details>
<details><summary>Rock Paper Scissors</summary>
<img src="docs/wireframes/rps.webp">
</details>
<details><summary>Quizzit</summary>
<img src="docs/wireframes/quizzit.webp">
</details>
<details><summary>Guillotine</summary>
<img src="docs/wireframes/guillotine.webp">
</details>
<details><summary>Contact</summary>
<img src="docs/wireframes/contact.webp">
</details>
<details><summary>404</summary>
<img src="docs/wireframes/404.webp">
</details>

## Technologies Used

### Languages

- HTML
- CSS
- JavaScript

### Tools & Libraries

- [Blender](https://www.blender.org/) Was used to create logo's and game images.
- [Krita](https://krita.org/) Was used to crop/resize/reformat images.
- [Swatcher](https://swatcherapp.com/) Was used to construct the colour scheme.
- [EmailJS](https://www.emailjs.com) Was used to send email from the contact form.
- [Favicon.io](https://favicon.io) Was used for making creating the websites favicons.
- [Google Fonts](https://fonts.google.com/) Was used to implement the 'roboto' font.
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools) Where used for debugging and testing performance.
- [WC3 Validator](https://validator.w3.org/), [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/), [JShint](https://jshint.com/) 
where used to validate HTML, CSS and Javascript code respectively.
- [Wave Validator](https://wave.webaim.org/) was used to confirm accesabillity.

## Features

The website consists of five pages containing 9 seperate features.

### Header
- featured on all pages.
- contains links to the available games.
- user stories covered: 1, 7

<details><summary>Header image</summary>
<img src="docs/features/header.webp">
</details>

### Footer
- featured on all pages.
- contains links to the contact page.
- user stories covered: 5, 11

<details><summary>Footer image</summary>
<img src="docs/features/ft_footer.webp">
</details>

### Home (welcome screen)
- shown when user first loads the website.
- displays a welcome message and points user to the links in the header and footer.
- user stories covered: 1, 7, 11

<details><summary>Home image</summary>
<img src="docs/features/ft_home.webp">
</details>

### Rock Paper Scissors (game)
- loads when the user clicks the appropriate icon in the header.
- Displays an intuitively laid out interface for playing a "rock paper scissors" game.
- Interactive elements have darker text against a light background to stand out.
- user stories covered: 2, 3, 8, 9

<details><summary>Rock Paper Scissors, pre-game</summary>
<img src="docs/features/rps/ft_rps.webp">
</details>
<details><summary>Rock Paper Scissors, win</summary>
<img src="docs/features/rps/ft_rps_win.webp">
</details>
<details><summary>Rock Paper Scissors, draw</summary>
<img src="docs/features/rps/ft_rps_draw.webp">
</details>
<details><summary>Rock Paper Scissors, lose</summary>
<img src="docs/features/rps/ft_rps_lose.webp">
</details>