import styled from 'styled-components'

import {colors} from '../Common'

export const MenuWrapper = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    box-sizing: border-box;
`

export const Stroke = styled.span`
    display: block;
    background: ${colors.black};
    border-radius: 2px;
`

export const Hamburger = styled.div`
    transition:.25s ease-in-out;
    position: absolute;
    & span {
        transition:.25s ease-in-out;
        width: ${({isOpened}) => !isOpened ? '40px' : '0'};
        height: 4px;
        top: 24px;
        left: 20px;
        margin: 7px 0;
        &:nth-child(1){
            transition-delay: ${({isOpened}) => !isOpened ? '.5s' : '0s'};
        }
        &:nth-child(2){
            transition-delay: ${({isOpened}) => !isOpened ? '.625s' : '.125s'};
        }
        &:nth-child(3){
            transition-delay: ${({isOpened}) => !isOpened ? '.75s' : '.25s'};
        }
    }
`

export const Cross = styled.div`
    transition:.25s ease-in-out;
    position: absolute;
    height: 100%;
    width: 100%;
    transform: rotate(45deg);
    span {
        transition:.25s ease-in-out;
        &:nth-child(1) {
            height: ${({isOpened}) => isOpened ? '100%' : '0%'};
            width: 4px;
            position:absolute;
            left: 18px;
            transition-delay: ${({isOpened}) => !isOpened ? '0' : '.625s'};
        }
        &:nth-child(2) {
            width: ${({isOpened}) => isOpened ? '100%' : '0%'};
            height: 4px;
            position:absolute;
            top: 18px;
            transition-delay: ${({isOpened}) => !isOpened ? '.25s' : '.375s'};
        }
    }   
`