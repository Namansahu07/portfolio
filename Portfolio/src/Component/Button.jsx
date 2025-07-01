import { FiSend } from "react-icons/fi";

const ButtonWrapper = () => {
  return (
    <div className="bg-slate-100 min-h-[200px] flex items-center justify-center">
      <NeumorphismButton />
    </div>
  );
};

const NeumorphismButton = () => {
  return (
    <button
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        bg-slate-100
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.8),_2px_2px_5px_rgba(0,_0,_0,_0.25)]
        hover:text-purple-600
        active:shadow-[inset_1px_1px_2px_rgba(0,_0,_0,_0.25),inset_-1px_-1px_2px_rgba(255,_255,_255,_0.8)]
    `}
    >
      <FiSend />
      <span>get in touch</span>
    </button>
  );
};

export default ButtonWrapper;