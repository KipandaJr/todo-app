import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment, TextField } from '@material-ui/core';
import styled from 'styled-components';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            // This is green.A700 as hex.
            main: '#48b7ad',
        },
    },
});

const MyForm = styled.div`
    display:flex;
    margin-left:10px;
`;
export default function CustomizedInputBase() {
    return (
        <ThemeProvider theme={theme}>
            <MyForm >
                <TextField id="standard-search" label="Pesquise por uma tarefa" type="search" color="primary"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </MyForm>
        </ThemeProvider>
    );
}
