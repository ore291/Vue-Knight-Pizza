import {createStore} from 'vuex'
import product1 from '@/assets/img/product-1.jpg';
import product2 from '@/assets/img/product-2.jpg';
import product3 from '@/assets/img/product-3.jpg';
import sweet1 from '@/assets/img/sweet3.jpg';
import sweet2 from '@/assets/img/sweet-2.jpg';
import sweet3 from '@/assets/img/sweet-3.jpg';


const store = createStore({

    state () {
        return{
            isClosed: true,
            pizza : [
                {
                  img: product1,
                  alt: 'Pizza',
                  name: 'Supreme Pizza',
                  desc:
                    'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
                  price: '#1900.99',
                  button: 'Add to Cart'
                },
                {
                  img: product2,
                  alt: 'Pizza',
                  name: 'Hawaiian Paradise',
                  desc:
                    ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
                  price: '#1600.99',
                  button: 'Add to Cart'
                },
                {
                  img: product3,
                  alt: 'Pizza',
                  name: 'Veggie Overload',
                  desc:
                    ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
                  price: '#1400.99',
                  button: 'Add to Cart'
                }
              ],
              
              sweets : [
                {
                  img: sweet2,
                  alt: 'Donuts',
                  name: 'Doughlicious',
                  desc:
                    'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
                  price: '#900.99',
                  button: 'Add to Cart'
                },
                {
                  img: sweet3,
                  alt: 'Ice Cream',
                  name: 'Caramel Wonder',
                  desc:
                    'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
                  price: '#1200.99',
                  button: 'Add to Cart'
                },
                {
                  img: sweet1,
                  alt: 'Brownie',
                  name: 'Brownie Bunch',
                  desc:
                    'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
                  price: '#900.99',
                  button: 'Add to Cart'
                }
              ]
              
        }
    },
    getters:{
        sideBar(state){
            return state.isClosed
        },
        pizza(state){
          return state.pizza
        },
        sweets(state){
          return state.sweets
        }
    },
    mutations: {
        toggleSidebar(state){
            state.isClosed = !state.isClosed
        }
    }

})



export default store