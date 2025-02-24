
// export function decrypt(encryption: string, secretKey: string) {
//     try {
//         // Convert the encrypted data from base64 to bytes
//         const ciphertext = CryptoJS.enc.Base64.parse(encryptedData);
    
//         // Extract IV from the first 16 bytes
//         const iv = ciphertext.clone();
//         iv.sigBytes = 16;
//         iv.clamp();
    
//         // Remove IV from the ciphertext
//         const encryptedContent = ciphertext.clone();
//         encryptedContent.words.splice(0, 4); // remove first 4 words (16 bytes)
//         encryptedContent.sigBytes -= 16;
    
//         // Decrypt the data
//         const decrypted = CryptoJS.AES.decrypt(
//           { ciphertext: encryptedContent },
//           CryptoJS.enc.Utf8.parse(secretKey),
//           {
//             iv: iv,
//             mode: CryptoJS.mode.CBC,
//             padding: CryptoJS.pad.Pkcs7
//           }
//         );
    
//         // Convert to UTF-8 string
//         return decrypted.toString(CryptoJS.enc.Utf8);
//       } catch (error) {
//         console.error('Decryption error:', error);
//         return null;
//       }
// }