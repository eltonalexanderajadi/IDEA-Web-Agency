import {css} from 'styled-components';

export const mobile = (props) =>{
    return css`
    /* for small devices */
        @media only screen and (max-width: 600px) {
            ${props}
        }
    `;
};

export const tablet = (props) =>{
    return css`
    /*for tablet*/
        @media only screen and (max-width: 1024px) {
            ${props}
        }
    `;
};

 