import { FunctionComponent, ReactElement } from "react";

interface Props {
    children: ReactElement;
}
export const DarkLayout: FunctionComponent<Props> = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: "5px",
                padding: "10px",
            }}
        >
            <h3>Dark Layout</h3>
            <div>{children}</div>
        </div>
    );
};
