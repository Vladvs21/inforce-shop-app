import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { ProductCon } from './style'

import count_img from '../assets/img/svg/count.svg'
import size_img from '../assets/img/svg/size.svg'
import weight_img from '../assets/img/svg/weight.svg'
import edit_img from '../assets/img/svg/edit.svg'
import delete_img from '../assets/img/svg/delete.svg'
import back_img from '../assets/img/svg/back.svg'

import photo from '../assets/img/svg/comment_photo.svg'
import star from '../assets/img/svg/star.svg'
import starActive from '../assets/img/svg/star-active.svg'
import { commentsAPI, productsAPI } from '../api'
import Modal from '../components/Modal/Modal'
import Field from '../components/Field/Field'

const ProductPage = () => {

    const { id } = useParams()

    const products = useSelector(state => state.products.items)
    const comments = useSelector(state => state.comments.items)

    const dispatch = useDispatch()

    const [deleteComment, setDeleteComment] = useState(null)

    const [url, setUrl] = useState(null)
    const [name, setName] = useState(null)
    const [count, setCount] = useState(null)
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [productErrors, setProductErrors] = useState({
        url: false,
        name: false,
        count: false,
        width: false,
        height: false,
        weight: false
    })

    const [desc, setDesc] = useState('')
    const [commentErrors, setCommentErrors] = useState({desc: false})

    const product = useMemo(() => {
        const res = products?.find(el => +el.id === +id) || {}
        const resLength = Object.keys(res).length

        if(url === null && !!resLength) setUrl(res.imageUrl)
        if(name === null && !!resLength) setName(res.name)
        if(count === null && !!resLength) setCount(res.count)
        if(width === null && !!resLength) setWidth(JSON.parse(res.size).width)
        if(height === null && !!resLength) setHeight(JSON.parse(res.size).height)
        if(weight === null && !!resLength) setWeight(res.weight)
  
        return res
    }, [products])

    const handleAddComment = () => {
        if(!!desc){
            commentsAPI.create({
                productId: id, 
                description: desc, 
                date: new Date()
            }, dispatch).then(() => {
                setDesc('')
                document.querySelector('#add-comment button.btn-cancel').click()
            })
        }else {
            setCommentErrors({desc: true})
        }
    }

    const handleEditProduct = () => {
        if(!!url && !!name && !!count && !!width && !!height && !!weight){
            productsAPI.update({
                id: id,
                imageUrl: url,
                name: name,
                count: count,
                size: {
                    width: width,
                    height: height
                },
                weight: weight
            }, dispatch).then(() => {
                document.querySelector('#edit-modal button.btn-cancel').click()
            })
        }else {
            setProductErrors({
                url: !url,
                name: !name,
                count: !count,
                width: !width,
                height: !height,
                weight: !weight
            })
        }
    }

    return (
        <div className="uk-container uk-margin-top uk-margin-large-bottom">
            <ProductCon>
                <div className="img-container">
                    <Link to='/' className="product-delete" style={{left: 15, right: 'unset'}}>
                        <img src={back_img} alt="Back" />
                    </Link>

                    <img src={product.imageUrl} alt="Image" />

                    <div className="product-delete" data-bs-toggle="modal" data-bs-target="#edit-modal">
                        <img src={edit_img} alt="Delete" />
                    </div>
                </div>

                <p className='product-name'>{product.name}</p>

                <div className="uk-flex uk-flex-center">
                    <p uk-tooltip="title: Count">
                        <img src={count_img} alt="Count: " />
                        {product.count}
                    </p>
                    <p uk-tooltip="title: Size (Width * Height)">
                        <img src={size_img} alt="Size: " />
                        {!!product.size && JSON.parse(product.size)?.width} * {!!product.size && JSON.parse(product.size)?.height}
                    </p>
                    <p uk-tooltip="title: Weight">
                        <img src={weight_img} alt="Weight: " />
                        {product.weight}
                    </p>
                </div>

                <div className="comments__content">
                    <div className="comments__content__scroller">
                        {
                            comments.filter(comment => +comment.productId === +product.id).map(comment => 
                                <div id={comment.id} className="comments__content__scroller__card">
                                    <div className="comments__content__scroller__card__meta">
                                        <img src={photo} alt="photo" className="comments__content__scroller__card__meta__avatar"/>

                                        <div className="comments__content__scroller__card__meta__data">
                                            <div className="comments__content__scroller__card__meta__data__name">Agnes Remi</div>

                                            <div className="comments__content__scroller__card__meta__data__starsDate">
                                                <img src={starActive} alt="activeStar"/>
                                                <img src={starActive} alt="activeStar"/>
                                                <img src={starActive} alt="activeStar"/>
                                                <img src={starActive} alt="activeStar"/>
                                                <img src={star} alt="star"/>

                                                <div className="comments__content__scroller__card__meta__data__date">{new Date(comment.date).toDateString()}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comments__content__scroller__card__text">{comment.description}</div>

                                    <div className="product-delete" data-bs-toggle="modal" data-bs-target="#delete-modal" onClick={() => setDeleteComment(comment.id)}>
                                        <img src={delete_img} alt="Delete" />
                                    </div>
                                </div>    
                            )
                        }

                        <div className="comments__content__scroller__card add-new" data-bs-toggle="modal" data-bs-target="#add-comment" />

                    </div>

                    <div className="scrollToExplore">Scroll to explore </div>
                </div>

            </ProductCon>

            <Modal
                id={'delete-modal'}
                title={`Comment for "${product.name}"`} 
                confirmBtn={'Delete'} 
                confirmAction={() => commentsAPI.delete(deleteComment, dispatch)} 
                autoClose={true}
            >
                <p>Do you realy want to delete this comment?</p>
            </Modal>

            <Modal
                id={'edit-modal'}
                title={'Edit Product'} 
                confirmBtn={'Save'} 
                confirmAction={() => handleEditProduct()}
            >
                {
                    [
                        {
                            val: url,
                            setVal: setUrl,
                            type: 'text',
                            name: 'Image Url',
                            placeholder: 'Image Url'
                        },
                        {
                            val: name,
                            setVal: setName,
                            type: 'text',
                            name: 'name',
                            placeholder: 'Name'
                        },
                        {
                            val: count,
                            setVal: setCount,
                            type: 'number',
                            name: 'count',
                            placeholder: 'Count'
                        },
                        {
                            val: width,
                            setVal: setWidth,
                            type: 'number',
                            name: 'width',
                            placeholder: 'Width'
                        },
                        {
                            val: height,
                            setVal: setHeight,
                            type: 'number',
                            name: 'height',
                            placeholder: 'Height'
                        },
                        {
                            val: weight,
                            setVal: setWeight,
                            type: 'text',
                            name: 'weight',
                            placeholder: 'Weight'
                        },
                    ].map(el => 
                        <Field 
                            {...el} 
                            errors={productErrors}
                            setErrors={setProductErrors}
                        />
                    )
                }
            </Modal>

            <Modal
                id={'add-comment'}
                title={'Add Comment'} 
                confirmBtn={'Add'} 
                confirmAction={() => handleAddComment()}
            >
                <Field
                    val={desc}
                    setVal={setDesc}
                    type={'text'}
                    name={'desc'}
                    placeholder={'Description'}
                    errors={commentErrors}
                    setErrors={setCommentErrors}
                />
            </Modal>
        </div>
    )
}

export default ProductPage