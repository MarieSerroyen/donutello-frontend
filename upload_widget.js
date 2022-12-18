const cloudName = "dphelzfrb";
const uploadPreset = "ojcpkqqc";
let image;

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
      console.log(result.info);
      image = result.info.secure_url;
      localStorage.setItem("Logo", image);
      document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
    
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


// const cloudName = 'dphelzfrb';
// const unsignedUploadPreset = 'ojcpkqqc';

// var fileSelect = document.getElementById("fileSelect")
// var fileElem = document.getElementById("fileElem")
// var url;

// fileSelect.addEventListener("click", function(e) {
//   if (fileElem) {
//     fileElem.click();
//   }
//   e.preventDefault();
// }, false);

// function uploadFile(file) {
//   var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
//   var xhr = new XMLHttpRequest();
//   var formData = new FormData();
//   xhr.open('POST', url, true);
//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');


//   xhr.onreadystatechange = function(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       // File uploaded successfully
//       var response = JSON.parse(xhr.responseText);
//       url = response.secure_url;
//       console.log(url);
//       document.querySelector("#uploadedimage").setAttribute("src", url);
//     }
//   };

//   formData.append('upload_preset', unsignedUploadPreset);
//   formData.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
//   formData.append('file', file);
//   xhr.send(formData);
// }

// var handleFiles = function(files) {
//   for (var i = 0; i < files.length; i++) {
//     uploadFile(files[i]); // call the function to upload the file
//   }
// };


// document.querySelector('#inputField').addEventListener('change', function() {
//   console.log(this.files[0]);
//   if (this.files && this.files[0]) {
//       var img = document.querySelector('#uploadedimage');
//       img.onload = () => {
//           URL.revokeObjectURL(img.src);  // no longer needed, free memory
//       }
//       var url = URL.createObjectURL(this.files[0]);
//       console.log(url);
//       img.src = url // set src to blob url
//   }
// });





// let logoUrl;

// const createUrl = () => {
//   let logo = document.querySelector("#fileElem").files[0];
//   let formData = new FormData();
//   formData.append("file", logo);
//   formData.append("upload_preset", "ojcpkqqc");
//   fetch("https://api.cloudinary.com/v1_1/dphelzfrb/image/upload", {
//       method: "POST",
//       body: formData
//   })
//   .then(response => response.json())
//   .then(data => {
//       logoUrl = data.secure_url;
//       // createDonut();
//       console.log(logoUrl);
//   })
// }

// document.querySelector("#fileElem").addEventListener("change", createUrl);
