import React from 'react'
import { useHistory } from 'react-router-dom'

import './menu-item.styles.scss'

interface Item  {
    title: string
    imageUrl: string
    size: string
    linkUrl: string
}


const MenuItem = ({ imageUrl, size, title, linkUrl}: Item) => {
    const style = {
        backgroundImage: `url(${imageUrl})`
    }
    const history = useHistory()

    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)}>
            <div style={style} className='background-image'></div>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;