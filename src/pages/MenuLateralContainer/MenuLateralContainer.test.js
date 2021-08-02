import React, {Suspense} from "react";
import {render, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router";

import MenuLateralContainer from "./MenuLateralContainer";
import Dashboard from "../Dashboard/Dashboard";
import CadastroMarca from "../CadastroMarca/CadastroMarca";
import ListagemMarcas from "../ListagemMarca/ListagemMarcas";
import ListagemVeiculos from "../ListagemVeiculos/ListagemVeiculos";
import ROTAS from "../../shared/constants/rotas.const";

jest.mock("../Dashboard/Dashboard");
jest.mock("../CadastroMarca/CadastroMarca");
jest.mock("../ListagemMarca/ListagemMarcas");
jest.mock("../ListagemVeiculos/ListagemVeiculos");

const ComponenteContainer = (rotaInicial) => {
    return render(
        <Suspense fallback={<></>}>
            <MemoryRouter initialEntries={[rotaInicial]}>
                <MenuLateralContainer/>
            </MemoryRouter>
        </Suspense>
    );
};

describe("Menu lateral container testes", () => {
    it("Deve iniciar na página definida como padrão", async () => {
        Dashboard.mockImplementation(() => <div>Dashboard mock</div>);
        const {getByText} = ComponenteContainer(ROTAS.INICIAL);
        const titulo = await waitFor(() => getByText(/Dashboard mock/i));
        expect(titulo).toBeInTheDocument();
    });

    it("Deve navegar para cadastro de marca", async () => {
        CadastroMarca.mockImplementation(() => <div>Cadastro de marca mock</div>);
        const {getByText} = ComponenteContainer(ROTAS.CADASTRO_MARCA);
        const titulo = await waitFor(() => getByText(/Cadastro de marca mock/i));
        expect(titulo).toBeInTheDocument();
    });

    it("Deve navegar para alteração de marca", async () => {
        CadastroMarca.mockImplementation(() => <div>Alteração de marca mock</div>);
        const {getByText} = ComponenteContainer(ROTAS.ALTERACAO_MARCA);
        const titulo = await waitFor(() => getByText(/Alteração de marca mock/i));
        expect(titulo).toBeInTheDocument();
    });

    it("Deve navegar para listagem de marcas", async () => {
        ListagemMarcas.mockImplementation(() => <div>Listagem de marcas mock</div>);
        const {getByText} = ComponenteContainer(ROTAS.MARCAS);
        const titulo = await waitFor(() => getByText(/Listagem de marcas mock/i));
        expect(titulo).toBeInTheDocument();
    });

    it("Deve navegar para listagem de veículos", async () => {
        ListagemVeiculos.mockImplementation(() => <div>Listagem de veículos mock</div>);
        const {getByText} = ComponenteContainer(ROTAS.VEICULOS);
        const titulo = await waitFor(() => getByText(/Listagem de veículos mock/i));
        expect(titulo).toBeInTheDocument();
    });
});
