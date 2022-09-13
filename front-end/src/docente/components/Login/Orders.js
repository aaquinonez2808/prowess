import { useNavigate } from "react-router-dom"

const Orders = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className="h2">Orders</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </>
  )
}

export default Orders