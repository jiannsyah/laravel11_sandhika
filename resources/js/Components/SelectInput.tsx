import {
    forwardRef,
    useImperativeHandle,
    useRef,
    SelectHTMLAttributes,
} from "react";

export default forwardRef(function SelectInput(
    {
        className = "",
        children,
        ...props
    }: SelectHTMLAttributes<HTMLSelectElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    return (
        <select
            {...props}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
        >
            {children}
        </select>
    );
});
