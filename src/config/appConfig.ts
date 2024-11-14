import assetsPaths from '@/constants/assetsPaths';

type AppConfig = {
    appInfo: {
        name: string;
        title: string;
        description: string;
        logoUrl: string;
    };
};

export const appConfig: AppConfig = {
    appInfo: {
        name: 'YourParts',
        title: 'YourParts',
        description: 'YourParts',
        logoUrl: assetsPaths.logos.brand,
    },
};
