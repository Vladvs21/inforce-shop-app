import React, { useMemo, useState } from 'react'
import ListItem from '../components/ListItem/ListItem.jsx'

import { Search, Sort, AddProduct, List } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { productsAPI } from '../api/index.js'
import { sortOptions } from '../assets/other/storage'
import Modal from '../components/Modal/Modal.jsx'
import Field from '../components/Field/Field.jsx'

const ListPage = () => {

    const products = useSelector(state => state.products.items)
    const dispatch = useDispatch()

    const [filter, setFilter] = useState({
        query: '',
        sort: {
            value: 'name',
            type: 1
        }
    })
    const [currentItem, setCurrentItem] = useState(null)
    const [url, setUrl] = useState('')
    const [name, setName] = useState('')
    const [count, setCount] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [productErrors, setProductErrors] = useState({
        url: false,
        name: false,
        count: false,
        width: false,
        height: false,
        weight: false
    })

    const filteredProducts = useMemo(() => {
        return products
                .filter(el => 
                    el.name.includes(filter.query)
                )
                .sort((a, b) => 
                    a[filter.sort.value] > b[filter.sort.value] ? 
                        1 * filter.sort.type
                        : 
                        a[filter.sort.value] < b[filter.sort.value] ? 
                            -1 * filter.sort.type
                            :
                            0
                        
                    )
    }, [filter.query, filter.sort, products])

    const handleAddProduct = () => {
        if(!!url && !!name && !!count && !!width && !!height && !!weight){
            productsAPI.create({
                imageUrl: url,
                name: name,
                count: count,
                size: {
                    width: width,
                    height: height
                },
                weight: weight
            }, dispatch).then(() => {
                setUrl('')
                setName('')
                setCount('')
                setWidth('')
                setHeight('')
                setWeight('')

                document.querySelector('#add-modal button.btn-cancel').click()
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
        <div className='uk-container uk-margin-medium-top uk-margin-large-bottom'>
            <div className='uk-flex'>
                <Search value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} placeholder='Search...' />
                
                <Sort>
                    <button type="button">Sort By</button>

                    <div uk-dropdown="animation: reveal-top; animate-out: true; duration: 700">
                        <ul className="uk-nav uk-dropdown-nav">
                            {
                                sortOptions.map(el => 
                                    <li 
                                        key={el.name} 
                                        className={filter.sort.value === el.value.value && filter.sort.type === el.value.type ? 'uk-active' : ''} 
                                        onClick={() => setFilter({...filter, sort: el.value})}
                                    >
                                        {el.name}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </Sort>
            </div>

            <List>
                {
                    filteredProducts.map(product => 
                        <ListItem key={product.id} product={product} setCurrentItem={setCurrentItem}/>
                    )
                }

                <AddProduct><div data-bs-toggle="modal" data-bs-target="#add-modal" /></AddProduct>
            </List>

            <Modal
                id={'delete-modal'}
                title={currentItem?.name} 
                confirmBtn={'Delete'} 
                confirmAction={() => productsAPI.delete(currentItem?.id, dispatch)} 
                autoClose={true}
            >
                <p>Do you realy want to delete this product?</p>
            </Modal>

            <Modal
                id={'add-modal'}
                title={'Add new Product'} 
                confirmBtn={'Add'} 
                confirmAction={() => handleAddProduct()}
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

        </div>
    )
}

export default ListPage