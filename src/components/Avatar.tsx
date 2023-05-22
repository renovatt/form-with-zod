import { AvatarImageProps } from "../@types";

export const Avatar = ({ name, url }: AvatarImageProps) => {

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
        event.currentTarget.style.opacity = "1";
    }

    return (
        <div>
            <img className="w-20 h-20 rounded-full object-cover border"
                src={url}
                alt={name}
                onLoad={handleLoad}
            />
        </div>
    )
}
