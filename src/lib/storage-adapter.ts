import { azureBlobStorageAdapter } from '@payloadcms/plugin-cloud-storage/azure';

export const azureAdapter = azureBlobStorageAdapter({
  connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING as string,
  containerName: process.env.AZURE_STORAGE_CONTAINER_NAME as string,
  allowContainerCreate: process.env.AZURE_STORAGE_ALLOW_CONTAINER_CREATE === 'true',
  baseURL: process.env.AZURE_STORAGE_ACCOUNT_BASEURL as string,
})