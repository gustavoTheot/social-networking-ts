import { Heart, ShareFat } from "@phosphor-icons/react";
import { handleLike, handleShare } from "../../util/actionsPost";
import { formatInDate } from "../../util/formatDate";
import { ContainerPost } from "../PopUp/styles";

interface PostProps {
    title: string,
    description: string,
    file?: File,
    createdAt: string,
    _id: string
}

export function Post({ title, description, file, createdAt, _id }: PostProps) {
    return (
        <ContainerPost>
            <div className="content">
                <span>{title}</span>
                <span>{description}</span>
            </div>

            {
                file !== null &&
                ('')
            }

            <div className="date-post">
                <span>{formatInDate(createdAt)}</span>
            </div>

            <div className="actions">
                <button onClick={() => handleLike(_id)}>
                    <Heart size={24} alt='Gostei' />
                </button>
                <button onClick={() => handleShare(_id)} >
                    <ShareFat size={24} alt='Compartilhar' />
                </button>
            </div>
        </ContainerPost>
    )
}