import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

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
    const [categoria, setCategoria] = React.useState('');
    const [tarefa, setTarefa] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    let steps = 3;

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

    return (
        <div className={classes.root}>
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
                                <MenuItem value={"Domestico"}>Domestico</MenuItem>
                                <MenuItem value={"Acadêmico"}>Acadêmico</MenuItem>
                                <MenuItem value={"Espiritualidade"}>Espiritualidade</MenuItem>
                                <MenuItem value={"Pessoal"}>Pessoal</MenuItem>
                                <MenuItem value={"Relaxo"}>Relaxo</MenuItem>
                            </Select>
                        </FormControl>
                        <div>
                            <Button variant="contained" color="primary" onClick={handleNext} style={{ width: '300px' }} className={classes.button}>
                                {activeStep === steps - 1 ? 'Finish' : 'Next'}
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
                                <MenuItem value={"Arrumar o Quintal"}>Arrumar o Quintal</MenuItem>
                                <MenuItem value={"Estudar para as parcelares"}>Estudar para as parcelares</MenuItem>
                                <MenuItem value={"Momento com Jah"}>Momento com Jah</MenuItem>
                                <MenuItem value={"Conversar com a familiar"}>Conversar com a familiar</MenuItem>
                                <MenuItem value={"Namorar"}>Namorar</MenuItem>
                            </Select>
                        </FormControl>
                        <div className={classes.actionsContainer}>
                            <div>
                                <Button disabled={activeStep === 0} style={{ width: '50px' }} onClick={handleBack} className={classes.button}>
                                    Back
                                    </Button>
                                <Button variant="contained" color="primary" style={{ width: '230px' }} onClick={handleNext} className={classes.button}>
                                    {activeStep === steps - 1 ? 'Finish' : 'Next'}
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
                                label="Time picker"
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
                                    Back
                                    </Button>
                                <Button variant="contained" color="primary" style={{ width: '230px' }} onClick={handleNext} className={classes.button}>
                                    {activeStep === steps - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    </StepContent>
                </Step>
            </Stepper>
        </div>
    );
}
