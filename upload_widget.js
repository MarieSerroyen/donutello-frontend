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

let logoUrl;

const createUrl = () => {
  let logo = document.querySelector("#fileElem").files[0];
  let formData = new FormData();
  formData.append("file", logo);
  formData.append("upload_preset", "ojcpkqqc");
  fetch("https://api.cloudinary.com/v1_1/dphelzfrb/image/upload", {
      method: "POST",
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      logoUrl = data.secure_url;
      // createDonut();
      console.log(logoUrl);
  })
}

document.querySelector("#fileElem").addEventListener("change", createUrl);
