import styled,{createGlobalStyle, css} from "styled-components";
import fonts from "google-fonts";

fonts.add({
     'Nunito': ['400'],
     'Caesar Dressing': ['400']
});

export const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

    // HEADER
const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Header = styled.header `
    height: 10vh;
    ${Center}
    justify-content: space-evenly;
    border-bottom: 2px solid  #E2E2E2;
    
`

export const H2 = styled.h2`
    font-family: 'Caesar Dressing', sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
`

export const BoxIcons = styled.div`
    width: 12vw;
    ${Center}
    justify-content: space-around;
`

export const BoxIconsMenu = styled.div`
    width: 12vw;
    ${Center}
    justify-content: space-around;    
`

    // MAIN

export const Main = styled.main`
    /* border: solid 1px red; */
    height: 9vh;
    ${Center}
    
`
export const Ul = styled.ul`
    list-style: none;
    ${Center}
`
export const Li = styled.li`
    /* border: solid 1px green; */
    width: 9vw;
    ${Center}
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        color: #cf1d1d;
    }
`

    // CARD

export const BoxCard = styled.section`
    /* border: solid 1px red; */
    height: 125vh;
    ${Center}
    flex-direction: column;
`

export const BoxCardSecond = styled.div`
    /* border: solid 1px blue; */
    ${Center}
    justify-content: space-around;
    width: 69%;
`

export const Card = styled.div`
    /* border: solid 1px green; */
    width: 20vw;
    height: 55vh;
    cursor: pointer;
   
    img{
        width: 100%;
        &:hover{
        border: solid 2px #054de9;
        border-radius: 4px
        }
    }
    p{
        /* border: solid 1px red; */
        ${Center}
        width: 13vw;
        position: relative;
        top: 66%;
        font-family: 'Nunito', sans-serif;
        font-size: 0.9rem;
        color: #ffffffd8;
    }
`

export const H3 = styled.h3`
    /* border: solid 1px red; */
    ${Center}
    width: 15vw;
    position: relative;
    bottom: 26%;
    left: 7%;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    color: white;
`
        // BIG CARD
export const CardTwo = styled.section`
    /* border: solid 1px yellow; */
    img{
        width: 66vw;
        &:hover{
        border: solid 2px #054de9;
        border-radius: 4px
        }
    }
    p{
        /* border: solid 1px red; */
        ${Center}
        width: 14vw;
        position: relative;
        top: 70%;
        font-family: 'Nunito', sans-serif;
        font-size: 0.9rem;
        color: #ffffffd8;
    }
`

export const Title = styled.h3`
    /* border: solid 1px red; */
    /* ${Center} */
    width: 50vw;
    position: relative;
    bottom: 15%;
    left: 3%;
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
`

    //  LOADING WRITING

export const LoadingWritting = styled.div`
    /* border: solid 1px green; */
    width: 15vw;
    ${Center}
    p{
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
        font-weight: bold;
        color: black;
        text-transform: uppercase;
        word-spacing: 3px;
        &:hover{
            color: #cf1d1d;
            cursor: pointer;
        }
    }
`
        // FOOTER
    
export const Footer = styled.footer`
    /* border: solid 1px red; */
    height: 8vh;
    border-top: solid 2px #E2E2E2;
    ${Center}
    justify-content: space-around;
`
export const DivOne = styled.div`
    /* border: solid 1px blue; */
    /* width: 10vw;     */
  h1{
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
  }
  span{
    font-weight: 400;
    &:hover{
        color: #cf1d1d;
        cursor: pointer;
    }
  }
`
export const DivTwo = styled.div`
    /* border: solid 1px blue; */
    width: 30vw;
    ul{
        /* width: 30vw; */
        ${Center}
        justify-content: space-between;
    }
    li{
        /* border: solid  1px rebeccapurple; */
        list-style: none;
        font-family:'Nunito', sans-serif;
        font-weight: bold;
        font-size: 1rem;
        &:hover{
            color: #cf1d1d;
            cursor: pointer;
        }

    }
`