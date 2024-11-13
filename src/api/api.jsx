const API_URL = "http://localhost:8080/api/denuncias";

export const fetchDenuncias = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const fetchDenunciaById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

export const createDenuncia = async (denuncia) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(denuncia)
    });
    return response.json();
};

export const deleteDenuncia = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
