import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Checkout = ({ products }) => {
  const subtotal = products
    .filter((cartItem) => cartItem.qty > 0)
    .reduce((total, current) => total + current.qty * current.price, 0);

  return (
    <>
      <Container sx={{ paddingBottom: "1rem" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Unit</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .filter((cartItem) => cartItem.qty > 0)
                .map((cartItem) => (
                  <StyledTableRow key={cartItem.id}>
                    <StyledTableCell component="th" scope="row">
                      {cartItem.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {cartItem.qty}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      ₱ {cartItem.price}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      ₱ {(+cartItem.qty * +cartItem.price).toFixed(2)}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="right">
                  <strong>Subtotal</strong>{" "}
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right">
                  <strong> ₱ {subtotal.toFixed(2)}</strong>
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Checkout;
