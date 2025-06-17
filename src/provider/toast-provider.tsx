import {Toaster} from "@/components/ui/sonner.tsx";

const ToastProvider = () => {
    return (
        <div>
            <Toaster theme="light"
            richColors position={"top-right"} className="bg-neutral-100 shadow-lg" />
        </div>
    );
};

export default ToastProvider;
