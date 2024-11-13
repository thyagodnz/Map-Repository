import React, { useEffect, useState } from 'react';
import { fetchDenuncias, deleteDenuncia } from '../api/api';
import { Link } from 'react-router-dom';

const ViewDenuncias = () => {
    const [denuncias, setDenuncias] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [denunciaDetalhada, setDenunciaDetalhada] = useState(null);

    useEffect(() => {
        const loadDenuncias = async () => {
            const data = await fetchDenuncias();
            setDenuncias(data);
        };
        loadDenuncias();
    }, []);

    const handleDelete = async (id) => {
        await deleteDenuncia(id);
        setDenuncias(denuncias.filter((denuncia) => denuncia.id !== id));
    };

    const handleViewDetails = (denuncia) => {
        setDenunciaDetalhada(denuncia);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setDenunciaDetalhada(null);
    };

    return (
        <div className='center'>
            <h2>Todas as Denúncias</h2>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {denuncias.map((denuncia) => (
                        <tr key={denuncia.id}>
                            <td>{denuncia.titulo}</td>
                            <td>{denuncia.data}</td>
                            <td>
                                <button onClick={() => handleViewDetails(denuncia)}>Ver Detalhes</button>
                                <button onClick={() => handleDelete(denuncia.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPopup && denunciaDetalhada && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>{denunciaDetalhada.titulo}</h3>
                        <p>{denunciaDetalhada.descricao}</p>
                        <p><strong>Localização:</strong> {denunciaDetalhada.localizacao}</p>
                        <p><strong>Data:</strong> {denunciaDetalhada.data}</p>
                        <p><strong>Grau de Importância:</strong> {denunciaDetalhada.grauImportancia}</p>
                        <button onClick={handleClosePopup}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewDenuncias;
