<table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    {item.quantity}
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  </td>
                  <td>${item.quantity * item.price}</td>
                  <td>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>