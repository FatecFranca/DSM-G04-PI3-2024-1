import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <div>
        <Link to="/registrarabastecimento"> {/* Caminho absoluto */}
          <button>Registrar Abastecimento</button>
        </Link>
      </div>
      <div>
        <Link to="/registarveiculo"> {/* Caminho absoluto */}
          <button>Registrar Veiculo</button>
        </Link>
      </div>
      <div>
        <Link to="/listaabastecimentos"> {/* Caminho absoluto */}
          <button>Lista Abastecimentos</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;