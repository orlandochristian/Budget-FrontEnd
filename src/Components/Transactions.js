import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const total = 1550;
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions`).then((res) => {
      setTransactions(res.data);
    })}, []);

  return (
    <div >
      <section>
        <table>
          <thead>
            <tr>
             
             
              <th>Bank Account Total: $</th>
              <th>{total}</th>
            </tr>
          </thead>
          <tbody>

              <tr>
                 <th>Date</th>
                 <th>Item Name</th>
                 <th>Amount</th>
              </tr>
            {transactions.map((trans, index) => {
                
              return <Transaction key={index} trans={trans} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;