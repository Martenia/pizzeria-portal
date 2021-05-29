import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Waiter.scss';
import { Link } from 'react-router-dom';
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

const content = [
  { table: '1', status: 'free table', id: null },
  { table: '2', status: 'ready to order', id: null },
  { table: '3', status: 'ordered', id: 123 },
  { table: '4', status: 'ready', id: 234 },
  { table: '5', status: 'delivered', id: 345 },
  { table: '6', status: 'paid', id: 456 },
  { table: '7', status: 'ready', id: 567 },
  { table: '8', status: 'ready to order', id: null },
  { table: '9', status: 'paid', id: 678 },
];

const render = (status) => {
  switch (status) {
    case 'free table':
      return <Button variant='contained' size='small' color='secondary' component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Button>;
    case 'ready to order':
      return <Button variant='contained' size='small' color='secondary' component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Button>;
    case 'ordered':
      return (       
        <>        
        <Button disabled variant='contained' size='small' color='secondary' component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Button>
        <Button variant="outlined">Ready</Button>
        </>
      );
    case 'ready':
      return (       
        <>        
        <Button disabled variant='contained' size='small' color='secondary' component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Button>
        <Button variant="outlined" color="secondary" size='small'>Delivered</Button>
        </>
      );
    case 'delivered':
      return (       
        <>
        <Button disabled variant='contained' size='small' color='secondary' component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Button>
        <Button variant="outlined">Paid</Button>
        </>
      );
    case 'paid': 
    return (
      <>
      <Button disabled variant='contained' size='small' color='secondary' component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Button>
      <Button variant="outlined">Free Table</Button>
      </>
    );
    default:
      return null;
  } 
};

const Waiter = () => (  
    <Table className={styles.component}>
      <TableHead>
        <TableRow>
          <StyledTableCell>Table</StyledTableCell>
          <StyledTableCell>Status</StyledTableCell>
          <StyledTableCell>Order Id</StyledTableCell>
          <StyledTableCell>Action</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {content.map((row) => (
          <TableRow key={row.table}>
            <TableCell component="th" scope="row">{row.table}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <Button variant='contained' size='small' color='primary' component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/${row.id}`}>{row.id}</Button>
            </TableCell>
            <TableCell>{render(row.status)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>  
);

export default Waiter;