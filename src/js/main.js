console.log('HELLO')
const btnUploadFile = document.querySelector('.upload_input-btn')
const inpUpload = document.getElementById('uploadInput')
const uploadRequestText = document.getElementById('uploadRequestText')
const uploadTable = document.getElementById('uploadTable')
const loadFilesList = document.getElementById('loadFilesList')
const uploadFiles = []

btnUploadFile.addEventListener('click', event => {
  // console.log(event.target)
  event.preventDefault()
  inpUpload.click()
})



inpUpload.addEventListener('change', ev => {
  const file = ev.target.files[0]
  uploadFiles.push(file)
  console.log(uploadFiles)

  if (!!uploadFiles.length) {
    uploadRequestText.classList.toggle('not-active')
    uploadTable.classList.remove('not-active')
    uploadTable.classList.add('flex')
    loadFilesList.classList.add('flex')
    createListFiles()
  }
})

function createListFiles() {

  loadFilesList.forEach(el => {
    const listItem = `
  <div class="upload_table w-100 br-3 p-3">
          <div class='upload_table-name d-flex align-items-center justify-content-start '>
          <h6>${el.name}</h6>
          </div>
          <div class='upload_table-size align-items-center justify-content-start'>
            <h6>${el.size}</h6>
          </div>
          <div class='upload_table-words align-items-center justify-content-start'>
            <h6>888</h6>
          </div>
          <div class='upload_table-remove d-flex align-items-center justify-content-center'>
            <h6>Remove</h6>
          </div>
          <div id='loadFilesList' class='upload_table-load-files'></div>
        </div>
      </div>
  `

    uploadTable.innerHTML = listItem
  })
}
