const projects = [
    {title: "Projeto Orçamento Pessoal", id: "Orcamento", lastAtt: "03 de Dezembro de 2022", image: "orcamento.png", Tech: "HTML-CSS-JS", type: 1, github: "Orcamento", host: "https://luriquegon.github.io/Orcamento"},
    {title: "Projeto Controle de Estoque com PHP MVC", id: "ControleDeEstoque", lastAtt: "24 de Novembro de 2022", image: "ControleDeEstoque.png", Tech: "HTML-CSS-JS-PHP-SQL", type: 0, github: "ControleDeEstoque"},
    {title: "Projeto Mata Mosquito", id: "MataMosquito", lastAtt: "24 de Novembro de 2022", image: "MataMosquito.png", Tech: "HTML-CSS-JS", type: 1, github: "MataMosquito", host:"https://luriquegon.github.io/MataMosquito/"}

]

console.log(projects)

projects.forEach(project => {
    console.log(project)

    // CARD DO

    const cardGroup = document.querySelector('#cardGroup')

    const col = document.createElement('div')
    col.className = "col-md-6 mb-5 mt-2"

    const card = document.createElement('div')
    card.className = "card position-relative border-0"

    const link = document.createElement('a')
    link.setAttribute('href', `#${project.id}`)
    link.setAttribute('data-bs-toggle', 'modal')
    link.setAttribute('data-bs-target', `#modalProject${project.id}`)

    const cardBody = document.createElement('div')
    cardBody.className = "card-body bg-dark"

    const title = document.createElement('h5')
    title.className = "card-title position-absolute border-bottom border-4 border-light card-title-card bg-primary text-light card-pos"
    title.textContent = project.title

    const lastAtt = document.createElement('div')
    lastAtt.className = "card-text position-absolute bg-secondary text-light border-top border-3 border-light rounded-1 last-att card-pos" 
    lastAtt.textContent =`Ultima atualização: ${project.lastAtt}`   

    const type = document.createElement('div')
    if(project.type == 1){
        type.className = "card-text position-absolute text-light border-1 border-light rounded-1 card-text-card fw-bold bg-success card-pos"
        type.textContent = "Online"
    }else{
        type.className = "card-text position-absolute text-light border-1 border-light rounded-1 card-text-card fw-bold bg-danger card-pos"
        type.textContent = "Offline"
    }

    const img = document.createElement('img')
    img.src = `./image/projects/${project.image}`
    img.className = "card-img-bottom border-0"
    
    cardBody.appendChild(title)
    cardBody.appendChild(lastAtt)
    cardBody.appendChild(type)
    link.appendChild(cardBody)
    link.appendChild(img)
    card.appendChild(link)
    col.appendChild(card)

    // MODAL DO

    const modal = document.createElement('div')
    modal.className = "modal fade"
    modal.id = `modalProject${project.id}`
    modal.setAttribute('tabindex', '-1')

    const modalDialog = document.createElement('div')
    modalDialog.className = "modal-dialog"

    const modalContent = document.createElement('div')
    modalContent.className = "modal-content bg-dark"

    const modalHeader = document.createElement('div')
    modalHeader.className = "modal-header border border-0 text-light text-center"

    const modalTitle = document.createElement('h5')
    modalTitle.className = "modal-title"
    modalTitle.textContent = project.title

    const modalIco = document.createElement('i')
    modalIco.className = "fa fa-close icoClose btn-danger text-danger"
    modalIco.setAttribute('data-bs-dismiss', 'modal')
    modalIco.setAttribute('aria-label', 'close')

    const modalBody = document.createElement('div')
    modalBody.className = "modal-body text-light text-center"

    const modalTech = document.createElement('p')
    modalTech.textContent = "Tecnologias"

    const modalTechText = document.createElement('span')
    modalTechText.className = "text-info"
    modalTechText.textContent = project.Tech

    const modalFooter = document.createElement('div')
    modalFooter.className = "modal-footer border border-0 d-flex justify-content-evenly"

    const modalRepo = document.createElement('a')
    modalRepo.className = "btn btn-primary"
    modalRepo.setAttribute('target', '_blank')
    modalRepo.setAttribute('href', `https://github.com/LuriqueGon/${project.github}#boaLeituraDeCodigo`)
    modalRepo.textContent = "Acessar Repositorio"

    const modalAcess = document.createElement('a')
    modalAcess.className = "btn btn-primary"
    modalAcess.setAttribute('target', '_blank')
    modalAcess.textContent = "Acessar Projeto"

    if(project.type == 1){
        modalAcess.setAttribute('href', `${project.host}#BonsTestes`)
    }
    
    modalFooter.appendChild(modalRepo)
    if(project.type == 1){
        modalFooter.appendChild(modalAcess)
    }

    modalBody.appendChild(modalTech)
    modalBody.appendChild(modalTechText)
    
    modalHeader.appendChild(modalTitle)
    modalHeader.appendChild(modalIco)

    modalContent.appendChild(modalHeader)
    modalContent.appendChild(modalBody)
    modalContent.appendChild(modalFooter)

    modalDialog.appendChild(modalContent)

    modal.appendChild(modalDialog)

    col.appendChild(modal)

    console.log(col)
    cardGroup.appendChild(col)

});