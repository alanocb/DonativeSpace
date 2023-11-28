async function requestOrganizacoes() {
    try {
        const response = await fetch('/api/organizacao/');
        const result = await response.json();
        return {
            successful: response.status === 200,
            unauthenticated: response.status === 401,
            organizacoes: result
        };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}

async function requestAddOrganizacao(org_name, org_endereco, org_telefone, org_img) {
    try {
        const response = await fetch('/api/organizacoes', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                org_name: org_name,
                org_endereco: org_endereco,
                org_telefone: org_telefone,
                org_telefone: org_img
            })
        });
        return { successful: response.status === 200 };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}

