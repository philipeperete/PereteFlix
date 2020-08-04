import styled from 'styled-components'

export const VideoBase = styled.form`

    width: 100%;
    width: 70%;
    margin: 0 auto;
    font-size: 16px;
    
    justify-content: center;
    text-align: center;
`

export const ButtonBlue = styled.button`

    background-color: rgb(15, 132, 250);
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    padding: 0.75rem 1rem;
    min-width: 98px;
    min-height: 37px;
    width: auto;
    line-height: 1rem;
    box-shadow: none;
    position: relative;
    box-sizing: border-box;
    vertical-align: middle;
    font-weight: 700;
    letter-spacing: 0.025rem;
    border-radius: 7px;
    user-select: none;
    text-align: center;
    border: medium none;
    -moz-appearance: button;
    text-transform: none;
    overflow: visible;
    margin-right: 14px;
    
    &:hover,
    &:focus {
        opacity: .6;
    }
`

export const ButtonCategoria = styled.button`

    color: black;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    padding: 0.75rem 1rem;
    min-width: 98px;
    min-height: 37px;
    width: auto;
    line-height: 1rem;
    box-shadow: none;
    position: relative;
    box-sizing: border-box;
    vertical-align: middle;
    font-weight: 700;
    letter-spacing: 0.025rem;
    border-radius: 7px;
    user-select: none;
    text-align: center;
    border: medium none;
    -moz-appearance: button;
    text-transform: none;
    overflow: visible;
    
    &:hover,
    &:focus {
        opacity: .6;
        color: red;
    }
`

export const formCategoria = styled.button`
`