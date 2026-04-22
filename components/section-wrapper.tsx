import { ReactNode } from "react";

interface SectionWrapperProps {
  title?: string;
  children: ReactNode;
  headerRight?: ReactNode;
  className?: string;
  widthClassName?: string;
}

export const SectionWrapper = ({
  title,
  children,
  headerRight,
  className = "",
  widthClassName = "w-[60%]",
}: SectionWrapperProps) => {
  return (
    <div className={`mt-8 w-full max-h-[50%] bg-background/20 flex items-center justify-center ${className}`}>
      <div className="w-[80%] h-full flex items-center justify-center">
        <div className={`border-1 bg-background/20 border-foreground/20 rounded-md h-full ${widthClassName} flex p-6 flex-col space-y-4`}>
          {(title || headerRight) && (
            <div className="w-full">
              <div className="h-10 w-full flex">
                {title && (
                  <div className={`${headerRight ? "w-24" : "w-64"} h-10 flex items-center`}>
                    <h1 className="text-3xl montserrat-bold">{title}</h1>
                  </div>
                )}
                {headerRight && (
                  <div className="ml-auto mr-4 flex space-x-4 items-center">
                    {headerRight}
                  </div>
                )}
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
