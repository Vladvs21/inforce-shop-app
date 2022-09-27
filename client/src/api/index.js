import axios from 'axios';

export const siteUrl = 'http://localhost:3500';

export const getAllData = (dispatch) => {
    productsAPI.getAll(dispatch)
    commentsAPI.getAll(dispatch)
}

export const productsAPI = {
    async getAll(dispatch) {
        await axios.get(`${siteUrl}/products`)
                .then(response => {
                    dispatch({
                        type: 'SET_PRODUCTS',
                        items: response.data
                    })
                })
    },
    async create(item, dispatch) {
        await axios.post(`${siteUrl}/products/create`, item).then(response => {
            if(response.status === 200) {
                productsAPI.getAll(dispatch)
            }
        })
    },
    async update(item, dispatch) {
        await axios.put(`${siteUrl}/products/update`, item).then(response => {
            if(response.status === 200) {
                productsAPI.getAll(dispatch)
            }
        })
    },
    async delete(id, dispatch) {
        await axios.delete(`${siteUrl}/products/delete/${id}`).then(response => {
            if(response.status === 200) {
                productsAPI.getAll(dispatch)
            }
        })
    }
};

export const commentsAPI = {
    async getAll(dispatch) {
        await axios.get(`${siteUrl}/comments`)
                .then(response => {
                    dispatch({
                        type: 'SET_COMMENTS',
                        items: response.data
                    })
                })
    },
    async create(item, dispatch) {
        await axios.post(`${siteUrl}/comments/create`, item).then(response => {
            if(response.status === 200) {
                commentsAPI.getAll(dispatch)
            }
        })
    },
    async delete(id, dispatch) {
        await axios.delete(`${siteUrl}/comments/delete/${id}`)
                .then(response => {
                    if(response.status === 200) {
                        commentsAPI.getAll(dispatch)
                    }
                })
    }
};