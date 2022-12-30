import { CommentBankOutlined, Send, Share, ThumbUpAltSharp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";

  const Post = forwardRef(({name, description, message, photoURL}, ref) => {
  return (
    <div  ref={ref} className="post">
      <div  className="postHeader">
        <Avatar src={photoURL}>{photoURL || name[0]}</Avatar>
        <div className="postInfo">
        <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>


      <div className="postBody">
        <p>
          {message}
        </p>
      </div>

        <div className="postButtons">
            <InputOption Icon={ThumbUpAltSharp} title="like"/>
            <InputOption Icon={CommentBankOutlined} title="comment"/>
            <InputOption Icon={Share} title="Share"/>
            <InputOption Icon={Send} title="Send"/>
        </div>
    </div>
  );
})
export default Post;
