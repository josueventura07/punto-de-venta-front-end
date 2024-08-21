import { useState } from 'react'
import './App.css'

function App() {
  
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
          <tr className='product-card'>
            <td><img src="https://th.bing.com/th/id/OIP.autUE4mGjl7JVHm5c589kgAAAA?rs=1&pid=ImgDetMain" alt="" /></td>
            <td>Atún</td>
            <td>$85.00</td>
            <td width={"50px"}><img style={{width: '30px'}} src="https://th.bing.com/th/id/OIP.NYGFtH-af57cxQcF3prOjQHaHa?rs=1&pid=ImgDetMain" alt="" /></td>
          </tr>
          <tr  className='product-card'>
            <td width={"100px"}><img src="https://th.bing.com/th/id/OIP.q04MeXVMNhFh3tEG9h6IgQHaHM?rs=1&pid=ImgDetMain" alt="" /></td>
            <td>Salamis Especial Induveca</td>
            <td>$245.00</td>
            <td width={"50px"}><img style={{width: '30px'}} src="https://th.bing.com/th/id/OIP.NYGFtH-af57cxQcF3prOjQHaHa?rs=1&pid=ImgDetMain" alt="" /></td>
          </tr>
          <tr className='product-card'>
            <td><img src="https://th.bing.com/th/id/OIP.autUE4mGjl7JVHm5c589kgAAAA?rs=1&pid=ImgDetMain" alt="" /></td>
            <td>Atún</td>
            <td>$85.00</td>
            <td width={"50px"}><img style={{width: '30px'}} src="https://th.bing.com/th/id/OIP.NYGFtH-af57cxQcF3prOjQHaHa?rs=1&pid=ImgDetMain" alt="" /></td>
          </tr>
          <tr  className='product-card'>
            <td width={"100px"}><img src="https://th.bing.com/th/id/OIP.q04MeXVMNhFh3tEG9h6IgQHaHM?rs=1&pid=ImgDetMain" alt="" /></td>
            <td>Salamis Especial Induveca</td>
            <td>$245.00</td>
            <td width={"50px"}><img style={{width: '30px'}} src="https://th.bing.com/th/id/OIP.NYGFtH-af57cxQcF3prOjQHaHa?rs=1&pid=ImgDetMain" alt="" /></td>
          </tr>
          <tr className='product-card'>
            <td><img src="https://th.bing.com/th/id/OIP.autUE4mGjl7JVHm5c589kgAAAA?rs=1&pid=ImgDetMain" alt="" /></td>
            <td>Atún</td>
            <td>$85.00</td>
            <td width={"50px"}><img style={{width: '30px'}} src="https://th.bing.com/th/id/OIP.NYGFtH-af57cxQcF3prOjQHaHa?rs=1&pid=ImgDetMain" alt="" /></td>
          </tr>
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
          <tr className='order-body-table-rows product-card'>
            <td>2</td>
            <td>Atún</td>
            <td>$85.00</td>
            <td>$170.00</td>
            <td width={"10px"}><img src="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-Download-Image.png" alt="" /></td>
          </tr>
          <tr className='order-body-table-rows product-card'>
            <td>3</td>
            <td>Salamis Especial Induveca</td>
            <td>$245.00</td>
            <td>$735.00</td>
            <td width={"10px"}><img src="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-Download-Image.png" alt="" /></td>
          </tr>
          <tr className='order-body-table-rows product-card'>
            <td>2</td>
            <td>Atún</td>
            <td>$85.00</td>
            <td>$170.00</td>
            <td width={"10px"}><img src="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-Download-Image.png" alt="" /></td>
          </tr>
          <tr className='order-body-table-rows product-card'>
            <td>3</td>
            <td>Salamis Especial Induveca</td>
            <td>$245.00</td>
            <td>$735.00</td>
            <td width={"10px"}><img src="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-Download-Image.png" alt="" /></td>
          </tr>
          <tr className='order-body-table-rows product-card'>
            <td>2</td>
            <td>Atún</td>
            <td>$85.00</td>
            <td>$170.00</td>
            <td width={"10px"}><img src="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-Download-Image.png" alt="" /></td>
          </tr>
          <tr className='order-body-table-rows product-card'>
            <td>3</td>
            <td>Salamis Especial Induveca</td>
            <td>$245.00</td>
            <td>$735.00</td>
            <td width={"10px"}><img src="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-Download-Image.png" alt="" /></td>
          </tr>
        </table>
        </div>
        <div className='order-amount-container'>
          <div className='order-sub-amount'>
            <h3>Sub total</h3> <span>$2715.00</span>
          </div>
          <div className='order-total-amount'>
            <h2>Total orden</h2> <span>$2715.00</span>
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
