import React from "react"
import { connect } from "react-redux"
import { updateStock } from "../store/stockItem";


class FormStockItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateStock({...this.props.stockItem, ...this.state})
  }
    

  render() {
    return (
      <div>
        <h1>Edit a Book</h1>
        <form>
          <label htmlFor="title">Edit Book Title</label>
          <input name="title" value={title} />

          <label htmlFor="series">Edit Series</label>
          <input name="series" value={series} />

          <label htmlFor="author">Edit Author</label>
          <input name="author" value={author} />

          <label htmlFor="description">Edit Description</label>
          <input name="description" value={description} />

          <label htmlFor="language">Edit Langauge</label>
          <input name="language" value={language} />

          <label htmlFor="isbn">Edit Isbn</label>
          <input name="isbn" value={isbn} />

          <label htmlFor="genres">Edit Genres</label>
          <input name="genres" value={genres} />

          <label htmlFor="bookformat">Edit Book Format</label>
          <input name="bookformat" value={bookformat} />

          <label htmlFor="pages">Edit Page Numbers</label>
          <input name="pages" value={pages} />

          <label htmlFor="publisher">Edit Publisher</label>
          <input name="publisher" value={publisher} />

          <label htmlFor="coverimg">Edit Cover Image</label>
          <input name="coverimg" value={coverimg} />

          <label htmlFor="price">Edit Price</label>
          <input name="price" value={price} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ book }) => ({
  book
})

const mapDispatch = (dispatch, { history}) => ({
  updateStock: (stockItem) => dispatch(updateStock(stockItem, history))
})
export default connect(mapStateToProps, mapDispatch)(FormStockItem);
