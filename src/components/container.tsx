import {cn} from "@/lib/utils.ts";

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container = ({children, className}:ContainerProps) => {
    return (
        <div className={cn("container mx-auto font-inter px-4 py-4 md:px-8 w-full", className)}>
            {children}
        </div>
    );
};

export default Container;
