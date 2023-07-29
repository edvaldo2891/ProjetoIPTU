import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";
import styles from './FormDialog.module.css';

function FormDialog(props) {
  
  const [editValues, setEditValues] = useState({
    cod: props.cod,
    inscricao: props.inscricao,
    proprietario: props.proprietario,
    compromissario: props.compromissario,
    logradouro: props.logradouro,
    numero: props.numero,
    bairro: props.bairro,
    terreno: props.terreno,
    contrucao: props.construcao,
    padrao: props.padrao,
    tipo: props.tipo,
    setor: props.setor,
    categoria: props.categoria,
    lote: props.lote,
    quadra: props.quadra,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.cod]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditGame = () => {
    Axios.put("http://localhost:3001/edit", {
      cod: editValues.cod,
      inscricao: editValues.inscricao,
      proprietario: editValues.proprietario,
      compromisario: editValues.compromissario,
      logradouro: editValues.logradouro,
      numero: editValues.numero,
      bairro: editValues.bairro,
      terreno: editValues.terreno,
      construcao: editValues.construcao,
      padrao: editValues.padrao,
      tipo: editValues.tipo,
      setor: editValues.setor,
      categoria: editValues.categoria,
      lote: editValues.lote,
      quadra: editValues.quadra,
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          return value.cod == editValues.cod
            ? {
                cod: editValues.cod,
                inscricao: editValues.inscricao,
                proprietario: editValues.proprietario,
                compromisario: editValues.compromissario,
                logradouro: editValues.logradouro,
                numero: editValues.numero,
                bairro: editValues.bairro,
                terreno: editValues.terreno,
                construcao: editValues.construcao,
                padrao: editValues.padrao,
                tipo: editValues.tipo,
                setor: editValues.setor,
                categoria: editValues.categoria,
                lote: editValues.lote,
                quadra: editValues.quadra,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteGame = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.cod}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.cod != editValues.cod;
        })
      );
    });
    handleClose();
  };

  function getDefaultValue(setor) {
    switch (setor) {
      case 1:
        return "A";
      case 2:
        return "B";
      case 3:
        return "C";
      case 4:
        return "D";
      case 5:
        return "E";
      default:
        return props.setor;
    }
  }

  return (
    <div>
      <Dialog
          open={props.open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          className={styles.dialog_content}
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField className={styles.textField}
            autoFocus
            margin="dense"
            id="inscricao"
            label="Inscrição"
            defaultValue={props.inscricao}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            disabled
            style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
          />
          <TextField className={styles.textField}
            autoFocus
            margin="dense"
            id="proprietario"
            label="Nome do proprietario"
            defaultValue={props.proprietario}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            disabled
            style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
          />
          <TextField className={styles.textField}
            autoFocus
            margin="dense"
            id="compromissario"
            label="Nome do compromissário"
            defaultValue={props.compromissario}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            disabled
            style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
          />
          <div className={styles.bloco_inline}>
            <TextField className={styles.textField}
              autoFocus
              margin="dense"
              id="logradouro"
              label="Logradouro"
              defaultValue={props.logradouro}
              type="text"
              onChange={handleChangeValues}
              fullWidth
              disabled
              style={{ width: '500px', border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
            />
            <TextField className={styles.textField}
              autoFocus
              margin="dense"
              id="numero"
              label="Número"
              defaultValue={props.numero}
              type="text"
              onChange={handleChangeValues}
              fullWidth
              disabled
              style={{ width: '50px', border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
            />
            </div>
            <TextField className={styles.textField}
              autoFocus
              margin="dense"
              id="bairro"
              label="bairro"
              defaultValue={props.bairro}
              type="text"
              onChange={handleChangeValues}
              fullWidth
              disabled
              style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
            />
            <div className={styles.bloco_inline}>
                <TextField className={styles.textField}
                  autoFocus
                  margin="dense"
                  id="lote"
                  label="Lote"
                  defaultValue={props.lote}
                  type="text"
                  onChange={handleChangeValues}
                  fullWidth
                  disabled
                  style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em', paddingLeft: '0.5em' }}
                />
                <TextField className={styles.textField}
                  autoFocus
                  margin="dense"
                  id="quadra"
                  label="Quadra"
                  defaultValue={props.quadra}
                  type="text"
                  onChange={handleChangeValues}
                  fullWidth
                  disabled
                  style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
                />
                <TextField className={styles.textField}
                  autoFocus
                  margin="dense"
                  id="terreno"
                  label="Terreno"
                  defaultValue={props.terreno+"m²"}
                  type="text"
                  onChange={handleChangeValues}
                  fullWidth
                  disabled
                  style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
                />
                <TextField className={styles.textField}
                  autoFocus
                  margin="dense"
                  id="construcao"
                  label="Construção"
                  defaultValue={props.construcao+"m²"}
                  type="text"
                  onChange={handleChangeValues}
                  fullWidth
                  disabled
                  style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
                />
            </div>
            <div className={styles.bloco_inline}>
                <TextField className={styles.textField}
                  autoFocus
                  margin="dense"
                  id="setor"
                  label="Setor"
                  defaultValue={getDefaultValue(props.setor)}
                  type="text"
                  onChange={handleChangeValues}
                  fullWidth
                  disabled
                  style={{ width: '120px', border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
                />
                <TextField className={styles.textField}
                  autoFocus
                  margin="dense"
                  id="padrao"
                  label="Padrão"
                  defaultValue={props.padrao}
                  type="text"
                  onChange={handleChangeValues}
                  fullWidth
                  disabled
                  style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
                />
                <TextField className={styles.textField}
                  autoFocus
                  margin="dense"
                  id="tipo"
                  label="Tipo"
                  defaultValue={props.tipo}
                  type="text"
                  onChange={handleChangeValues}
                  fullWidth
                  disabled
                  style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
                />
                <TextField className={styles.textField}
                  autoFocus
                  margin="dense"
                  id="categoria"
                  label="Categoria"
                  defaultValue={props.categoria}
                  type="text"
                  onChange={handleChangeValues}
                  fullWidth
                  disabled
                  style={{border: '1px solid black', borderRadius: '4px', paddingLeft: '0.5em' }}
                />
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteGame()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditGame()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog
