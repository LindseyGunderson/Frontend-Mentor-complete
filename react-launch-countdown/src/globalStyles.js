import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


:root {

--ff-redhat: 'Red Hat Text', sans-serif;

/* primary colour pallete */
--primary-grey-blue: hsl(237, 18%, 59%);
--primary-soft-red: hsl(345, 95%, 68%);

/* netural colors */
--neutral-white: hsl(0, 0%, 100%);
--neutral-blue-600: hsl(236, 21%, 26%);
--neutral-blue-700: hsl(235, 16%, 14%);
--neutral-blue-900: hsl(234, 17%, 12%);
}

*, *::before, *::after {

    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Red Hat Text', sans-serif;
    font-size: 14px;
    
}
h1 {

    color: hsl(0, 0%, 100%);
}
 
h2, p, a {

    color: hsl(237, 18%, 59%);
    text-transform: uppercase;
    font-weight: 700;
}

body {

    background-image: linear-gradient(to bottom, hsl(234, 17%, 12%), hsl(236, 21%, 26%));

}

`;

export default GlobalStyle;