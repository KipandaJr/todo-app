import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select } from '@material-ui/core';
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { selectActividade } from '../../../redux/atividade/actividadeSlice';
import { selectCategoria } from '../../../redux/categoria/categoriaSlice';
import { toogleFormAddActivity, selectFormAddActivity } from '../../../redux/outros/formAddActivitySlice';
import { newPlano } from '../../../redux/plano/planoSlice';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(-2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

export default function Form() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const allCategoria = useSelector(selectCategoria);
    const allActividade = useSelector(selectActividade);

    const openForm = useSelector(selectFormAddActivity);
    const closeForm = () => {
        dispatch(toogleFormAddActivity());
    };

    const [categoria, setCategoria] = React.useState('');
    const [tarefa, setTarefa] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
        setTarefa('');
    };

    const handleChangeTarefa = (event) => {
        setTarefa(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const submitData = () => {
        dispatch(newPlano({ indexActividade: tarefa, indexCategoria: categoria, time: selectedDate.toLocaleTimeString() }));
        closeForm();
    }
    return (
        <div className={classes.root}>
            <Dialog onClose={closeForm} aria-labelledby="customized-dialog-title" open={openForm} id="dialog">
                <DialogTitle style={{ background: 'linear-gradient(to bottom left,#48b7ad 30%,#4f48b7 130%)' }} id="form-dialog-title">
                    <IconButton>
                        <FiberNewOutlinedIcon style={{ fontSize: '40px', color: '#000', border: '3px solid #48b7ad', borderRadius: '50px' }} />
                    </IconButton>
                    Atividade do plano
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Crie o seu plano diario... de um jeito totalmente simples, nós ficaremos responsáveis de avisá-lo quando chegar a hora de uma actividade
                    </DialogContentText>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        <Step>
                            <StepLabel>Selecione uma categoria</StepLabel>
                            <StepContent>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="categoria">Categoria</InputLabel>
                                    <Select style={{ width: '300px' }} labelId="categoria" id="categoria" open={open} onClose={handleClose} onOpen={handleOpen} value={categoria} onChange={handleChangeCategoria}>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {
                                            allCategoria.map((elemento) => {
                                                return <MenuItem key={elemento.index} value={elemento.index}>{elemento.name}</MenuItem>
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                <div>
                                    <Button variant="contained" color="primary" onClick={handleNext} style={{ width: '300px' }} className={classes.button}>
                                        Próximo
                                    </Button>
                                </div>
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Seleciona uma Actividade</StepLabel>
                            <StepContent>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="tarefa">Tarefa</InputLabel>
                                    <Select style={{ width: '300px' }} labelId="tarefa" id="tarefa" open={open} onClose={handleClose} onOpen={handleOpen} value={tarefa} onChange={handleChangeTarefa}>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {
                                            allActividade.map((elemento) => {
                                                if (elemento.indexCategoria === categoria)
                                                    return <MenuItem key={elemento.index} value={elemento.index}>{elemento.name}</MenuItem>
                                                else
                                                    return null;
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button disabled={activeStep === 0} style={{ width: '50px' }} onClick={handleBack} className={classes.button}>
                                            voltar
                                    </Button>
                                        <Button variant="contained" color="primary" style={{ width: '230px' }} onClick={handleNext} className={classes.button}>
                                            Próximo
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Informe uma hora para essa actividades</StepLabel>
                            <StepContent>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        label="Hora da actividade"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button disabled={activeStep === 0} style={{ width: '50px' }} onClick={handleBack} className={classes.button}>
                                            Volta
                                        </Button>
                                        <Button variant="contained" color="primary" style={{ width: '230px' }} onClick={submitData} className={classes.button}>
                                            Adicionar ao plano
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    </Stepper>
                </DialogContent>
            </Dialog>
        </div>
    );
}
