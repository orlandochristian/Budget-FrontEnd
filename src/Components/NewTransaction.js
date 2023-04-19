import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewTransaction() {
  const [transaction, setTransaction] = useState({
    transactionId: 0,
    item_name: "",
    name: 0,
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

//   const handleCheckboxChange = () => {
//     setTransaction({ ...transaction, from: !transaction.from });
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/transactions`, transaction) 
      .then(() => {
        navigate("/transactions"); 
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="New">
       <form onSubmit={handleSubmit}>
        <label htmlFor="item_name"><strong>Item Name:</strong></label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          required
        />

        <label htmlFor="amount"><strong>Amount:</strong></label>
        <input
          id="amount"
          type="number"
          required
          value={transaction.amount}
          onChange={handleTextChange}
        />
    
        <label htmlFor="date"><strong>Date:</strong></label>
        <input
          id="date"
          name="date"
          type="number"
          value={transaction.date}
          onChange={handleTextChange}
        />

         <label htmlFor="from"><strong>From:</strong></label>
        <input
          id="from"
          name="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}          
        />

        <label htmlFor="category"><strong>Category:</strong></label>
            <input
             id="category"
             name="category"
            type="text"
            value={transaction.category}
            onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewTransaction;