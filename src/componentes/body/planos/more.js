import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import {
    toogleFormAddActivity
} from '../../../redux/outros/formAddActivitySlice';
const useStyles = makeStyles((theme) => ({
    root: {
        height: 380,
        transform: 'translateZ(0px)',
        flexGrow: 1,
    },
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const actions = [
    { icon: <SaveIcon />, name: 'Salvar o plano actual' },
    { icon: <CancelIcon />, name: 'Remover à ultima actividade inserida' },
    { icon: <DeleteForeverIcon />, name: 'Cancelar todo Plano' },
];

export default function MoreOptions() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const openForm = () => {
        dispatch(toogleFormAddActivity());
    };
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            className={classes.speedDial}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
            <SpeedDialAction
                key='Adicionar atividade ao plano'
                icon={<PostAddIcon />}
                tooltipTitle='Adicionar atividade ao plano'
                onClick={openForm}
            />
            {actions.map((action, index) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={handleClose}
                />
            ))}
        </SpeedDial>
    );
}
