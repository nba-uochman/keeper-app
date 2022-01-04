import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function CreateArea({ title, content, handleChange, handleClick }) {

  const [isexpanded, setIsExpanded] = useState(false);

  function expandTextarea() {
    setIsExpanded(true);
  }


  return (
    <div>
      <form className="create-note">

        {
          isexpanded
          &&
          <input
            name="title"
            value={title}
            placeholder="Title"
            onChange={handleChange}
            autoFocus
          />
        }

        <textarea
          name="content"
          value={content}
          placeholder="Take a note..."
          onClick={expandTextarea}
          rows={isexpanded ? 3 : 1}
          onChange={handleChange}
        />
        <Zoom in={isexpanded}>
          <Fab onClick={handleClick}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}


export default CreateArea;
