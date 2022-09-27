import styled from 'styled-components'

export const ListItemCont = styled.div`
    position: relative;
    box-shadow: none;
    cursor: pointer;
    transition: all .3s ease-in-out;
    border-radius: 10px;

    div.product-info {
        max-height: 0;
        transition: all .6s .6s ease-in-out;
        overflow: hidden;
    }
    
    & > a > img {
        width: 100%;
        aspect-ratio: 1;
        border-radius: 10px;
        transition: all .3s ease-in-out;
    }

    .product-delete {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: white;
        position: absolute;
        right: -15px;
        top: -15px;
        opacity: 0;
        transition: all .3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
            width: 25px;
            height: 25px;
        }
    }

    &:hover {
        box-shadow: 5px 5px 50px lightgray;

        div.product-info {
            max-height: 100px;
        transition: all .6s ease-in-out;
        }

        & > a > img {
            width: calc(100% - 20px);
            margin: 10px;
        }

        .product-delete {
            opacity: 1;
        }
    }

    p {
        width: fit-content;
        margin: 0 0 10px 0;
        color: black;
        font-weight: 400;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none !important;

        &.product-name {
            width: 100%;
            font-size: 24px;
            font-weight: 500;
            text-align: center;
        }

        &.product-reference {
            width: 100%;
            text-align: center;
            color: lightgray;
        }

        img {
            width: 30px;
            height: 30px;
            margin-bottom: 10px;
        }
    }
`