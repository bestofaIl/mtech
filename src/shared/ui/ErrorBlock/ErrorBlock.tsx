import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ErrorBlock.module.scss";

export enum ThemeDiv {
    ERROR = "error",
    WARNING = "warning"
}
interface DivProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
    theme?: ThemeDiv;
}

const ErrorBlock: FC<DivProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...rest
    } = props;

    console.log(theme);
    return (
        <div
            className={classNames(cls.ErrorBlock, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </div>
    );
};

export default ErrorBlock;
