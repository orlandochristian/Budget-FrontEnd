import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function TransactionEdit() {
  let { id } = useParams();
 console.log('Aqui',id)
  
 
 const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });
  let navigate = useNavigate();
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

//   const handleCheckboxChange = () => {
//     setBook({ ...bookmark, isFavorite: !bookmark.isFavorite });
//   };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
      .then((response) => {
        console.log(response.data)
        setTransaction(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/transactions/${id}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${id}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Type of Transaction:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="amount">Transaction Amount:</label>
        <input
          id="amount"
          type="text"
          required
          value={transaction.amount}
          onChange={handleTextChange}
        />
        <label htmlFor="date">Transaction Date:</label>
        <input
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          onChange={handleTextChange}
        />
        <label htmlFor="from">Transaction From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
          
        />
        <label htmlFor="category">Transaction Category:</label>
        <textarea
          id="category"
          name="category"
          value={transaction.category}
          onChange={handleTextChange}
          
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${id}`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default TransactionEdit;