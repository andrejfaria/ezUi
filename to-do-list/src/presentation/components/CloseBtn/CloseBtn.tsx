import { Button } from "@ceiia/button";


function CloseButton() {
  return (
    <div className="close-btn">
      <Button
        label="Close Task"
        className="close-task-btn"
        onClick={() => {
          console.log('close-btn')
        }}
        type="button"
        shape="radius-medium"
        size="medium"
      >
      </Button>
    </div>
  )
}


export default CloseButton;
