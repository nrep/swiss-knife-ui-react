import React from 'react';

interface ImageProps {
    src: string;
    alt?: string;
}
interface AvatarProps extends ImageProps {
    appearance?: string;
}

export const Avatar:React.FC<AvatarProps> = ({ src, alt, appearance }) => {
    let height: string = (appearance == "medium") ? 'h-8' : (appearance == "large") ? 'h-10' : 'h-6';
    let width: string = (appearance == "medium") ? 'w-8' : (appearance == "large") ? 'h-10' : 'w-6';
    return <img className={`inline-block ${height} ${width} rounded-full ring-2 ring-white`} src={src} alt={alt} />
}
interface AppearanceProps {
    appearance?: string;
}

export const AvatarGroup:React.FC<AppearanceProps> = ({ appearance = "small", children }) => {

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { appearance });
        }
        return child;
    });

    return (
        <>
            {appearance == "small" && (
                <div className="flex -space-x-1 overflow-hidden">
                    {childrenWithProps}
                </div>
            )}
            {appearance != "small" && (
                <div className="flex -space-x-2 overflow-hidden">
                    {childrenWithProps}
                </div>
            )}
        </>
    )
}