import { Button } from "@ceiia/button";
import { useRef } from "react";


function AddBtn() {


  const buttonName: string = 'Add task'
  // let buttonName = useRef<string>('add')


  // const handleChange = () => {
  //   setReminder(!reminder);
  // };

  return (
    <div className="close-btn">
      <Button
        label={buttonName}
        className="close-task-btn"
        onClick={() => {

        }}
        type="button"
        shape="radius-medium"
        size="medium"
      >
      </Button>
    </div>
  )
}


export default AddBtn;
