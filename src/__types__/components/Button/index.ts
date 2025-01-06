export interface IButton {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}