document.addEventListener('DOMContentLoaded', () => {



const btnUploadFile = document.querySelector('.upload_input-btn')
const inpUpload = document.getElementById('uploadInput')
const uploadRequestText = document.getElementById('uploadRequestText')
const uploadTable = document.getElementById('uploadTable')
const loadFilesList = document.getElementById('loadFilesList')
const tellUsInputRange = document.getElementById('tellUs')
const uploadFiles = []

btnUploadFile.addEventListener('click', event => {
  event.preventDefault()
  inpUpload.click()
})

inpUpload.addEventListener('change', ev => {
  const file = ev.target.files[0]

  uploadFiles.push(file)

  if (!!uploadFiles.length) {
    uploadRequestText.classList.add('not-active')
    uploadTable.classList.remove('not-active')
    uploadTable.classList.add('flex')
    loadFilesList.classList.add('flex')
    createListFiles()
  }
})

tellUsInputRange.addEventListener('change', ev => {
  const urgency = {
    "gotTime": {
      title: 'got time',
      content: "our expert translator can take a reasonable amount of time perfecting your translation."
    },
    "average": {
      title: 'average',
      content: "you will get the best translation."
    },
    "yesterday": {
      title: 'yesterday',
      content: "we will do our best to make translation as soon as possible."
    }
  }
  const userChoice = ev.target.value

  switch (userChoice) {
    case '0':
      showText(urgency.gotTime.title, urgency.gotTime.content)
      break
    case '1':
      showText(urgency.average.title, urgency.average.content)
      break
    case '2':
      showText(urgency.yesterday.title, urgency.yesterday.content)
      break
    default:
  }
})


function createListFiles() {
  const itemWrap = document.createElement('div')
  const itemNameWrap = document.createElement('div')
  const itemName = document.createElement('h6')
  const itemSizeWrap = document.createElement('div')
  const itemSize = document.createElement('h6')
  const itemWordWrap = document.createElement('div')
  const itemWord = document.createElement('h6')
  const itemRemoveWrap = document.createElement('div')
  const itemRemove = document.createElement('div')

  uploadFiles.forEach((el, i) => {

    itemWrap.setAttribute('id-file', `${el.lastModified}`)
    itemWrap.classList.add('file-wrap', 'd-flex', 'w-100', 'align-items-center', 'justify-content-between', 'pb-1', 'pt-3')
    itemNameWrap.classList.add('upload_table-name', 'd-flex', 'align-items-center', 'justify-content-start')
    itemName.classList.add('file-name')
    itemSizeWrap.classList.add('upload_table-size', 'align-items-center', 'justify-content-center', 'table-item')
    itemSize.classList.add('file-item')
    itemWordWrap.classList.add('upload_table-words', 'align-items-center', 'justify-content-center', 'table-item')
    itemWord.classList.add('file-item')
    itemRemoveWrap.classList.add('upload_table-remove', 'd-flex', 'align-items-center', 'justify-content-center', 'table-item')
    itemRemove.classList.add('file-item')
    itemRemoveWrap.setAttribute('id', `${el.lastModified}`)

    itemName.innerText = el.name
    itemSize.innerText = el.size
    itemWord.innerText = '888'
    itemRemove.innerHTML =
        `<svg
            class='icon remove-icon remove-btn'
            x="0"
            y="0"
            fill = #6e7690
            viewBox="0 0 512 512"
            xmlSpace="preserve">
        <path d="M62.29 180l26.27 291.07C90.7 494.41 109.95 512 133.39 512H378.6c23.44 0 42.69-17.59 44.83-40.93L449.7 180H62.29zm116.66 271.99c-.24.01-.47.01-.68.01-7.97 0-14.62-6.27-14.97-14.31l-9.55-212c-.38-8.28 6.01-15.29 14.3-15.67 9.37-.27 15.29 6.05 15.64 14.29l9.55 212c.38 8.28-6 15.3-14.29 15.68zM271 437c0 8.29-6.71 15-15 15s-15-6.71-15-15V225c0-8.29 6.71-15 15-15s15 6.71 15 15v212zm77.69.69c-.35 8.04-7 14.31-14.97 14.31-.2 0-.44 0-.67-.01-8.29-.38-14.68-7.4-14.3-15.68l9.55-212c.38-8.24 6.33-14.44 15.65-14.29 8.29.38 14.67 7.39 14.29 15.67l-9.55 212zM406 60h-45V45c0-24.81-20.19-45-45-45H196c-24.82 0-45 20.19-45 45v15h-45c-41.37 0-75 33.65-75 75v15h450v-15c0-41.35-33.64-75-75-75zm-75 0H181V45c0-8.28 6.73-15 15-15h120c8.26 0 15 6.72 15 15v15z"></path>
        </svg>`

    itemNameWrap.appendChild(itemName)
    itemSizeWrap.appendChild(itemSize)
    itemWordWrap.appendChild(itemWord)
    itemRemoveWrap.appendChild(itemRemove)

    itemWrap.appendChild(itemNameWrap)
    itemWrap.appendChild(itemSizeWrap)
    itemWrap.appendChild(itemWordWrap)
    itemWrap.appendChild(itemRemoveWrap)
  })

  uploadTable.appendChild(itemWrap)

  itemRemove.addEventListener('click', ev => {
    const removedFileId = +ev.target.closest('.upload_table-remove').getAttribute("id")
    removeItem(removedFileId)
    ev.target.closest('.file-wrap').remove()

  })
}

function removeItem(id) {
  const findItem = uploadFiles.find(el => el.lastModified === id )
  const findInd = uploadFiles.indexOf(findItem)
  uploadFiles.splice(findInd, 1)
  if (!uploadFiles.length) {
    uploadTable.classList.add('not-active')
    uploadTable.classList.remove('flex')
  }
}

function showText(title, content) {
  const tellUsTitle = document.getElementById('valueUrgent')
  const tellUsContent = document.querySelector('.tell-us_value-text')
  tellUsTitle.innerText = title
  tellUsContent.innerHTML = content
}

})
