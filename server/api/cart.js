const router = require('express').Router()
const { models: { Cart, User, Book }} = require('../db')

//need associations to complete

//helper funcs:
const getCart = username =>{
    Cart.findAll({
        where: {
            username,
            order_status: 'in cart'
        }
    })
}

//ROUTES:
//new cart:


//go to cart OR (if no cart), new Cart:
router.get('/', async (req, res, next) =>{
//     try{
//         const cart = await getCart(req.user.username);
//         let orderId;
//         if (!cart.length){
//             const newCart = await Cart.create({username: req.user.username})
//             res.status(201).json(newCart)
//             orderId = newCart.orderId
//         } else if (cart.length){
//             orderId = cart[0].dataValues.id
//         }

// //then, LOAD BOOKS:
//         // const books = await Cart.findAll({
//         //     where:{
//         //         order_ID: order_ID
//         //     },
//         //     include: [Book]
//         // })
//         // res.json(books)
//     }catch(err){
//         next(err)
//     }
})



//update cart:
router.put(':id', async (req, res, next) => {
    try {
      const updatingCart = await Cart.findByPk(req.params.id)
      res.send(await updatingCart.update(req.body))
    } catch (error) {
      next(error)
    }
  })




module.exports = router;


module.exports = router;
