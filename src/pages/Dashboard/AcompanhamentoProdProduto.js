import React from "react";

function AcompanhamentoProdProduto() {
  return (
    <>
      <div className="paddingContainer">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="tituloInterno">
              <h2 className="titulosPrincipais">
                Acompanhamento de Produto para Produção
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div Style="display: flex; justify-content: space-between; margin: 50px 0 20px 0;">
            <div Style="display:flex">
              <div Style="background: red; width: 120px; height: 20px"></div>
              <div Style="padding-left: 5px">Ordem Atrasada</div>
            </div>
            <div Style="display:flex">
              <div Style="background: green; width: 120px; height: 20px"></div>
              <div Style="padding-left: 5px">Ordem Finalizada</div>
            </div>
            <div Style="display:flex">
              <div Style="border: 1px solid;width: 120px; height: 20px"></div>
              <div Style="padding-left: 5px">Ordem Aberta</div>
            </div>
            <div Style="display:flex">
              <div Style="background: yellow; width: 120px; height: 20px"></div>
              <div Style="padding-left: 5px">Ordem com prazo</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table
              class="table table-bordered"
              Style="border: 1px solid!important"
            >
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col" colspan="14" className="text-center">
                    Cabina
                  </th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="tituloTabelaAcompanhamento">
                  <td></td>
                  <td></td>
                  <td colspan="5">SALVAGNINI</td>
                  <td colspan="2">OUTRO</td>
                  <td colspan="4">LASER/DOBRADEIRA</td>
                  <td colspan="4">SALVAGNINI</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td className="textoVertical">LONGARINA</td>
                  <td className="textoVertical">PAINEL CH.51598498</td>
                  <td className="textoVertical">PAINEL CH.51598498</td>
                  <td className="textoVertical">PAINEL CINZA</td>
                  <td className="textoVertical">PAINEL GALV159</td>
                  <td className="textoVertical">PROTECTION 0,8MM</td>
                  <td className="textoVertical">RODAPÉ</td>
                  <td className="textoVertical">FRONTAL INOX 2,0</td>
                  <td className="textoVertical">PAINEL 4,0</td>
                  <td className="textoVertical">INOX 2,0</td>
                  <td className="textoVertical">INOX 8,0</td>
                  <td className="textoVertical">FRONTAL INOX 2,0</td>
                  <td className="textoVertical">PAINEL 4,0</td>
                  <td className="textoVertical">INOX 2,0</td>
                  <td className="textoVertical">INOX 8,0</td>
                </tr>
                <tr
                  className="text-center"
                  Style="background: #ababab; border: 2px solid"
                >
                  <td>2140</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                  <td></td>
                  <td>1</td>
                  <td></td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td Style="background: yellow; color: #000">517413</td>
                  <td></td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td></td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td Style="background: yellow; color: #000">517413</td>
                </tr>
                <tr className="text-center">
                  <td></td>
                  <td>2</td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td Style="background: green; color: #fff">52345</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td></td>
                  <td></td>
                  <td Style="background: yellow; color: #000">52345</td>
                  <td Style="background: yellow; color: #000">52345</td>
                  <td></td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td Style="background: green; color: #fff">517413</td>
                </tr>
                <tr className="text-center">
                  <td></td>
                  <td>3</td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td Style="background: yellow; color: #000">52345</td>
                  <td></td>
                  <td></td>
                  <td Style="background: yellow; color: #000">517413</td>
                  <td></td>
                  <td></td>
                  <td Style="background: green; color: #fff">52345</td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td Style="background: green; color: #fff">517413</td>
                </tr>
                <tr
                  className="text-center"
                  Style="background: #ababab; border: 2px solid"
                >
                  <td>2141</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="text-center">
                  <td></td>
                  <td>1</td>
                  <td></td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td Style="background: yellow; color: #000">517413</td>
                  <td></td>
                  <td></td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td></td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td Style="background: yellow; color: #000">517413</td>
                </tr>
                <tr className="text-center">
                  <td></td>
                  <td>2</td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td Style="background: green; color: #fff">52345</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td></td>
                  <td></td>
                  <td Style="background: yellow; color: #000">52345</td>
                  <td Style="background: yellow; color: #000">52345</td>
                  <td></td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td Style="background: green; color: #fff">517413</td>
                </tr>
                <tr className="text-center">
                  <td></td>
                  <td>3</td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td Style="background: yellow; color: #000">52345</td>
                  <td></td>
                  <td></td>
                  <td Style="background: yellow; color: #000">517413</td>
                  <td></td>
                  <td></td>
                  <td Style="background: green; color: #fff">52345</td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td Style="background: red; color: #fff">52345</td>
                  <td></td>
                  <td Style="background: green; color: #fff">517413</td>
                  <td Style="background: green; color: #fff">517413</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcompanhamentoProdProduto;
