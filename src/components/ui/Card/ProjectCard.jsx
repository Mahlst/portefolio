import './ProjectCard.scss'

export default function ProjectCard({
    title,
    description,
    tags,
    imageUrl,
    onClick
}) {
    return (
        <article className="project__card" onClick={onClick}>
            <div className="project__image-wrapper">
                <img
                    src={imageUrl}
                    alt={title}
                    className="project__image"
                    loading="lazy"
                />
            </div>
            <div className="project__content">
                <div className="project__header">
                    <h3 className="project__title">{title}</h3>
                </div>
                <p className="project__description">{description}</p>
                <div className="project__tags">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="project__tag"
                            style={{
                                background: tag.color
                            }}
                        >
                            {tag.icon && (
                                <span className="project__tag-icon">
                                    {tag.icon}
                                </span>
                            )}
                            {tag.label}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}