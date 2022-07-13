import React from "react";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

const PageCard = (props) => {
  const Value = () => {
    if (props.type === "Cash")
      return <h3 className="text-light">{props.Value} $</h3>;
    else if (props.type === "Pourc")
      return (
        <h3 className="text-light">
          {props.Value} <sup style={{ fontSize: 20 }}>%</sup>
        </h3>
      );
    else return <h3 className="text-light">{props.Value}</h3>;
  };

  return (
    <div>
      <Paper className={props.Class} elevation={8}>
        <div className="inner">
          {Value()}

          <p className="text-light">{props.Title}</p>
        </div>
        <div className="icon">
          <i className={props.Icon} />
        </div>
        <Link to={props.Url} className="small-box-footer">
          More info <i className="fas fa-arrow-circle-right" />
        </Link>
      </Paper>
    </div>
  );
};

export default PageCard;
