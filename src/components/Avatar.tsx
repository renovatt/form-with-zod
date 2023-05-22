import { AvatarImageProps } from "../@types";

export const Avatar = ({ name, url }: AvatarImageProps) => {

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
        event.currentTarget.style.opacity = "1";
    }

    return (
        <div>
            <img className="w-32 h-32 rounded object-cover"
                src={url}
                alt={name}
                onLoad={handleLoad}
            />
        </div>
    )
}
