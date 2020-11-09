import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './programacao.css'

import { useSelector } from 'react-redux';
import { selectActividade } from '../../../redux/atividade/actividadeSlice';
import { selectCategoria } from '../../../redux/categoria/categoriaSlice';
import { selectPlano } from '../../../redux/plano/planoSlice';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 15px',
        background: 'linear-gradient(to bottom right , #48b7ad, #4f48b7 130%) !important',
        color: '#dddddd !important',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function Programacao() {
    const classes = useStyles();
    const planos = useSelector(selectPlano);
    const actividade = useSelector(selectActividade);
    const categoria = useSelector(selectCategoria);
    const getActividade = id => {
        for (let i = 0; i < actividade["length"]; i++)
            if (actividade[i].index === id)
                return actividade[i].name;
    }
    const getCategoria = id => {
        for (let i = 0; i < categoria["length"]; i++)
            if (categoria[i].index === id)
                return categoria[i].name;
    }
    return (
        <Timeline align="alternate">
            {   planos.map(elemento => {
                return (
                    <TimelineItem key={elemento.index} >
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">
                                {elemento.time}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <AssignmentIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent >
                            <Paper className={classes.paper} >
                                <Typography variant="h6" component="h1">{getActividade(elemento.indexActividade)}</Typography>
                                <Typography>{getCategoria(elemento.indexCategoria)}</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                );
            })
            }
        </Timeline>
    );
}
