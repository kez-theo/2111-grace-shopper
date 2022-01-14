import axios from 'axios'
import history from '../history'

const FETCH_SINGLE_USER = 'FETCH_SINGLE_USER'
const EDIT_USER_DATA = 'EDIT_USER_DATA'

const _getSingleUser = (user) => {
    return {
        type: FETCH_SINGLE_USER,
        user
    }
}

const _updateUserData = (user) => ({
    type: EDIT_USER_DATA,
    user
})

// export const getSingleUser =() => {
//     return async (dispatch) => {
//         const { data: user } = await axios.get('/api/${id}')
//     }
// }

// export const updateUser = (id, history) => {
//     return async 
// }