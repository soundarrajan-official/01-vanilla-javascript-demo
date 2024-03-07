const content = [
    [
        "React is extremely Popular",
        "It makes building complex and interactive UIs a breeze",
        "Its powerful and flexible",
        "It has a very active and versatile ecosystem"
    ],
    [
        "Components, JSX and Props",
        "State",
        "Hooks (e.g. useEffect())",
        "Dynamic Rendering"
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack Framework)",
        "React Native (build native mobile apps with React"
    ]
]

let btnWhyReactJs = document.getElementById("btn-why-react-js");
let btnCoreFeatures = document.getElementById("btn-core-features");
let btnRelatedResources = document.getElementById("btn-related-resources");
let tabContent = document.getElementById("tab-content");

function displayContent(items) {
    let listContent = ''

    for(const item of items) {
        listContent = listContent + `<li>${item}</li>`
    }

    const list = document.createElement('ul');
    tabContent.innerHTML = '' // clear existing content
    list.innerHTML = listContent // insert new content
    tabContent.append(list)
}

function highlightButton(button) {
    // clear all existing styling & highlights
    btnWhyReactJs.className = ""
    btnCoreFeatures.className = ""
    btnRelatedResources.className = ""

    // set new styling & highlights
    button.className = "active"
}

function handleClick(event) {
    const btnId = event.target.id
    highlightButton(event.target)

    if(btnId === "btn-why-react-js") {
        displayContent(content[0])
    } else if (btnId === "btn-core-features") {
        displayContent((content[1]))
    } else {
        displayContent(content[2])
    }
}

// initially show this content
displayContent(content[0])

btnWhyReactJs.addEventListener("click", handleClick)
btnCoreFeatures.addEventListener("click", handleClick)
btnRelatedResources.addEventListener("click", handleClick)






