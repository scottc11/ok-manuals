import { EntryFields } from "contentful";

export const getImageUrl = (image: EntryFields.AssetLink): string => {
    return image?.fields?.file?.url as string;
};

export const getImagesUrls = (images: EntryFields.AssetLink[]): string[] => {
    return images.map(getImageUrl);
};

