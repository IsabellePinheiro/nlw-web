import { CloseButton } from "../../CloseButton";
import successIcon from "../../../assets/success.svg";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}
export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex fex-col items-center py-10 w-[304px]">
        <img src={successIcon} />
        <span className="text-xl mt-8">Agradecemos o feedback</span>
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand transition-colors disabled:opacity-50 disabled:hover:bg-brand"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
