const cloudName = "dphelzfrb";
const uploadPreset = "ojcpkqqc";
let image;

document.getElementById("uploadedimage").style.display = "none";

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      image = result.info.secure_url;
      localStorage.setItem("Logo", image);
      document.getElementById("uploadedimage").style.display = "inline";
      document.getElementById("uploadedimage").setAttribute("src", result.info.secure_url);
      // add result.info.secure_url to database
    }else if(error){
      console.log(error);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);