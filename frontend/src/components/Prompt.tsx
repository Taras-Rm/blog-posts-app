import Button from "./ui/Button";

interface PromptProps {
  show: boolean;
  close: () => void;
  title: string;
  description: string;
  onConfirm: () => Promise<void>;
  onCancel?: () => void;
}

function Prompt({
  show,
  close,
  title,
  description,
  onCancel,
  onConfirm,
}: PromptProps) {
  const onPromptConfirm = () => {
    onConfirm();
    close();
  };
  
  return show ? (
    <div
      onClick={close}
      className="bg-[rgb(0,0,0,0.3)] h-full w-full fixed top-0 left-0 z-50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white min-w-fit sm:min-w-[450px] p-6 rounded-xl shadow-lg"
      >
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{description}</p>
        <div className="mt-4 flex justify-end gap-x-4">
          <Button onClick={onCancel} variant="default">
            Cancel
          </Button>
          <Button onClick={onPromptConfirm}>Confirm</Button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Prompt;
