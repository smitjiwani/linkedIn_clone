import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
        <div className="widget__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon className="muiicon"/>
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
  )


  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("PM Modi virtually flags off Howrah-NJP Vande Bharat express", "Top newss, 2M readers")}
      {newsArticle("Four months after exit, Ghulam Nabi Azad may return to Congress: Report", "Top newss, 2M readers")}
      {newsArticle("Chinese Woman Caught In Bihar: A Spy Story That Never Was", "Top newss, 2M readers")}
    </div>
  );
}

export default Widgets;
