import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { data } from 'autoprefixer';

/**
 *
 * @param {String} filePath - Path to the file on the cloud storage.
 * @param {[*]} files - An array of filkes to be uploaded
 * @returns An object contaiuning state of process and end result
 */
export const fileUploader = async (filePath, files) => {
  let state = {
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: null,
    data: [],
  };

  try {
    state.isLoading = true;

    files.map(async (file) => {
      const imageRef = ref(storage, `${filePath}/${file.name}`);
      const snapshot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);
      state.data.push(url);
    });

    // -- set return state -->
    return { ...state, isSuccess: true, isLoading: false };
  } catch (error) {
    console.warn(error);

    // -- set return state -->
    return { ...state, isLoading: false, error, isError: true };
  }
};
