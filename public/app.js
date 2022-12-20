document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })

  }

  else if (event.target.dataset.type === 'update') {
    const id = event.target.dataset.id
    const element = event.target.closest('li')
    title = element.querySelector('h6').textContent

    const updateTitle = prompt('Введите новое название', title)

    if (updateTitle) {
      update(id, updateTitle).then(() => {
        element.querySelector('h6').textContent = updateTitle
      })
    }

  }
})

async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

async function update(id, content) {
    await fetch(`/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({title: content})
    })
}