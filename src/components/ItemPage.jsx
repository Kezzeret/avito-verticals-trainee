import React from "react";
import * as axios from "axios";
import {Gallery, GalleryImage} from "react-gesture-gallery";
import './ItemPage.css'

const ItemPage = (props) => {


    const [index, setIndex] = React.useState(0);

    if (!props.itemInfo) {
        return (
            <div>

            </div>
        )
    }
    return (
        <div>
            <div style={{ background: "black", width: "50vw", height: "50vh"}}>
                <Gallery
                    index={index}
                    onRequestChange={i => {
                        setIndex(i);
                    }}
                >
                    {props.itemInfo.images.map(img => (
                        <GalleryImage objectFit="contain" key={img} src={img} />
                    ))}
                </Gallery>
            </div>
            <div className='address'>
                {props.itemInfo.address}
            </div>
            <div className='title'>
                {props.itemInfo.title}
            </div>
            <div className='price'>
                {props.itemInfo.price}
            </div>
            <div className='description'>
                {props.itemInfo.description}
            </div>
            <div className='seller'>

            </div>
        </div>
    );
}


export default ItemPage
/*
const ItemPage = () => {
    return <div>    Item page</div>
}

export default ItemPage

 */