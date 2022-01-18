import React from "react";
//import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchSingleBook } from "../store/singleBook";

class SingleBook extends React.Component {
  componentDidMount() {
    this.props.fetchSingleBook(this.props.match.params.bookId);
  }

  render() {
    // when this is undefined the UX could be better.
    const book = this.props.book || {};
    // nit: it's a little inconsistent- you destructure title and
    // coverimg but not author or description or price.
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

const mapStateToProps = (state) => ({
  book: state.singleBookReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleBook: (bookId) => dispatch(fetchSingleBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);
