import React from "react";
import * as axios from "axios";
import {Gallery, GalleryImage} from "react-gesture-gallery";
import './ItemInfo.css'
import locationIcon from './../icons/location_4.svg'
import sellerIcon from './../icons/profile_cr.svg'

const ItemInfo = (props) => {


    const [index, setIndex] = React.useState(0);

    if (!props.itemInfo) {
        return (
            <div>

            </div>
        )
    }
    return (
        <div className="itemInfo">
            <div className='itemInfoTitle'>
                {props.itemInfo.title}
            </div>
            <div className="itemInfoGallery" style={{ background: "white", width: "100%", height: "50vh"}}>
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
            <div className='itemInfoAddress'>
                <img src={locationIcon} height="30px"/>
                <p />
                {props.itemInfo.address}
            </div>

            <div className='itemInfoPrice'>
                {props.itemInfo.price}
            </div>
            <div className='itemInfoDescription'>
                {props.itemInfo.description}
            </div>
            <div className='itemInfoSeller'>
                <img src={sellerIcon} height="30px"/>
                <p />
                {props.itemInfo.sellerName}
            </div>
        </div>
    );
}


export default ItemInfo
/*
const ItemPage = () => {
    return <div>    Item page</div>
}

export default ItemPage

 */