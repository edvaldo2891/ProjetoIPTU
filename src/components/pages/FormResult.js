import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from './FormResult.module.css';

function FormResult(props) {
  
  const [setEditValues] = useState({
    venalConstrucao: props.venalConstrucao,
    venalTerreno: props.venalTerreno,
    venalTotal: props.venalTotal,
    ipu: props.ipu,
    itu: props.itu,
    iptu: props.iptu,
    lixo: props.lixo,
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

  return (
    <div>
      <Dialog
          open={props.open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Resultado da simulação:</DialogTitle>
        <DialogContent>
            <div className={styles.dialog_content}>
                <TextField 
                    autoFocus
                    margin="dense"
                    id="venalTerreno"
                    label="Valor venal do terreno"
                    defaultValue={props.venalTerreno.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    type="text"
                    onChange={handleChangeValues}
                    fullWidth
                    disabled
                />
            </div>
            <div className={styles.dialog_content}>
                <TextField className={styles.dialog_content}
                    autoFocus
                    margin="dense"
                    id="venalConstrucao"
                    label="Valor venal da construção"
                    defaultValue={props.venalConstrucao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    type="text"
                    onChange={handleChangeValues}
                    fullWidth
                    disabled
                />
            </div>
            <div className={styles.dialog_content}>
                <TextField className={styles.dialog_content}
                    autoFocus
                    margin="dense"
                    id="venalTotal"
                    label="Valor venal total"
                    defaultValue={props.venalTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    type="text"
                    onChange={handleChangeValues}
                    fullWidth
                    disabled
                />
            </div>
        </DialogContent>
        <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ITU</th>
                        <th>IPU</th>
                        <th>C. LIXO</th>
                        <th>IPTU</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.itu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        <td>{props.ipu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        <td>{props.lixo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        <td>{props.iptu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>
                </tbody>
        </table>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormResult
