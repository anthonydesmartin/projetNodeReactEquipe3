import { useEffect, useState } from 'react';
import axios from 'axios';

const InvoiceView = () => {
  const [invoice, setInvoice] = useState([]);
  const api_path = "/invoices/1";
  const date_created_invoice = new Date(invoice.createdAt);
  // const date_created_order = new Date(invoice.order.createdAt);
  // const customer = invoice.order.quote.customer;
  // const vehicle = invoice.order.quote.vehicle;

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then(function (response) {
        // handle success
        console.log("response.data =>", response.data);
        setInvoice(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);


  return (
    <div className="content">
      <div className="container">
        <h1 className="mb-5">Informations sur la facture</h1>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col" colSpan="2">Détails</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">N° de facture</th>
              <td>{invoice.id}</td>
            </tr>
            <tr>
              <th scope="row">Date de la facture</th>
              <td>{date_created_invoice.toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col" colSpan="2">Informations sur la commande</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">N° de la commande</th>
              {/* <td>{invoice.order.id}</td> */}
            </tr>
            <tr>
              <th scope="row">Date de la commande</th>
              {/* <td>{date_created_order.toLocaleDateString()}</td> */}
            </tr>
            <tr>
              <th scope="row">Créateur du devis</th>
              {/* <td>{invoice.order.quote.creator.lastname} {invoice.order.quote.creator.firstname}</td> */}
            </tr>
          </tbody>
        </table>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="row" colSpan="2">Informations Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">Nom et Prénom</th>
              {/* <td>{customer.lastname} {customer.firstname}</td> */}
            </tr>
            <tr>
              <th scope="row">Adresse</th>
              {/* <td>{customer.address}, {customer.zip} {customer.city}</td> */}
            </tr>
            <tr>
              <th scope="row">Téléphone</th>
              {/* <td>{customer.mobile || customer.phone}</td> */}
            </tr>
          </tbody>
        </table>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="row" colSpan="2">Informations Véhicule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">Modèle</th>
              {/* <td>{vehicle.model}</td> */}
            </tr>
            <tr>
              <th scope="row">Marque</th>
              {/* <td>{vehicle.manufacturer}</td> */}
            </tr>
            <tr>
              <th scope="row">Type</th>
              {/* <td>{vehicle.type}</td> */}
            </tr>
            <tr>
              <th scope="row">Description</th>
              {/* <td>{vehicle.description}</td> */}
            </tr>
            <tr>
              <th scope="row">Prix</th>
              {/* <td>{vehicle.price} €</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceView;