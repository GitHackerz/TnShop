import React from "react";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

const PageCard = (props) => {
  return (
    <div>
      <Paper className={props.Color} elevation={8}>
        <div className="inner">
          <h3 className="text-light">{props.Value}</h3>
          <p className="text-light">{props.Title}</p>
        </div>
        <div className="icon">
          <i className="ion ion-cash text-light" />
        </div>
        <Link to={props.Url} className="small-box-footer">
          More info <i className="fas fa-arrow-circle-right" />
        </Link>
      </Paper>
    </div>
  );
};

export default PageCard;
