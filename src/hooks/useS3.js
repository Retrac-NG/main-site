import { usetate } from 'react';
import { uploadFile } from 'react-s3';

const s3Config = {
  bucketName: process.env.NEXT_PUBLIC_AWS_S3_BUCKET,
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
};

/**
 *
 * @param {*} file - file to be uploaded to s3
 * @returns upload results
 */
export const awsBucketUploader = async (file) => {
  const [data, setData] = useState(null);
  console.log('Hello world');
  console.log(s3Config);
  try {
    const response = await uploadFile(file, s3Config);
    setData(response);
  } catch (error) {
    console.error(error);
  }

  return data;
};
