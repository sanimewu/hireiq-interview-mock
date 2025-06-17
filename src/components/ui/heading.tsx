import {cn} from "@/lib/utils.ts";

export interface HeadingProps {
    title: string;
    description?: string;
    isSubHeading?: boolean;
}
const Heading = ({title, description, isSubHeading= false}:HeadingProps) => {
    return (
        <div>
            <h2 className={cn("text-2xl md:text-3xl text-gray-800 font-bold leading-none", isSubHeading && "text-lg")}>
                {title}
            </h2>
            {description && (
                <p className="text-sm text-gray-500">{description}</p>
            )}
        </div>
    );
};

export default Heading;
