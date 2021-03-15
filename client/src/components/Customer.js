import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Fragment } from "react";

const Customer = ({ id, image, name, birthday, gender, job }) => {
  return (
    <Fragment>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>
          <img src={image} alt="profile" />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{birthday}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{job}</TableCell>
      </TableRow>
    </Fragment>
  );
};

export default Customer;
