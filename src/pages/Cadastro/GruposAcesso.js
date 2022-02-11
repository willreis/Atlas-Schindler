import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";

import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

///////////////////////////transfer list
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
//////////////////////////

import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
// import { Button } from "react-bootstrap";
// import { TiArrowForward } from "react-icons/ti";
// import { TiArrowBack } from "react-icons/ti";
import "../../../src/grupo.css";
import Api from "../../services/Api";

export default function GruposAcesso() {
  //////////////////////////// transferlist
  function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }

  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items) => (
    <Paper sx={{ width: 200, height: 230, overflow: "auto" }}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  ///////////////////////////transfer list

  const [getTela, setGetTela] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [telaId, setTelaId] = useState();
  const [nome, setNome] = useState();

  // const telaId = localStorage.getItem('telaId');
  // const telaNome = localStorage.getItem('nome')

  //GET
  const [user, setUser] = useState([]);

  //Get Tela:
  const columnsSemPermissao = [
    {
      text: "Telas Sem Permissão!",
      dataField: "telas",
    },
  ];

  const [productsSemPermissao, setProductsSemPermissao] = useState([]);

  function funcaoAbrirModal(usuario) {
    setShowModal(true);
    console.log("funcaoAbrirModal ativada!!!!!!!!!!!!!");

    Api.get("Tela/", {
      telaId,
      nome,
    })
      .then((response) => {
        console.log(response);
        setProductsSemPermissao(
          response.data.map((t) => {
            return { telas: t.nome, ...t };
          })
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }

  function onClickLinhaTabela() {
    Api.get("Tela/", {
      telaId,
    })
      .then(() => {
        const idDaLinha = document.getElementById(telaId);
        console.log("Linha da Tabela: ", idDaLinha);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });

    console.log("idiididididid", telaId);
  }

  function Enviar() {}

  function Trazer() {}

  //////////////////////////////////////////////////////////////////////////////////////////////////
  const columns = [
    {
      text: "Telas Permitidas!",
      dataField: "telas",
    },
  ];

  const products = [
    {
      telas: "Usuario",
    },
    {
      telas: "Usuario",
    },
    {
      telas: "Usuario",
    },
    {
      telas: "Usuario",
    },
  ];

  var url = "GrupoDeAcesso";

  //Modal const
  const [show, setShow] = useState(false);

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  // POST
  const [nomeDoGrupo, setNomeDoGrupo] = useState();
  const [descricaoDoGrupo, setDescricaoDoGrupo] = useState();
  const [usuarios, setUsuarios] = useState(null);
  const [telas, setTelas] = useState(null);
  const [quantidadeTelasPermitidas, setQuantidadeTelasPermitidas] = useState();
  const [quantidadeDeUsuarios, setQuantidadeDeUsuarios] = useState();

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post(`/${url}`, {
      nomeDoGrupo,
      descricaoDoGrupo,
      usuarios,
      telas,
      quantidadeTelasPermitidas,
      quantidadeDeUsuarios,
    })
      .then((response) => {
        console.log(response.data);
        alert("Cadastro efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //Delete
  async function handleDeleteMaquina(grupoDeAcessoId) {
    try {
      await Api.delete(`/${url}/${grupoDeAcessoId}`);
      setUser(
        user.filter((grupo) => grupo.grupoDeAcessoId !== grupoDeAcessoId)
      );
      alert("Deletado com sucesso");
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Grupo de Acesso</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div Style="text-align: right">
                <Button
                  variant="success"
                  onClick={(props) => {
                    funcaoAbrirModal(props.usuario);
                  }}
                >
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 paddingTop20Mobile">
              <div className="textTable">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Nome</th>
                      <th scope="col">Descrição</th>
                      <th scope="col">Qtd Telas Permitidas</th>
                      <th scope="col">Qtd De Usuarios</th>
                      <th scope="col">Editar / Excluir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((grupo, index) => (
                      <tr>
                        <td Style="display:none" key={index}></td>
                        <td Style="display:none">{grupo.grupoDeAcessoId}</td>
                        <td>{grupo.nomeDoGrupo}</td>
                        <td>{grupo.descricaoDoGrupo}</td>
                        <td>{grupo.quantidadeTelasPermitidas}</td>
                        <td>{grupo.quantidadeDeUsuarios}</td>
                        <td className="text-center icons-table">
                          <span
                            Style="cursor:pointer"
                            // onClick={() => pegarId(maquina.maquinaId)}
                            alt="Editar"
                          >
                            <VscEdit />
                          </span>

                          <span
                            Style="cursor:pointer"
                            onClick={() =>
                              handleDeleteMaquina(grupo.grupoDeAcessoId)
                            }
                            alt="Deletar"
                          >
                            <RiDeleteBinFill />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="cadastroGPAcesso">
          <Modal
            size="lg"
            show={showModal}
            onHide={() => setShowModal(false)}
            dialogClassName="modal-90w cadastroGPAcesso"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Cadastro de Grupo de Acesso
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div
                className="formCadastro"
                id="formCadastro"
                Style="margin-bottom: 30px"
              >
                <form className="row formPadrao">
                  <div className="row">
                    <div className="col-6">
                      <label>Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                      />
                    </div>
                    <div className="col-6">
                      <label>Descrição</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Descrição"
                      />
                    </div>
                  </div>

                  <div
                    className="row"
                    Style="margin-top: 1rem; margin-bottom: 1rem"
                  >
                    <div className="col-3">
                      <Button variant="success" Style="width:100%">
                        Telas
                      </Button>
                    </div>
                    <div className="col-3">
                      <Button variant="success" Style="width:100%">
                        Usuarios
                      </Button>
                    </div>
                  </div>

                  {/**Transfer List */}
                  {/**Transfer List */}
                  <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>{customList(left)}</Grid>
                    <Grid item>
                      <Grid container direction="column" alignItems="center">
                        <Button
                          sx={{ my: 0.5 }}
                          variant="outlined"
                          size="small"
                          onClick={handleAllRight}
                          disabled={left.length === 0}
                          aria-label="move all right"
                        >
                          ≫
                        </Button>
                        <Button
                          sx={{ my: 0.5 }}
                          variant="outlined"
                          size="small"
                          onClick={handleCheckedRight}
                          disabled={leftChecked.length === 0}
                          aria-label="move selected right"
                        >
                          &gt;
                        </Button>
                        <Button
                          sx={{ my: 0.5 }}
                          variant="outlined"
                          size="small"
                          onClick={handleCheckedLeft}
                          disabled={rightChecked.length === 0}
                          aria-label="move selected left"
                        >
                          &lt;
                        </Button>
                        <Button
                          sx={{ my: 0.5 }}
                          variant="outlined"
                          size="small"
                          onClick={handleAllLeft}
                          disabled={right.length === 0}
                          aria-label="move all left"
                        >
                          ≪
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item>{customList(right)}</Grid>
                  </Grid>
                  {/**Transfer List */}
                  {/**Transfer List */}

                  {/*1ª Quadrado*/}
                  {/* <div className="row mt-3" >
                    <div className="col-5 ultimaTabela" onClick={onClickLinhaTabela}>
                      <BootstrapTable
                        keyField='id'
                        data={productsSemPermissao}
                        columns={columnsSemPermissao}
                        bordered={false}
                      />
                    </div>

                    <div className="col-2 text-center" >
                      <div Style='border: 1px solid black; padding: 6px; border-radius: 1rem; margin-top: 4rem; cursor: pointer'>
                        <TiArrowForward onClick={Enviar} />
                      </div>
                      <div Style='border: 1px solid black; padding: 6px; border-radius: 1rem; margin-top: 2rem; cursor: pointer;'>
                        <TiArrowBack onClick={Trazer} />
                      </div>
                    </div>

                    
                    <div className="col-5">
                      <BootstrapTable
                        keyField="id"
                        data={products}
                        columns={columns}
                        bordered={false}
                      />
                    </div>

                    <div className='row mt-4'>
                      <div className='col-6'>
                        <Button variant='secondary'>
                          Voltar
                        </Button>
                      </div>
                      <div className='col-6' Style='text-align:right'>
                        <Button variant='success'>
                          Salvar
                        </Button>
                      </div>
                    </div>

                  </div> */}
                  {/*Fim quadrados*/}
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        {/* Modal */}
      </IconContext.Provider>
    </>
  );
}
