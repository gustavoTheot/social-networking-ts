import { Heart, ShareFat } from "@phosphor-icons/react";
import { handleLike, handleShare } from "../../util/actionsPost";
import { formatDateAndTime } from "../../util/formatDate";
import { ContainerPost } from "../PopUp/styles";

interface PostProps {
    title: string,
    description: string,
    file?: File,
    createdAt: string,
    id_post: string
    id_user: string
}

export function Post({ title, description, file, createdAt, id_user, id_post }: PostProps) {
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
                <span>{formatDateAndTime(createdAt)}</span>
            </div>

            <div className="actions">
                <button onClick={() => handleLike(id_user, id_post,)}>
                    <Heart size={24} alt='Gostei' />
                </button>
                <button onClick={() => handleShare(id_post)} >
                    <ShareFat size={24} alt='Compartilhar' />
                </button>
            </div>
        </ContainerPost>
    )
}