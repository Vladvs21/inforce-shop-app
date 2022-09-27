import styled from 'styled-components'

export const Search = styled.input`
    width: 100%;

    border: none;
    outline: none;

    border-bottom: 1px solid lightgray;

    padding: 10px 20px;
`

export const Sort = styled.div`
    margin-left: 10px;

    button {
        padding: 10px 20px;
        white-space: nowrap;
        border: 1px solid lightgray;
        background: transparent;
        cursor: pointer;
    }

    & > div {
        padding: 0;
        min-width: fit-content;

        ul {
            width: max-content;

            li {
                padding: 10px 20px;
                cursor: pointer;
                transition: all .3s ease-in-out;

                &.uk-active {
                    background: lightgray;
                }

                &:hover {
                    background: lightgray;
                }
            }
        }
    }
`

export const AddProduct = styled.div`
    div {
        border: 1px dashed lightgray;
        border-radius: 10px;
        height: 100%;
        position: relative;
        cursor: pointer;
        min-height: 400px;

        &::after {
            content: '+';
            font-size: 48px;
            font-weight: 200;
            color: lightgray;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
`

export const List = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`

export const ProductCon = styled.div`

    div.img-container {
        position: relative;
        width: 100%;
        aspect-ratio: 2;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        box-shadow: 5px 5px 50px lightgray;

        img {
            min-width: 100%;
            min-height: 100%;
        }
    }

    .product-delete {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: white;
        position: absolute;
        right: 15px;
        top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
            width: 25px;
            height: 25px;
            min-width: unset !important;
            min-height: unset !important;
        }
    }

    p {
        margin: 20px 10% 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.product-name {
            text-align: left;
            color: black;
            font-size: 36px;
            font-weight: 500;
            margin: 30px 50px 0;
            align-items: flex-start;
        }

        img {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }
    }

    .comments__content {
        margin-top: 70px;
    }

    .comments__content__scroller {
        width: 100vw;
        margin-left: calc(50% - 50vw);
        display: flex;
        gap: 36px;
        overflow-x: auto;
        padding-bottom: 45px;

        &::-webkit-scrollbar {
            display: none;
        }

        .comments__content__scroller__card {
            position: relative;
            min-width: 30%;
            background: var(--bg-white);
            box-shadow: 8px 18px 22px 0px rgba(143, 150, 176, 0.12);
            padding: 20px 30px;
            border-radius: 24px;

            &:nth-child(1) {
                margin-left: calc((100vw - 1200px) / 2);
            }

            &:nth-last-child(1) {
                margin-right: calc((100vw - 1200px) / 2);
            }

            .product-delete {
                opacity: 0;
                right: 0;
                top: 0;
                transition: all .3s ease-in-out;
            }

            &:hover {
                .product-delete {
                    opacity: 1;
                }
            }

            &.add-new {
                position: relative;
                border: 1px dashed lightgray;
                box-shadow: none;
                cursor: pointer;
                min-height: 100px;

                &::after {
                    content: '+';
                    font-size: 48px;
                    font-weight: 200;
                    color: lightgray;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            .comments__content__scroller__card__text {
                margin-top: 20px;
                font-family: Open Sans;
                font-size: 16px;
                line-height: 20px;
                color: var(--grey-light);
            }

            .comments__content__scroller__card__meta {
                display: flex;
                align-items: center;

                .comments__content__scroller__card__meta__avatar {
                    width: 88px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                }

                .comments__content__scroller__card__meta__data {
                    margin-left: 30px;

                    .comments__content__scroller__card__meta__data__name {
                        font-family: Open Sans;
                        font-size: 24px;
                        font-weight: 600;
                        line-height: 33px;
                    }

                    .comments__content__scroller__card__meta__data__starsDate {
                        margin-top: 10px;
                        display: flex;
                        align-items: center;
                        gap: 4px;
                        flex-wrap: wrap;

                        img {
                            width: 15px;
                            height: 15px;

                            &:last-of-type {
                                margin-right: 6px;
                            }
                        }
                    }

                    .comments__content__scroller__card__meta__data__date {
                        font-size: 14px;
                        line-height: 21px;
                        text-align: right;
                        color: #A4A4A4;
                    }
                }
            }
        }
    }

    .scrollToExplore {
        position: relative;
        font-size: 18px;
        line-height: 27px;
        text-align: right;
        color: #3C3C3C;
        padding-right: 30px;
        cursor: pointer;

        &::after {
            content: '\\2192';
            position: absolute;
            right: 0;
            top: 0;
            width: 30px;
            transition: all .3s ease-out;
        }

        &:hover::after {
            right: -5px;
        }
    }

    @media screen and (max-width: 1024px) {
        .comments__content__scroller {
            padding-bottom: 25px;
            gap: 22px;

            .comments__content__scroller__card {
                min-width: 80%;
                padding: 35px 25px;

                &:nth-child(1) {
                    margin-left: 15px;
                }

                &:nth-last-child(1) {
                    margin-right: 15px;
                }

                .comments__content__scroller__card__text {
                    margin-top: 25px;
                }

                .comments__content__scroller__card__meta__avatar {
                    width: 48px;
                    height: 48px;
                }

                .comments__content__scroller__card__meta__data__name {
                    font-size: 20px;
                    line-height: 27px;
                }

                .comments__content__scroller__card__meta__data__date {
                    font-size: 12px;
                    line-height: 18px;
                    margin-left: 9px;
                }
            }
        }
    }
`