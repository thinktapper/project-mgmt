import { FaTrash } from 'react-icons/fa'

export default function ClientRow() {
  return (
      <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
          <button className='btn btn-danger btn-sm' onClick={deleteClient}>
            <FaTrash />
          </button>
        </td>
      </tr>
  )
}