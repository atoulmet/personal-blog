import React from 'react'

import { MenuWrapper, Stroke, Hamburger, Cross } from './style'

class BurgerMenu extends React.PureComponent {

    render() {
        const { isOpened, toggleMenu } = this.props

        return (
            <MenuWrapper onClick={toggleMenu}>
                <Hamburger isOpened={isOpened}>
                    <Stroke />
                    <Stroke />
                    <Stroke />
                </Hamburger>

                <Cross isOpened={isOpened}>
                    <Stroke />
                    <Stroke />
                </Cross>
            </MenuWrapper>
        )
    }
}

export default BurgerMenu
