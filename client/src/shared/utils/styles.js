import { css } from 'styled-components';
import Color from 'color';

export const color = {
    primary:  "#5858FA", // blue



    textGreen: "#22CF5D", // green
    textRed: "#FF4040", // red
    textLightRed: "E75588",
    textBlue: "#150AA1", // blue, text for titles
    textDarkGrey: "#393939", // dark grey
    textBlack: "#494949", // black-grey
    textLight: "#000", // black
    textMediumGrey: "#585858", // grey, used in footers
    textLightGrey: "#7B7B7B", // light grey, used in form fields
    textLightestGrey: "#807E90", // light grey, used in events 
    textSubtitle: "#686868", // grey, used in subtitles in sidebars
    textSideLink: "#A9A9A9", // light grey, used in Side Navbars
    textLink: "#5360FA", // blue, used in links
    textConfirmation: "3A3A3A", // dark grey, used in confirmation messages



    backgroundLight: "#FFFFFF", // white
    backgroundDark: "#181818", // black
    backgroundGrey: "#D9D9D9", // grey, used in backgrounds for giving notes
}

export const sizes = {
    homeNavBarTopHeight: "89px",
    homeFooterHeight: "1494px",

    storyWidth: "76px",
    storyHeight: "91px",

    longButtonWidth: "212px",
    longButtonHeight: "40px",
    longButtonBorderRadius: "60px",

    shortButtonWidth: "102px",
    shortButtonHeight: "35px",
    shortButtonBorderRadius: "4px",

    flexGap: "5px",

    profileBorderRadius: "40px",
    profileImageWidth: "40px",
    profileImageHeight: "40px",

    feedProfileBorderRadius: "60px",
    feedProfileImageWidth: "60px",
    feedProfileImageHeight: "60px",
    feedProfileBorder: '2px groove rgba(154, 154, 154, 0.25)',

    searchBarWidth: "302px",
    searchBarHeight: "51px",
    searchBarBorderRadius: "4px",
    smallBorder: '1px solid #E4E4E4',

    borderRight: '1px groove rgba(154, 154, 154, 0.25)',
    formBorder: '1px solid #E4E4E4',
    
    marginLarge: "20px",
    paddingLarge: "20px",
    
    marginSmall: "10px",
    paddingSmall: "10px",
}

export const font = {
    light: 'font-family: "RubikLight"; font-weight: "normal";',
    regular: 'font-family: "RubikRegular"; font-weight: "normal";',
    medium: 'font-family: "RubikMedium"; font-weight: "normal";',
    dark: 'font-family: "RubikBlack"; font-weight: "normal";',
}
//mixins are used to create reusable blocks of CSS code
export const mixin = {
    clickable: css`
        cursor: pointer;
    `,
    scrollableY: css`
        overflow-y: scroll;
        overflow-x: hidden;
        `,
    scrollableX: css`
        overflow-x: scroll;
        overflow-y: hidden;
        `,
    backgroundImage: imageURL => css`
        background-image: url(${imageURL});
        background-size: cover;
        backgrouund-repeat: no-repeat;
        background-position: center;
        `,
    link: (colorValue = color.textLink) => css`
        cursor: pointer;
        color: ${colorValue};
        ${font.regular},
        &:hover,&:visited,&:active {
            color: ${colorValue};
        }
        `,
    single: css`
        display: flex;
        justify-content: center;
        align-items: center;
        `,
    horizontalList: css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        `,
    verticalList: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    `,
    menuItem: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        justify-content: flex-start;
        margin-left: 50%;
        `,
    smallScreen: css`
        @media (max-width: 768px) {
            display: none;
        }
    `,
    mediumScreen: css`
        @media (max-width: 1024px) {
            display: none;

        }
    `,
    inputText: css`
        input[type="text"]{
            ${font.regular}
        }
    `,
    }
