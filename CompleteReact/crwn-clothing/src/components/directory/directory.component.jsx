import React from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = ({ directory }) => (
  <div className="directory-menu">
    {directory.sections.map(({ id, ...contentProperties }) => (
      <MenuItem key={id} {...contentProperties} />
    ))}
  </div>
);

const mapStateToProps = ({ directory }) => ({
  directory,
});

export default connect(mapStateToProps)(Directory);
