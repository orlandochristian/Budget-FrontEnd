
import { useState, useEffect } from "react";
import {  Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

function OneTransaction() {
  const [trans, setTrans] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
      .then((response) => {
        
        setTrans(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [id,navigate]);
  
  
  
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
      .then(() => {
        navigate("/transactions");
      });
  };

  
 
  return (
    <article>
      <h3>
        {trans.date ? <span>⭐️</span> : null} {trans.date}
      </h3>
      <h5>
        <span> {trans.item_name} </span>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
      </h5>
      
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default OneTransaction;