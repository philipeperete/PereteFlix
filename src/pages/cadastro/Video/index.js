import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { VideoBase, ButtonBlue, ButtonCategoria } from './styles'

function CadastroVideo() {

    const valoresIniciais = {
        nome: '',
        url: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <VideoBase>
                <h1>Cadastro de Vídeo: {values.nome}</h1>

                <form onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ]);

                    setValues(valoresIniciais)
                }}>

                    <FormField
                        label="Titulo do video"
                        name="titulo"
                        type="text"
                        value={values.titulo}
                        onChange={handleChange}
                    />

                    <FormField
                        label="URL do video"
                        name="url"
                        type="text"
                        value={values.url}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Categoria"
                        name="categoria"
                        value={values.categoria}
                        onChange={handleChange}
                        suggestions={handleChange}
                    />

                    <ButtonBlue> Salvar </ButtonBlue>
                    
                    <Link to="/cadastro/categoria">
                        <ButtonCategoria> Cadastro Categoria </ButtonCategoria>
                    </Link>

                </form>
            </VideoBase>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

        </PageDefault>
    )
}

export default CadastroVideo;