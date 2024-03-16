import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {

  return (
    <div>
      <div>
        <Link to="/registrarabastecimento">
            <button>Registrar Abastecimento</button>
        </Link>
      </div>
      <div>
        <Link to="/registarveiculo">
            <button>Registrar Veiculo</button>
        </Link>
      </div>
      <div>
        <Link to="/listaabastecimentos">
            <button>Lista Abastecimentos</button>
        </Link>
      </div>
    </div>
  );
}


export default Dashboard;