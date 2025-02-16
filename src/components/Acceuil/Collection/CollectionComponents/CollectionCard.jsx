/**
 * 
 * @param {png, jpg, webp,} Image
 * @param {string} CollectionName
 * @returns 
 */

export function CardCollection({ Image, CollectionName }) {
    return (
        <div className="CardCollection gap-x-1">
            <p className="CollectionName">{CollectionName}</p>
            <img src={Image} alt="Collection item" className="collection-image" />
        </div>
    );
}  