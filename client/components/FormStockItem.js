import React from "react"
import { connect } from "react-redux"
import { fetchStockItem, updateStock } from "../store/stockItem";


class FormStockItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchStockItem(this.props.match.params.stockId);
    console.log(this.props.stockItem)
  }

  componentWillUnmount() {
    this.props.clearStockItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stockItem.id !== this.props.stockItem.id) {
      this.setState({
        title: this.props.stockItem.title || '',
        price: this.props.stockItem.price || ''
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateStock({...this.props.stockItem, ...this.state})
  }
    
  render() {
    const { title, author, description, price } = this.state
    
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <h2>Edit a Book</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Edit Book Title</label>
          <input name="title" onChange={handleChange} value={title} />

          <label htmlFor="price">Edit Price</label>
          <input name="price" onChange={handleChange} value={price} />

          <button type='submit'>Update Book</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ stockItem }) => ({
  stockItem
})

const mapDispatch = (dispatch, { history}) => ({
  fetchStockItem: (stockId) => dispatch(fetchStockItem(stockId)),
  updateStock: (stockItem) => dispatch(updateStock(stockItem, history)),
  clearStockItem: () => dispatch(fetchStockItem({}))
})
export default connect(mapStateToProps, mapDispatch)(FormStockItem);
