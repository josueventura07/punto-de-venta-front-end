import { useState } from 'react'
import './App.css'

function App() {
  
  const [productsList, setProductsList] = useState(
    [
      {
        id: 1,
        img: "https://th.bing.com/th/id/OIP.autUE4mGjl7JVHm5c589kgAAAA?rs=1&pid=ImgDetMain",
        description: "Atun",
        price: 85.00
      },
      {
        id: 2,
        img: "https://th.bing.com/th/id/OIP.q04MeXVMNhFh3tEG9h6IgQHaHM?rs=1&pid=ImgDetMain",
        description: "Salamis Especial Induveca",
        price: 245.00
      },
      {
        id: 3,
        img: "https://th.bing.com/th/id/R.74c65ca493c887b0a2e8e4ecdf96cac3?rik=Hw%2bpGbKchLAFwg&pid=ImgRaw&r=0",
        description: "Queso Geo",
        price: 105.00
      },
      {
        id: 4,
        img: "https://th.bing.com/th/id/OIP.lK7PojMvin1fy9hN5JrZQwHaHa?rs=1&pid=ImgDetMain",
        description: "Saco de arroz pimco de 30 libras",
        price: 525.00
      },
      {
        id: 5,
        img: "https://149562642.v2.pressablecdn.com/wp-content/uploads/Funda-arroz-La-Garza.jpg",
        description: "Saco de arroz la garza de 50 libras",
        price: 735.00
      },
      {
        id: 6,
        img: "https://d3d4s9jdu9j4x0.cloudfront.net/wp-content/uploads/2017/04/26132433/don_pedro_salami_almirante.jpg",
        description: "Salamis don pedro",
        price: 650.00
      },
      {
        id: 7,
        img: "https://th.bing.com/th/id/OIP.aBllRIjBxdX1UWzrhv6jhQHaHa?rs=1&pid=ImgDetMain",
        description: "Papel higienico Domino",
        price: 18.00
      },
      {
        id: 8,
        img: "https://th.bing.com/th/id/R.7c2270cf3683e29ffc12c4d317290fbe?rik=MFxgqejwWvx98w&pid=ImgRaw&r=0",
        description: "Detergente brillante",
        price: 75.00
      },
      {
        id: 9,
        img: "https://thumbs.dreamstime.com/z/marcas-detergentes-que-se-lavan-globales-84822558.jpg",
        description: "Combo Especial para lavar tu ropa",
        price: 568.00
      },
      {
        id: 10,
        img: "https://th.bing.com/th/id/OIP.NZfeoIQ2umHTDhEg_OfhvAHaHa?rs=1&pid=ImgDetMain",
        description: "Detergente brilhante",
        price: 95.00
      }
    ]
  )

  const [productsCart, setProductsCart] = useState(
    [
      {
        id: 1,
        quantity: 2,
        description: "Atun",
        price: 85.00
      },
      {
        id: 2,
        quantity: 1,
        description: "Salamis Especial Induveca",
        price: 245.00
      }
    ]
  )

  return (
    <>
    <div className='navbar'>
      <p>menu</p>
      <p>login</p>
    </div>
    <div className='body-container'>
      <div className='product_list_container'>
        <div className='search-container'>
          <button className='search-buttons'>B</button>
          <input type="text" placeholder=' Buscar productos'/>
          <button className='search-buttons'>R</button>
        </div>
        <div className='products-filter-btn'>
          <button>Todos</button>
          <button>Destacados</button>
          <button>En venta</button>
        </div>
        <div className='products-table-container'>
        <table style={{borderCollapse: 'collapse'}} width={"100%"} >
          <tr className='products-table-header'>
            <th width={"50px"}>Imagen</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
          {
            productsList.map(product => (
              <tr key={product.id} className='product-card'>  
                <td><img src={product.img} alt="" /></td>
                <td>{product.description}</td>
                <td>${parseFloat(product.price).toFixed(2)}</td>
                <td><img style={{width: '30px'}} src="https://th.bing.com/th/id/OIP.NYGFtH-af57cxQcF3prOjQHaHa?rs=1&pid=ImgDetMain" alt="" /></td>
              </tr >
            ))
          }
        </table>
        </div>
      </div>

      <div className='order_container'>
        <div className='order-table-container'>
        <table style={{borderCollapse: 'collapse'}} width={"100%"} >
          <tr className='order-table-header' style={{height: '50px'}}>
            <th width={"20px"}>Qty</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Acción</th>
          </tr>
          {
            productsCart.map(product => (
              <tr key={product.id} className='order-body-table-rows product-card'>  
                <td>{parseFloat(product.quantity)}</td>
                <td>{product.description}</td>
                <td>${parseFloat(product.price).toFixed(2)}</td>
                <td>${parseFloat(product.price * product.quantity).toFixed(2)}</td>
                <td><img src="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-Download-Image.png" alt="" /></td>
              </tr >
            ))
          }
        </table>
        </div>
        <div className='order-amount-container'>
          <div className='order-sub-amount'>
            <h3>Sub total</h3> <span>${productsCart.reduce((acumulator,product) => { return acumulator + (product.price * product.quantity)},0).toFixed(2)}</span>
          </div>
          <div className='order-total-amount'>
            <h2>Total orden</h2> <span>${productsCart.reduce((acumulator,product) => { return acumulator + (product.price * product.quantity)},0).toFixed(2)}</span>
          </div>
        </div>
        <div className='order-input-container'>
          <input type="text" placeholder='Nombre Cliente' />
        </div>
        <div className='order-options-container'>
          <div>
            <button>Cancelar</button>
          </div>
          <div>
            <button>Cuota</button>
            <button>Envío</button>
            <button>Nota</button>
            <button>Finalizar</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
