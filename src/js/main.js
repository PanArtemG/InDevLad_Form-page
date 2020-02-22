console.log('HELLO')
const btnUploadFile = document.querySelector('.upload_input-btn')
const inpUpload = document.getElementById('uploadInput')
const uploadFiles = []

btnUploadFile.addEventListener('click', event => {
  // console.log(event.target)
  event.preventDefault()
  inpUpload.click()
})



inpUpload.addEventListener('change', ev => {
  const file = ev.target.files[0]
  uploadFiles.push(file)
  console.log(uploadFiles);
})

function adNewFile() {

}
