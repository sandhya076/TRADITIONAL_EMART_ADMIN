import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Emartadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="data:image/png;base64,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" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}