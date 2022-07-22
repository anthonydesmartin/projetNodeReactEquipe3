import { useApiEffect } from "../../hook/useApi";
import StockRow from "./StockRow";
import { useNavigate } from "react-router-dom";

const StocksList = () => {
  const api_path = "/stocks";
  // Custom hook useApi
  const [stocks, setStocks /*, pending, error*/] = useApiEffect(api_path);
  const navigate = useNavigate();

  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Stocks</h2>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col">Véhicule</th>
                <th scope="col">Modèle</th>
                <th scope="col">Marque</th>
                <th scope="col">Quantité</th>
                <th scope="col">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => navigate(`${api_path}/add`)}
                  >
                    Créer
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock, index) => {
                return (
                  <StockRow
                    key={index}
                    stock={stock}
                    index={index}
                    stocks={stocks}
                    setStocks={setStocks}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StocksList;
