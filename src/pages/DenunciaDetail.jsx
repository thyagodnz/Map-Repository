import React, { useEffect, useState } from 'react';
import { fetchDenunciaById } from '../api/api';
import { useParams } from 'react-router-dom';

const DenunciaDetail = () => {
    const { id } = useParams();
    const [denuncia, setDenuncia] = useState(null);

    useEffect(() => {
        const loadDenuncia = async () => {
            const data = await fetchDenunciaById(id);
            setDenuncia(data);
        };
        loadDenuncia();
    }, [id]);

    if (!denuncia) return <p>Carregando...</p>;

    return (
        <div className='center'>
            <h2>{denuncia.titulo}</h2>
            <p>{denuncia.descricao}</p>
            <p><strong>Localização:</strong> {denuncia.localizacao}</p>
            <p><strong>Data:</strong> {denuncia.data}</p>
            <p><strong>Grau de Importância:</strong> {denuncia.grauDeImportancia}</p>
        </div>
    );
};

export default DenunciaDetail;
