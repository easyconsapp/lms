"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";

const Text = () => {
  const handleClick = (mode: boolean): void => {
    mode ? toast.success("Test Success") : toast.error("Test Error");
  };

  const handleSuccess = () => handleClick(false);

  return (
    <div>
      <Button className="bg-red-600" variant="default" onClick={handleSuccess}>
        Hello Carlo
      </Button>
    </div>
  );
};

export default Text;
