import React from "react";
//import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchSingleBook } from "../store/singleBook";

class SingleBook extends React.Component {
  componentDidMount() {
    this.props.fetchSingleBook(this.props.match.params.bookId);
  }

  render() {
    const book = this.props.book || {};
    const { title, coverimg } = book;
    console.log(this.props);
    //console.log(this.state)

    return (
      <div>
        <h1>{title}</h1>
        <p>{book.author}</p>
        <img src={coverimg} style={{ width: "220px", height: "350px" }} />
        <p> Description: {book.description}</p>
        <h4>${book.price ? book.price / 100 : 5}</h4>
        <button
          type="button"
          onClick={() => console.log("Come back here and add functionality!")}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

//book has a bought property that once it is bought it is true. (keep in mind for button)

const mapStateToProps = (state) => ({
  book: state.singleBookReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleBook: (bookId) => dispatch(fetchSingleBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);
