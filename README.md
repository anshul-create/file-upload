

### File Upload with Multer in Node.js

This project demonstrates how to implement file upload functionality in a Node.js application using **Multer** middleware. Multer is a popular package used to handle `multipart/form-data`, which is commonly used for uploading files.

# Key Steps:
1. Install Dependencies: 
   Multer and Express are required to set up the server and handle file uploads.
   
2. Set Up Multer Storage:
   Configure the file storage destination and filenames using `multer.diskStorage()`.

3. Create File Upload Route:
   Use `upload.single()` or `upload.array()` for handling single or multiple file uploads in your route.

4. Create Upload Directory:
   Ensure a directory (`uploads/`) exists to store the uploaded files.

5. HTML Form:
   Create a simple form to allow users to select and upload files.

# Features:
- Supports uploading single or multiple files.
- Files are stored locally in a specific directory.
- Allows customization of file storage (e.g., naming convention, file type validation).

