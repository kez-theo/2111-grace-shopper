import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStockItem } from "../store/stockItem";

const FormStockItem = () => {
    const dispatch = useDispatch();
    const { book } = useSelector((state) => {
        return {
            book: state.stockItemReducer
        }
    })

    useEffect(() => {
        dispatch(fetchStockItem(book.id))
    }, [])

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

          {/* <h1>{book.title}</h1>
          <p>{book.author}</p>
          <img src={book.coverimg} style={{ width: "220px", height: "350px" }} />
          <p> Description: {book.description}</p>
          <h4>${book.price ? book.price / 100 : 5}</h4>
          <button>
            Update Item
          </button> */}
        </div>
    );
}
export default FormStockItem;
