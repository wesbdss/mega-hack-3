import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Paper } from '@material-ui/core';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const status = ((<Box display="flex" alignItems="center">
  <Box width="100%" mr={1} >
    <LinearProgress variant="determinate" />
  </Box>
  <Box minWidth={35}>
    <Typography variant="body2" color="textSecondary">{`${100}%`}</Typography>
  </Box>
</Box>))

const rows = [
  createData(0, '16 Mar, 2019', 'Senhor dos Aneis', status, "1/12"),
  createData(1, '16 Mar, 2019', 'Força do Hábito', status, "0/12"),
  createData(2, '16 Mar, 2019', 'O medo da Bia', status, '2/23'),
  createData(3, '16 Mar, 2019', 'Amigoss', status, "2/6"),
  createData(4, '15 Mar, 2019', 'O Menino que Olhava para o Ceu', status, "2/6"),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(5),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <Paper>
      <React.Fragment>
        <Title style={{ marginTop: "40px" }}>Histórico de Leitura</Title>
        <Table size="small" >
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Progresso de Leitura</TableCell>
              <TableCell>Cards Encontrados</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </React.Fragment>
    </Paper>

  );
}
