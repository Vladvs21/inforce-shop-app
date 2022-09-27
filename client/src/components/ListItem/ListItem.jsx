import React from 'react'
import { ListItemCont } from './ListItem'
import count_img from '../../assets/img/svg/count.svg'
import size_img from '../../assets/img/svg/size.svg'
import weight_img from '../../assets/img/svg/weight.svg'
import delete_img from '../../assets/img/svg/delete.svg'
import { Link } from 'react-router-dom'

const ListItem = ({ product, setCurrentItem }) => {

    const { id, imageUrl, name, count, size, weight } = product

    return (
        <ListItemCont>
            <Link to={`/${id}`}>
                <img src={imageUrl} alt={name} />
                <div className='uk-padding-small'>
                    <p className='product-name'>{name}</p>
                    <div className="product-info">
                        <div className="uk-flex uk-flex-between uk-margin-left uk-margin-right ">
                            <p uk-tooltip="title: Count">
                                <img src={count_img} alt="Count: " />
                                {count}
                            </p>
                            <p uk-tooltip="title: Size (Width * Height)">
                                <img src={size_img} alt="Size: " />
                                {JSON.parse(size)?.width} * {JSON.parse(size)?.height}
                            </p>
                            <p uk-tooltip="title: Weight">
                                <img src={weight_img} alt="Weight: " />
                                {weight}
                            </p>
                        </div>
                        <p className='product-reference'>Open Product to see more</p>
                    </div>
                </div>
            </Link>

            <div className="product-delete" data-bs-toggle="modal" data-bs-target="#delete-modal" onClick={() => setCurrentItem(product)}>
                <img src={delete_img} alt="Delete" />
            </div>
        </ListItemCont>
    )
}

export default ListItem