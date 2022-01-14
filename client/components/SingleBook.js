import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleBook } from '../store/singleBook';

// const book = {
//     id: 2,
//     title: 'halp',
//     author: 'person',
//     description: 'super nice and awesome',
//     price: 12
// }
class SingleBook extends React.Component {

    componentDidMount(){
            this.props.fetchSingleBook(this.props.match.params.bookId)
    }

    render(){
        const book = this.props.book || {};
        const {title, coverimg} = book
        console.log(this.props)
        //console.log(this.state)

        return(
            <div>
                <h1>{title}</h1>
                <p>{book.author}</p>
                <img src = {coverimg} style = {{width: "100px", height: "100px"}} />
                <p>{book.description}</p>
                <h4>${book.price}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    book: state.singleBook
})

const mapDispatchToProps = (dispatch) => ({
    fetchSingleBook: (bookId) => dispatch(fetchSingleBook(bookId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook)